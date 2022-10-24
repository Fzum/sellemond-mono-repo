import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeroContent } from '../entities/hero-content.model';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class HeroFacade {
  content$ = new BehaviorSubject<HeroContent>({
    title: '',
    descriptionHtml: '',
  });

  constructor(private http: HttpClient) {}

  loadHeroContent() {
    this.http
      .get<HeroContent>('assets/data/hero.data.json')
      .subscribe((heroContent) => this.content$.next(heroContent));
  }
}
