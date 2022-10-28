import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsFacade } from '@sellemond/portfolio/domain';
import { UiCardComponent } from '@sellemond/shared/ui-components';
import { delay, filter, map, Subscription } from 'rxjs';
import { UiToggleSwitchComponent } from '@sellemond/shared/ui-components';

@Component({
  standalone: true,
  imports: [CommonModule, UiCardComponent, UiToggleSwitchComponent],
  selector: 'portfolio-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(public projectsFacade: ProjectsFacade) {}

  private projectCardIntersectionObserver: IntersectionObserver | undefined;
  private projectSub: Subscription | undefined;

  isCompactViewEnabled = false;
  isTechnologyXrayViewEnabled = false;

  ngOnInit() {
    this.projectsFacade.loadProjects();
  }

  ngAfterViewInit(): void {
    this.projectSub = this.projectsFacade.projects$
      .pipe(
        map((t) => t.map((tt) => `#${tt.uuid}`)),
        filter((uuid) => uuid.length > 0),
        map((uuid) => uuid.join()),
        delay(0)
      )
      .subscribe((delimitedIds) => {
        const projectCards = document.querySelectorAll(delimitedIds);
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
        projectCards.forEach((card) => {
          this.projectCardIntersectionObserver?.observe(card);
        });
      });
  }

  ngOnDestroy(): void {
    this.projectCardIntersectionObserver?.disconnect();
    this.projectSub?.unsubscribe();
  }
}
