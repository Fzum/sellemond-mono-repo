import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeroContent } from '../entities/hero-content.model';

const description = `<p>I'm Fabian, a <span class="text-accent-light decoration-accent-light dark:text-accent-dark dark:decoration-accent-dark">Freelance Fullstack Java developer</span> passionate about software
  engineering and <span class="text-accent-light decoration-accent-light dark:text-accent-dark dark:decoration-accent-dark">clean code</span>. I am experienced in developing <span class="text-accent-light decoration-accent-light dark:text-accent-dark dark:decoration-accent-dark">web applications</span> starting from the user
  interface all the way back to the <span class="text-accent-light decoration-accent-light dark:text-accent-dark dark:decoration-accent-dark">database</span>.</p><br><p>My professional career started
  in 2017 while I was doing my <span class="text-accent-light decoration-accent-light dark:text-accent-dark dark:decoration-accent-dark">Bachelor Studies in IT and Telecommunication</span>. Since then,
  I could gain comprehensive insights in different projects and teams of all sizes.</p> <br><p>To intensify my knowledge
  I started a <span class="text-accent-light decoration-accent-light dark:text-accent-dark dark:decoration-accent-dark">Masters program in Software Engineering</span> that I could successfully pass in
  2020.</p><br><p>Take a look around to familiarize yourself with my competences and experiences and don't hesitate
  contacting me if I could be a good fit in your team.</p>`;

@Injectable({ providedIn: 'root' })
export class HeroFacade {
  content$ = new BehaviorSubject<HeroContent>({
    title: '',
    descriptionHtml: '',
  });

  loadHeroContent() {
    this.content$.next({
      title: 'Welcome!',
      descriptionHtml: description,
    });
  }
}
