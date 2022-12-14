import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechstackFacade } from '@sellemond/portfolio/domain';
import { delay, filter, map, Subscription } from 'rxjs';
import { UiIconGridComponent } from '@sellemond/shared/ui-components';
import { UiHeadingComponent } from '@sellemond/shared/ui-components';

@Component({
  standalone: true,
  imports: [CommonModule, UiIconGridComponent, UiHeadingComponent],
  selector: 'portfolio-techstack',
  templateUrl: './techstack.component.html',
  styleUrls: ['./techstack.component.scss'],
})
export class TechstackComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(private techstackFacade: TechstackFacade) {}

  private technologyCardIntersectionObserver: IntersectionObserver | undefined;
  private techstackSub: Subscription | undefined;

  ngOnInit() {
    this.techstackFacade.techStackSectionContent();
  }

  ngAfterViewInit(): void {
    this.techstackSub = this.techstackFacade.techStackSectionContent$
      .pipe(
        map((c) => c.frameworks),
        map((t) => t.map((tt) => `#${tt.uuid}`)),
        filter((uuid) => uuid.length > 0),
        map((uuid) => uuid.join()),
        delay(0)
      )
      .subscribe((delimitedIds) => {
        const technologyCards = document.querySelectorAll(delimitedIds);
        this.technologyCardIntersectionObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.remove('invisible');
                entry.target.classList.add('xyz-in');
              }
            });
          },
          { threshold: 0.3 }
        );
        technologyCards.forEach((card) => {
          this.technologyCardIntersectionObserver?.observe(card);
        });
      });
  }

  ngOnDestroy(): void {
    this.technologyCardIntersectionObserver?.disconnect();
    this.techstackSub?.unsubscribe();
  }

  get frameworks$() {
    return this.techstackFacade.techStackSectionContent$.pipe(
      map((c) => c.frameworks)
    );
  }

  get iconGridItems$() {
    return this.techstackFacade.techStackSectionContent$.pipe(
      map((c) => c.techstackItems)
    );
  }
}
