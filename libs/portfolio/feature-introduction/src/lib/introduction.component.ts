import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionFacade } from '@sellemond/portfolio/domain';
import { DomSanitizer } from '@angular/platform-browser';
import { filter, Subscription } from 'rxjs';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'portfolio-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
})
export class IntroductionComponent implements OnInit, AfterViewInit {
  constructor(
    public introductionFacade: IntroductionFacade,
    private sanitizer: DomSanitizer
  ) {}

  private careerEventIntersectionObserver: IntersectionObserver | undefined;
  private careerEventSub: Subscription | undefined;

  ngOnInit() {
    this.introductionFacade.loadCareerEvents();
  }

  sanitize(svgHtml: string | undefined) {
    return this.sanitizer.bypassSecurityTrustHtml(svgHtml ?? '');
  }

  ngAfterViewInit(): void {
    this.careerEventSub = this.introductionFacade.careerEvents$
      .pipe(filter((uuid) => uuid.length > 0))
      .subscribe((careerEvents) => {
        const descriptionChildSelectors = careerEvents
          .map((e) => `#description-${e.uuid}`)
          .map((e) => `${e} > h2, ${e} > div`)
          .join();

        const careerEventDescriptions = document.querySelectorAll(
          descriptionChildSelectors
        );

        this.careerEventIntersectionObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.remove('invisible');
                entry.target.classList.add('xyz-in');
              }
            });
          },
          { threshold: 0.5 }
        );
        careerEventDescriptions.forEach((d) => {
          this.careerEventIntersectionObserver?.observe(d);
        });
      });
  }
}
