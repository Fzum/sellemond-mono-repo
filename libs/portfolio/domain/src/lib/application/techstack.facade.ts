import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TechstackSectionContent } from '../entities/technology.model';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TechstackFacade {
  techStackSectionContent$ = new BehaviorSubject<TechstackSectionContent>({
    techstackItems: [],
    frameworks: [],
  });

  constructor(private http: HttpClient) {}

  techStackSectionContent() {
    this.http
      .get<TechstackSectionContent>('/assets/data/techstack.data.json')
      .subscribe((techstackContent) =>
        this.techStackSectionContent$.next(techstackContent)
      );
  }
}
