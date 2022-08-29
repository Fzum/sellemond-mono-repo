import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsFacade } from '@sellemond/portfolio/domain';
import { UiCardComponent } from '../../../../shared/ui-components/src/lib/ui-card/ui-card.component';
import { filter, map, Subscription } from 'rxjs';

@Component({
  standalone: true,
  imports: [CommonModule, UiCardComponent],
  selector: 'portfolio-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(public projectsFacade: ProjectsFacade) {}

  private projectCardIntersectionObserver: IntersectionObserver | undefined;
  private projectSub: Subscription | undefined;

  ngOnInit() {
    this.projectsFacade.loadProjects();
  }

  ngAfterViewInit(): void {
    this.projectSub = this.projectsFacade.projects$
      .pipe(
        map((t) => t.map((tt) => `#${tt.uuid}`)),
        filter((uuid) => uuid.length > 0),
        map((uuid) => uuid.join())
      )
      .subscribe((delimitedIds) => {
        const technologieCards = document.querySelectorAll(delimitedIds);
        this.projectCardIntersectionObserver = new IntersectionObserver(
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
          this.projectCardIntersectionObserver?.observe(card);
        });
      });
  }

  ngOnDestroy(): void {
    this.projectCardIntersectionObserver?.disconnect();
    this.projectSub?.unsubscribe();
  }
}
