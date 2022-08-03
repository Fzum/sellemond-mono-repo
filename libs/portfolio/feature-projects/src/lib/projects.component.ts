import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsFacade } from '@sellemond/portfolio/domain';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'portfolio-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  constructor(private projectsFacade: ProjectsFacade) {}

  ngOnInit() {}
}
