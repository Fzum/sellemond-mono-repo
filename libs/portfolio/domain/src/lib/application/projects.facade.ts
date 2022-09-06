import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Project, ProjectTechnology } from '../entities/project.model';

const java: ProjectTechnology = {
  title: 'Java',
  color: 'gray',
};

const spring: ProjectTechnology = {
  title: 'Spring',
  color: 'green',
};

const springBoot: ProjectTechnology = {
  title: 'Spring Boot',
  color: 'green',
};

const jsf: ProjectTechnology = {
  title: 'JSF',
  color: 'blue',
};

const primefaces: ProjectTechnology = {
  title: 'Primefaces',
  color: 'gray',
};

const oracle: ProjectTechnology = {
  title: 'Oracle',
  color: 'red',
};

const angular: ProjectTechnology = {
  title: 'Angular',
  color: 'red',
};

const ngxs: ProjectTechnology = {
  title: 'NGXS',
  color: 'gray',
};

const ngrx: ProjectTechnology = {
  title: 'NGRX',
  color: 'violet',
};

const keycloak: ProjectTechnology = {
  title: 'Angular',
  color: 'blue',
};

@Injectable({ providedIn: 'root' })
export class ProjectsFacade {
  projects$ = new BehaviorSubject<Project[]>([]);

  loadProjects() {
    this.projects$.next([
      {
        uuid: 'schul_heimbeihilfe',
        title: 'Schul- und Heimbeihilfe',
        link: 'https://www.bmbwf.gv.at/Themen/schule/befoe/sbh.html',
        info: {
          role: 'Java Intern',
          technologies: [java, jsf, spring, primefaces, oracle],
        },
      },
      {
        uuid: 'schulbuchkatalog',
        title: 'Schulbuchkatalog',
        link: 'https://www.schulbuchaktion.at/schulbuchlisten.html',
        info: {
          role: 'Fullstack Java JSF',
          technologies: [java, jsf, spring, primefaces, oracle],
        },
      },
      {
        uuid: 'public_schulbuchsuche',
        title: 'Öffentliche Schulbuchsuche',
        link: 'https://www.schulbuchaktion.at/sbkSchulbuchsuche/index.xhtml',
        info: {
          role: 'Fullstack Java Angular',
          technologies: [java, angular, springBoot, oracle],
        },
        imgUrl: 'assets/schulbuchsuche.png',
      },
      {
        uuid: 'public_grabstellensuche',
        title: 'Freie Grabstellensuche',
        link: 'https://www.friedhoefewien.at/freie-grabstellensuche',
        info: {
          role: 'Fullstack Java Angular',
          technologies: [java, angular, springBoot, oracle],
        },
        imgUrl: 'assets/grabstellensuche.png',
      },
      {
        uuid: 'online-bestattung',
        title: 'Bestattungsplaner',
        link: 'https://www.bestattungsplaner.at/#/home',
        info: {
          role: 'Lead Fullstack Java Angular',
          technologies: [java, angular, springBoot, oracle, keycloak, ngxs],
        },
        imgUrl: 'assets/bestattungsplaner.png',
      },
      {
        uuid: 'digitales-grab',
        title: 'Digitales Grab',
        link: 'https://digitalesgrab.friedhoefewien.at/',
        info: {
          role: 'Senior Fullstack Java Angular',
          technologies: [java, angular, springBoot, oracle, keycloak, ngxs],
        },
        imgUrl: 'assets/digigtales_grab.png',
      },
      {
        uuid: 'service-challenge',
        title: 'Service Challenge',
        link: '',
        info: {
          role: 'Senior Fullstack Java Angular',
          technologies: [java, angular, springBoot, oracle, keycloak, ngrx],
        },
      },
      {
        uuid: 'bahnbetretung',
        title: 'Bahnbetretung',
        info: {
          role: 'Senior Fullstack Java Angular',
          technologies: [java, angular, springBoot, oracle, keycloak, ngrx],
        },
      },
    ]);
  }
}
