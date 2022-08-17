import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Technology } from '../entities/technology.model';

@Injectable({ providedIn: 'root' })
export class TechstackFacade {
  technologies$ = new BehaviorSubject<Technology[]>([]);

  loadTechnologies() {
    this.technologies$.next([
      {
        uuid: 'angular',
        title: 'Angular',
        descriptionHtml:
          "With Angular, you're taking advantage of a platform that can scale from single-developer projects to enterprise-level applications. Angular is designed to make updating as straightforward as possible, so take advantage of the latest developments with a minimum of effort. Best of all, the Angular ecosystem consists of a diverse group of over 1.7 million developers, library authors, and content creators.",
        imgUrl: 'https://angular.io/assets/images/logos/angular/angular.svg',
        link: 'https://angular.io/',
      },
      {
        uuid: 'springframework',
        title: 'Spring Framework',
        descriptionHtml: `Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can "just run". We take an opinionated view of the Spring platform and third-party libraries so you can get started with minimum fuss. Most Spring Boot applications need minimal Spring configuration. If you’re looking for information about a specific version, or instructions about how to upgrade from an earlier release, check out the project release notes section on our wiki.`,
        imgUrl:
          'https://spring.io/images/projects/spring-framework-640ad1b04f7efa89e0f0f7353e6b5e02.svg?v=2',
        link: 'https://spring.io/projects',
      },
      {
        uuid: 'tailwind',
        title: 'Tailwind',
        descriptionHtml:
          'Tailwind CSS is basically a utility-first CSS framework for rapidly building custom user interfaces. It is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.',
        imgUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/600px-Tailwind_CSS_Logo.svg.png?20211001194333',
        link: 'https://tailwindcss.com/',
      },
    ]);
  }
}
