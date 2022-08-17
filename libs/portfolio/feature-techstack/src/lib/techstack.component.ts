import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechstackFacade } from '@sellemond/portfolio/domain';
import { filter, map, Subscription } from 'rxjs';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'portfolio-techstack',
  templateUrl: './techstack.component.html',
  styleUrls: ['./techstack.component.scss'],
})
export class TechstackComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(public techstackFacade: TechstackFacade) {}

  private technologyCardIntersectionObserver: IntersectionObserver | undefined;
  private techstackSub: Subscription | undefined;

  ngOnInit() {
    this.techstackFacade.loadTechnologies();
  }

  ngAfterViewInit(): void {
    this.techstackSub = this.techstackFacade.technologies$
      .pipe(
        map((t) => t.map((tt) => `#${tt.uuid}`)),
        filter((uuid) => uuid.length > 0),
        map((uuid) => uuid.join(', '))
      )
      .subscribe((delimitedIds) => {
        const technologieCards = document.querySelectorAll(delimitedIds);
        this.technologyCardIntersectionObserver = new IntersectionObserver(
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
        technologieCards.forEach((card) => {
          this.technologyCardIntersectionObserver?.observe(card);
        });
      });
  }

  ngOnDestroy(): void {
    this.technologyCardIntersectionObserver?.disconnect();
    this.techstackSub?.unsubscribe();
  }
}
