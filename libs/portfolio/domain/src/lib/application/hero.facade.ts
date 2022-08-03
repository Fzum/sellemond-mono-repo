import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeroContent } from '../entities/hero-content';

const description =
  "I'm Fabian, a freelancer passionate about software engineering. " +
  'I am experienced in developing web applications starting from the user interface until all the way back to the database - the full stack. ';

@Injectable({ providedIn: 'root' })
export class HeroFacade {
  content$ = new BehaviorSubject<HeroContent>({
    title: '',
    description: '',
    imageUrl: 'https://via.placeholder.com/600x400',
  });

  loadHeroContent() {
    this.content$.next({
      title: 'Welcome',
      description,
      imageUrl: 'https://merakiui.com/_nuxt/img/Catalogue-pana.32658f1.svg',
    });
  }
}
