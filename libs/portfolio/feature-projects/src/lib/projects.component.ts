import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsFacade } from '@sellemond/portfolio/domain';
import { UiCardComponent } from '../../../../shared/ui-components/src/lib/ui-card/ui-card.component';

@Component({
  standalone: true,
  imports: [CommonModule, UiCardComponent],
  selector: 'portfolio-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects = [1, 2, 3, 4, 5];

  constructor(private projectsFacade: ProjectsFacade) {}

  ngOnInit() {}
}
