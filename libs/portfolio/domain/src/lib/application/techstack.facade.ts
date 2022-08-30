import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TechstackSectionContent } from '../entities/technology.model';

@Injectable({ providedIn: 'root' })
export class TechstackFacade {
  techStackSectionContent$ = new BehaviorSubject<TechstackSectionContent>({
    techstackItems: [],
    frameworks: [],
  });

  techStackSectionContent() {
    this.techStackSectionContent$.next({
      frameworks: [
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
      ],
      techstackItems: [
        {
          heading: 'Programming Languages',
          description:
            'Since 2017 I have been mostly developing in the following languages.',
          items: [
            {
              uuid: 'java',
              category: 'Backend',
              title: 'Java',
              iconUrl: 'https://www.vectorlogo.zone/logos/java/java-icon.svg',
            },
            {
              uuid: 'kotlin',
              category: 'Backend',
              title: 'Kotlin',
              iconUrl:
                'https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg',
            },
            {
              uuid: 'typescript',
              category: 'Frontend',
              title: 'Typescript',
              iconUrl:
                'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg',
            },
            {
              uuid: 'html',
              category: 'Frontend',
              title: 'HTML',
              iconUrl:
                'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg',
            },
            {
              uuid: 'css',
              category: 'Frontend',
              title: 'CSS / SCSS',
              iconUrl:
                'https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg',
            },
            {
              uuid: 'sql',
              category: 'Database',
              title: 'SQL',
              iconUrl:
                'https://www.vectorlogo.zone/logos/oracle/oracle-icon.svg',
            },
          ],
        },
      ],
    });
  }
}
