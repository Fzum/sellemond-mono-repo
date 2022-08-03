import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeroContent } from '../entities/hero-content';

@Injectable({ providedIn: 'root' })
export class HeroFacade {
  content$ = new BehaviorSubject<HeroContent>({
    title: '',
    description: '',
    imageUrl: 'https://via.placeholder.com/600x400',
  });

  loadHeroContent() {
    this.content$.next({
      title: 'BEST PLACE TO CHOOSE YOUR CLOTHES',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.',
      imageUrl: 'https://merakiui.com/_nuxt/img/Catalogue-pana.32658f1.svg',
    });
  }
}
