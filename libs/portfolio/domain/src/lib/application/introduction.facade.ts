import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CareerEvent } from '../entities/career-event.model';

const graduationSvg =
  '          <svg xmlns="http://www.w3.org/2000/svg" fill="none"  viewBox="0 0 24 24" class="w-12 h-12" stroke="currentColor" stroke-width="2">\n' +
  '            <path d="M12 14l9-5-9-5-9 5 9 5z" />\n' +
  '            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />\n' +
  '            <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />\n' +
  '          </svg>';

@Injectable({ providedIn: 'root' })
export class IntroductionFacade {
  careerEvents$ = new BehaviorSubject<CareerEvent[]>([]);

  loadCareerEvents() {
    this.careerEvents$.next([
      {
        yearStart: 2013,
        yearEnd: 2016,
        title: 'Several WordPress Implementations',
        descriptionHtml:
          '<p>Starting with an internship in 2013 in London, UK I gained some experience in WordPress Development. I worked on several implementations, including websites for\n    <a class="text-indigo-300" target="_blank" href="https://www.fashionvisavis.com/">Fashion Vis a Vis</a>,\n    <a class="text-indigo-300" target="_blank" href="http://www.kunstraum-sellemond.com/">Kunstraum Sellemond</a> and \n    <a class="text-indigo-300" target="_blank" href="https://blightycafe.co.uk/">Blight Cafe</a>.\n</p>',
        svgHtml:
          '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-12 h-12" viewBox="0 0 16 16"> <path d="M12.633 7.653c0-.848-.305-1.435-.566-1.892l-.08-.13c-.317-.51-.594-.958-.594-1.48 0-.63.478-1.218 1.152-1.218.02 0 .039.002.058.003l.031.003A6.838 6.838 0 0 0 8 1.137 6.855 6.855 0 0 0 2.266 4.23c.16.005.313.009.442.009.717 0 1.828-.087 1.828-.087.37-.022.414.521.044.565 0 0-.371.044-.785.065l2.5 7.434 1.5-4.506-1.07-2.929c-.369-.022-.719-.065-.719-.065-.37-.022-.326-.588.043-.566 0 0 1.134.087 1.808.087.718 0 1.83-.087 1.83-.087.37-.022.413.522.043.566 0 0-.372.043-.785.065l2.48 7.377.684-2.287.054-.173c.27-.86.469-1.495.469-2.046zM1.137 8a6.864 6.864 0 0 0 3.868 6.176L1.73 5.206A6.837 6.837 0 0 0 1.137 8z"/> <path d="M6.061 14.583 8.121 8.6l2.109 5.78c.014.033.03.064.049.094a6.854 6.854 0 0 1-4.218.109zm7.96-9.876c.03.219.047.453.047.706 0 .696-.13 1.479-.522 2.458l-2.096 6.06a6.86 6.86 0 0 0 2.572-9.224z"/> <path fill-rule="evenodd" d="M0 8c0-4.411 3.589-8 8-8 4.41 0 8 3.589 8 8s-3.59 8-8 8c-4.411 0-8-3.589-8-8zm.367 0c0 4.209 3.424 7.633 7.633 7.633 4.208 0 7.632-3.424 7.632-7.633C15.632 3.79 12.208.367 8 .367 3.79.367.367 3.79.367 8z"/> </svg>',
      },
      {
        yearStart: 2015,
        yearEnd: 2017,
        title: 'Bachelor of Science in IT & Telecommunication',
        descriptionHtml:
          'In 2017, I finished my Bachelor Studies in IT & Telecommunications at the university of applied science <a href="#">FH Campus Wien</a> in Vienna.',
        svgHtml: graduationSvg,
      },
      {
        yearStart: 2018,
        yearEnd: 2020,
        title: 'Master of Science in Software Engineering',
        descriptionHtml:
          'While I was already working professionally as fullstack software engineer at <a\n' +
          '            href="#">Bundesrechenzentrum GmbH</a> I started my master studies for software engineering and completed in 2020.',
        svgHtml: graduationSvg,
      },
    ]);
  }
}
