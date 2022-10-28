import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Project } from '../entities/project.model';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ProjectsFacade {
  projects$ = new BehaviorSubject<Project[]>([]);

  constructor(private http: HttpClient) {}

  loadProjects() {
    this.http
      .get<Project[]>('assets/data/projects.data.json')
      .subscribe((projects) => this.projects$.next(projects));
  }
}
