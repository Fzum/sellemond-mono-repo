import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeroContent } from '../entities/hero-content.model';

const description = `<p>I'm Fabian, a <span class="text-accent-dark decoration-accent-dark">Freelance Full Stack Java developer</span> passionate about software
  engineering and Clean Code. I am experienced in developing <span class="text-accent-dark decoration-accent-dark">web applications</span> starting from the user
  interface to all the way back to the <span class="text-accent-dark decoration-accent-dark">database</span>.</p><br><p>My professional career started
  in 2017 while I was making my <span class="text-accent-dark decoration-accent-dark">Bachelor Studies in IT and Telecommunication</span>. Since then,
  I could gain comprehensive insights in different projects and teams of all sizes.</p> <br><p>To intensify my knowledge
  I started a <span class="text-accent-dark decoration-accent-dark">Masters program in Software Engineering</span> that I could successfully pass in
  2020.</p><br><p>Take a look around to familiarize yourself with my competences and experiences and don't hesitate
  contacting me when I could be a good fit in your team.</p>`;

@Injectable({ providedIn: 'root' })
export class HeroFacade {
  content$ = new BehaviorSubject<HeroContent>({
    title: '',
    descriptionHtml: '',
    imageUrl: 'https://via.placeholder.com/600x400',
  });

  loadHeroContent() {
    this.content$.next({
      title: 'Welcome!',
      descriptionHtml: description,
      imageUrl: 'https://merakiui.com/_nuxt/img/Catalogue-pana.32658f1.svg',
    });
  }
}
