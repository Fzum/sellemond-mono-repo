import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionFacade } from '@sellemond/portfolio/domain';
import { filter, Subscription } from 'rxjs';
import { HtmlSanitizerService } from '@sellemond/shared/util-components';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'portfolio-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
})
export class IntroductionComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(
    public introductionFacade: IntroductionFacade,
    public htmlSanitizer: HtmlSanitizerService
  ) {}

  private careerEventIntersectionObserver: IntersectionObserver | undefined;
  private careerEventSub: Subscription | undefined;

  ngOnInit() {
    this.introductionFacade.loadCareerEvents();
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

  ngOnDestroy(): void {
    this.careerEventSub?.unsubscribe();
    this.careerEventIntersectionObserver?.disconnect();
  }
}
