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

  // array with three projects hard coded
  projects: Project[] = [
    {
      name: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: 'assets/images/projects/project-1.jpg',
    },
    {
      name: 'Project 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: 'assets/images/projects/project-2.jpg',
    },
    {
      name: 'Project 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: 'assets/images/projects/project-3.jpg',
    },
  ];

  ngOnInit() {}
}

interface Project {
  name: string;
  description: string;
  icon: string;
}
