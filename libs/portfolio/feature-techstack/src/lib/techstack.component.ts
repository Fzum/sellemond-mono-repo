import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechstackFacade } from '@sellemond/portfolio/domain';
import { filter, map, Observable, Subscription } from 'rxjs';
import { UiIconGridComponent } from '@sellemond/shared/ui-components';
import { IconGridItem } from '@sellemond/shared/ui-components';
import { UiHeadingComponent } from '../../../../shared/ui-components/src/lib/ui-heading/ui-heading.component';

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
        map((uuid) => uuid.join())
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
          { threshold: 0.3 }
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

  get frameworks$() {
    return this.techstackFacade.techStackSectionContent$.pipe(
      map((c) => c.frameworks)
    );
  }

  get iconGridItems$(): Observable<IconGridItem[]> {
    return this.techstackFacade.techStackSectionContent$.pipe(
      map((c) => c.techstackItems)
    );
  }
}
