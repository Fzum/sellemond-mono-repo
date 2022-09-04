import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Project } from '../entities/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectsFacade {
  projects$ = new BehaviorSubject<Project[]>([]);

  loadProjects() {
    this.projects$.next([
      {
        uuid: 'schul_heimbeihilfe',
        title: 'Schul- und Heimbeihilfe',
        descriptionHtml: {
          domain:
            '<p>Als Praktikant konnte ich in einem Projekt für die Berechnung der österreichischen <a class="text-accent-light dark:text-accent-dark" target="_blank"\n' +
            '  href="https://www.bmbwf.gv.at/Themen/schule/befoe/sbh.html">Schul- und Heimbeihilfe</a> mithelfen.</p>',
          technical:
            '<p>Das in Java <a class="text-accent-light dark:text-accent-dark" target="_blank" href="https://spring.io/projects/spring-framework">Spring</a> umgesetzte Service hat eine Vielzahl an\n' +
            ' Services angebunden - z.B. das <a class="text-accent-light dark:text-accent-dark" target="_blank" href="https://www.bmi.gv.at/413/start.aspx">Zentrale Melderegister ZMR</a>. Das Frontend wurde mit JSF und\n' +
            '  <a class="text-accent-light dark:text-accent-dark" target="_blank" href="https://www.primefaces.org/">Primefaces</a> umgesetzt.</p>',
        },
        imgUrl: '',
      },
      {
        uuid: 'schulbuchkatalog',
        title: 'Schulbuchkatalog',
        descriptionHtml: {
          domain:
            '<p>Als eine Ablöse des Altsystems für das Approbationsverfahren von österreichischen Schulbüchern brauchte das\n' +
            ' Bildungsministerium eine moderne Web-Applikation. Die zu überprüfenden Schulbücher wurden von den Autoren angelegt.\n' +
            ' Das upgeloadede Manuskript wurde innerhalb einer Approbationsfrist begutachtet. Im Erfolgsfall landet das Schulbuch in\n' +
            ' der österreichischen <a class="text-accent-light dark:text-accent-dark" target="_blank"\n' +
            '                          href="https://www.schulbuchaktion.at/schulbuchlisten.html">Schulbuchliste</a>.</p>',
          technical:
            '<p>Das\n' +
            ' Service wurde in einer Micro-Servicearchitektur mit Spring und JSF (mit <a class="text-accent-light dark:text-accent-dark" target="_blank"\n' +
            '                                                                             href="https://www.primefaces.org/">Primefaces</a>)\n' +
            '  umgesetzt. Als Fremd-Service war der SOAP Service <a class="text-accent-light dark:text-accent-dark" target="_blank"\n' +
            '                                                       href="https://www.brz.gv.at/was-wir-tun/services-produkte/elak.html">ELAK</a>\n' +
            '  angebunden.</p>',
        },
        imgUrl: '',
      },
      {
        uuid: 'public_schulbuchsuche',
        title: 'Öffentliche Schulbuchsuche',
        descriptionHtml: {
          domain:
            '<p>Die <a class="text-accent-light dark:text-accent-dark" target="_blank" href="https://www.schulbuchaktion.at/sbkSchulbuchsuche/index.xhtml">Öffentliche\n' +
            '  Schulbuchsuche</a> ist für alle zugänglich und bietet eine Suchmöglichkeit über mehrere Parameter an, um ein\n' +
            '  erfolgreich approbiertes Schulbuch zu finden. Das Suchergebnis kann als XLS exportiert werden.</p>',
          technical:
            '<p>Umgesetzt wurde\n' +
            '  die Schulbuchsuche mit <a class="text-accent-light dark:text-accent-dark" target="_blank" href="https://angular.io/">Angular</a> und eine <a\n' +
            '    class="text-accent-light dark:text-accent-dark" target="_blank" href="https://spring.io/projects/spring-boot">Spring Boot</a> Service, der\n' +
            '  auf eine Oracle Datenbank zu greift.</p>',
        },
        imgUrl: '',
      },
      {
        uuid: 'public_grabstellensuche',
        title: 'Freie Grabstellensuche',
        descriptionHtml: {
          domain:
            '<p>Die <a class="text-accent-light dark:text-accent-dark" target="_blank" href="https://www.friedhoefewien.at/freie-grabstellensuche">Freie\n' +
            '  Grabstellensuche</a> ist eine kleine Applikation für die öffentliche Suche von Grabstellen in Wien.\n' +
            '</p>',
          technical:
            '<p>\n' +
            '  In einem <a class="text-accent-light dark:text-accent-dark" target="_blank"\n' +
            '              href="https://angular.io/">Angular</a> Frontend werden in einem iFrame alle gefundenen Grabstellen auf\n' +
            '  einer Karte von Wien eingeblendet.\n' +
            '</p>',
        },
        imgUrl: '',
      },
      {
        uuid: 'online-bestattung',
        title: 'Bestattungsplaner',
        descriptionHtml: {
          domain:
            '<p>Der <a class="text-accent-light dark:text-accent-dark" target="_blank" href="https://www.bestattungsplaner.at/#/home">Bestattungsplaner</a>\n' +
            '  ist ein öffentlicher Service für die Planung\n' +
            '  einer Bestattung oder die Einrichtung einer Vorsorge. In einem step by step Konfigurator kann der User eine Bestattung\n' +
            '  konfigurieren - der Sarg kann interaktiv gestaltet werden mit Blumengesteck, Sargeinlagen und anderem. Die gesamte\n' +
            '  Zeremonie der Bestattung lässt sich ebenfalls konfigurieren - so kann man etwa einen 4-stimmigen Chor singen lassen.\n' +
            '</p>',
          technical:
            '<p>Der Service wurde mit <a class="text-accent-light dark:text-accent-dark" target="_blank" href="https://angular.io/">Angular</a> mit <a class="text-accent-light dark:text-accent-dark" target="_blank" href="https://ngxs.io/">NGXS</a> im\n' +
            ' Frontend umgesetzt. Im Backend kommt <a class="text-accent-light dark:text-accent-dark" target="_blank" href="https://spring.io/projects/spring-boot">Spring Boot</a> mit einer Oracle\n' +
            ' Datenbank zum Einsatz. Für sämtliche Zahlungen wurde der Service von <a class="text-accent-light dark:text-accent-dark" target="_blank"\n' +
            '    href="https://www.six-payment-services.com/en/home.html">Payment Provider</a> angebunden. Als <a class="text-accent-light dark:text-accent-dark" target="_blank"\n' +
            '    href="https://en.wikipedia.org/wiki/Identity_management">IAM</a> kommt <a class="text-accent-light dark:text-accent-dark" target="_blank"\n' +
            '    href="https://www.keycloak.org/">Keycloak</a> zum Einsatz.</p>',
        },
        imgUrl: '',
      },
      {
        uuid: 'digitales-grab',
        title: 'Digitales Grab',
        descriptionHtml: {
          domain:
            '<p>Das <a class="text-accent-light dark:text-accent-dark" target="_blank" href="https://digitalesgrab.friedhoefewien.at/">Digitale Grab</a> ist\n' +
            '  ein öffentliches Service um Verstorbenen\n' +
            '  in einer Art Social Media zu gedenken. Außerdem werden weitere Service angebunden, wie z.B. eine\n' +
            '  Grabstellenversicherung oder das Anzünden einer Kerze an einem bestimmten Tag an der Grabstelle.</p>',
          technical:
            '<p> Der Service\n' +
            '  wurde im Frontend mit <a class="text-accent-light dark:text-accent-dark" target="_blank" href="https://angular.io/">Angular</a> und der <a\n' +
            '    class="text-accent-light dark:text-accent-dark" target="_blank"\n' +
            '    href="https://en.wikipedia.org/wiki/Redux_(JavaScript_library)">Redux</a> Implementierung <a class="text-accent-light dark:text-accent-dark"\n' +
            '                                                                                                 target="_blank"\n' +
            '                                                                                                 href="https://ngrx.io/">NGRX</a>\n' +
            '  realisiert. Im Backend kommt ein <a class="text-accent-light dark:text-accent-dark" target="_blank"\n' +
            '                                      href="https://spring.io/projects/spring-boot">Spring\n' +
            '    Boot</a> Service, der über <a class="text-accent-light dark:text-accent-dark" target="_blank" href="https://en.wikipedia.org/wiki/OAuth">OAuth\n' +
            '    2.0</a> mithilfe von <a class="text-accent-light dark:text-accent-dark" target="_blank"\n' +
            '                            href="https://www.keycloak.org/">Keycloak</a> gesichert ist.</p>',
        },
        imgUrl: '',
      },
      {
        uuid: 'service-challenge',
        title: 'Service Challenge',
        descriptionHtml: {
          domain:
            '<p>Die Service Challenge ist ein firmeninternes Projekt für die Suche von Angestellten mit einer gegebenen Kompetenz.\n' +
            '  Außerdem soll es die Projektlandschaft des Unternehmens abbilden inkl. Erfolge und Lessons Learned.</p>',
          technical:
            '<p>Der Service\n' +
            '  ist im Frontend mit <a class="text-accent-light dark:text-accent-dark" target="_blank" href="https://angular.io/">Angular</a> und der <a\n' +
            '    class="text-accent-light dark:text-accent-dark" target="_blank"\n' +
            '    href="https://en.wikipedia.org/wiki/Redux_(JavaScript_library)">Redux</a> Implementierung <a class="text-accent-light dark:text-accent-dark"\n' +
            '                                                                                                 target="_blank"\n' +
            '                                                                                                 href="https://ngrx.io/">NGRX</a>\n' +
            '  realisiert. Im Backend kommt ein <a class="text-accent-light dark:text-accent-dark" target="_blank"\n' +
            '                                      href="https://spring.io/projects/spring-boot">Spring Boot</a> Service mit Oracle\n' +
            '  und der\n' +
            '  <a class="text-accent-light dark:text-accent-dark" target="_blank" href="https://en.wikibooks.org/wiki/Java_Persistence">JPA</a>\n' +
            '  Implementierung <a class="text-accent-light dark:text-accent-dark" target="_blank"\n' +
            '                     href="https://spring.io/projects/spring-data-jpa">Spring Data JPA</a> zum Einsatz.</p>',
        },
        imgUrl: '',
      },
      {
        uuid: 'bahnbetretung',
        title: 'Bahnbetretung',
        descriptionHtml: {
          domain:
            '<p>Die Bahnbetretung ist eine Web-Applikation im Auftrag der <a class="text-accent-light dark:text-accent-dark" target="_blank"\n' +
            '                                                                href="https://www.wienerlinien.at/">Wiener Linien</a>.\n' +
            '  Eine Firma kann ihre Mitarbeiter zu Schulungen anmelden, damit man die Regeln </p>',
          technical:
            '<p>Der Service ist im Frontend mit <a class="text-accent-light dark:text-accent-dark" target="_blank" href="https://angular.io/">Angular</a> und\n' +
            '  der <a class="text-accent-light dark:text-accent-dark" target="_blank"\n' +
            '         href="https://en.wikipedia.org/wiki/Redux_(JavaScript_library)">Redux</a> Implementierung <a\n' +
            '    class="text-accent-light dark:text-accent-dark" target="_blank"\n' +
            '    href="https://ngrx.io/">NGRX</a> realisiert. Im Backend kommt ein <a class="text-accent-light dark:text-accent-dark" target="_blank"\n' +
            '                                                                         href="https://spring.io/projects/spring-boot">Spring\n' +
            '    Boot</a> Service mit Oracle und der\n' +
            '  <a class="text-accent-light dark:text-accent-dark" target="_blank" href="https://en.wikibooks.org/wiki/Java_Persistence">JPA</a>\n' +
            '  Implementierung <a class="text-accent-light dark:text-accent-dark" target="_blank"\n' +
            '                     href="https://spring.io/projects/spring-data-jpa">Spring Data JPA</a> zum Einsatz.</p>',
        },
        imgUrl: '',
      },
    ]);
  }
}
