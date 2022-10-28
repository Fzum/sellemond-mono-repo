import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CareerEvent } from '../entities/career-event.model';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class IntroductionFacade {
  careerEvents$ = new BehaviorSubject<CareerEvent[]>([]);

  constructor(private http: HttpClient) {}

  loadCareerEvents() {
    this.http
      .get<CareerEvent[]>('assets/data/introduction.data.json')
      .subscribe((careerEvents) => this.careerEvents$.next(careerEvents));
  }
}
