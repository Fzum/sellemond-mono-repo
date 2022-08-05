import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CareerEvent } from '../entities/career-event.model';

const graduationSvg =
  '          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-12 h-12" stroke="currentColor" stroke-width="2">\n' +
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
          'In 2017, I finished my Bachelor Studies in IT & Telecommunications at the university of applied science <a class="text-indigo-300" target="_blank" href="https://www.fh-campuswien.ac.at/">FH Campus Wien</a> in Vienna.',
        svgHtml: graduationSvg,
      },
      {
        yearStart: 2017,
        yearEnd: 2020,
        title: 'Bundesrechenzentrum GmbH',
        descriptionHtml:
          'In 2017, I started as an intern at the <a\n' +
          '           class="text-indigo-300" target="_blank" href="https://www.brz.gv.at/">Bundesrechenzentrum GmbH</a>, which marks my beginning of professional Java development.',
        svgHtml:
          '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-12 h-12" viewBox="0 0 201.337 90.664" >\n' +
          '\t<path d="M199.881,86.516v-5.478c0-1.282-1.051-1.982-2.333-1.982h-33.504l-6.57,9.556h40.074   C198.83,88.612,199.881,87.68,199.881,86.516 M196.498,16.618c1.169-1.751,1.87-4.778,1.87-6.873c0-6.41-3.383-7.692-9.906-7.692   h-41.475c-1.276,0-2.327,0.819-2.327,1.982v5.478c0,1.276,1.163,1.976,2.327,1.976h38.68c0.7,0,1.163,0.35,1.163,0.813   c0,0.237-0.113,0.588-0.35,0.938l-41.707,60.693c-1.163,1.745-1.745,4.778-1.745,6.754c0,4.386,1.128,6.535,4.445,7.413   L196.498,16.618z M132.178,87.098c0-0.35-0.119-0.7-0.35-1.05l-26.044-43.511c-2.742,0.534-5.911,0.76-9.49,0.76   c-2.677,0-7.686-0.119-12.814-0.231V11.139c2.801-0.35,9.205-0.35,12.814-0.35c14.565,0,22.138,3.846,22.138,15.497v0.813   c0,5.716-1.614,9.574-4.713,12.09l4.825,8.054c6.297-4,10.369-10.648,10.369-20.144v-0.813c0-18.874-14.215-25.047-32.62-25.047   c-6.754,0-15.491,0.35-20.5,0.932c-2.101,0.231-2.795,0.932-2.795,2.564v81.55c0,1.276,0.932,2.327,2.095,2.327h6.291   c1.282,0,2.095-1.163,2.095-2.327V52.033c6.173,0.231,8.974,0.35,12.814,0.35h1.982h1.051l20.85,34.715   c0.932,1.514,1.632,1.514,3.027,1.514h7.461C131.597,88.612,132.178,87.911,132.178,87.098 M58.309,64.728v-1.982   c0-5.211-1.68-9.763-4.653-13.218c-1.787,1.211-3.733,2.279-5.858,3.199c-0.884,0.386-1.781,0.73-2.671,1.045   c1.864,2.552,2.582,5.704,2.582,8.974v1.982c0,12.583-8.974,15.728-23.42,15.728c-4.077,0-8.268-0.35-12.114-0.463V47.955   c0,0,14.731,0.059,16.019,0c1.567,0,2.991-0.053,4.327-0.154l0.843-0.077c11.152-1.015,17.461-5.443,21.153-10.838   c0.012-0.024,0.024-0.036,0.036-0.053c0.024-0.036,0.047-0.071,0.071-0.101c0.635-0.926,1.104-1.769,1.436-2.463l0.018-0.024   c1.175-2.564,1.763-5.466,1.763-8.659v-1.864l-0.012-0.16C57.704,6.095,42.165,1.24,23.707,1.24h-0.006   c-7.567,0-14.672,0.463-18.518,0.932C2.738,2.403,1.456,3.804,1.456,6.48v77.591c0,2.908,1.163,3.959,3.846,4.309   c4.422,0.694,11.301,1.045,18.987,1.045C42.462,89.425,58.309,84.303,58.309,64.728 M12.175,39.45V10.558   c3.264-0.119,7.573-0.35,11.532-0.35c14.215,0,23.533,2.332,23.533,13.514v1.864c0,7.342-3.615,13.865-17.123,13.865H12.175z"/>\n' +
          '</svg>',
      },
      {
        yearStart: 2018,
        yearEnd: 2020,
        title: 'Master of Science in Software Engineering',
        descriptionHtml:
          'While I was already working professionally as fullstack software engineer at <a\n' +
          '           class="text-indigo-300" target="_blank" href="https://www.brz.gv.at/">Bundesrechenzentrum GmbH</a> I started my master studies for software engineering at the university of applied science <a class="text-indigo-300" target="_blank" href="https://www.technikum-wien.at/">FH Technikum Wien</a> and completed in 2020.',
        svgHtml: graduationSvg,
      },
      {
        yearStart: 2020,
        yearEnd: 2022,
        title: 'adesso Austria GmbH',
        descriptionHtml:
          '2020 I started working for <a class="text-indigo-300" target="_blank" href="https://www.adesso.at/de_at/index-2.jsp">adesso Austria GmbH</a> as fullstack software engineer.',
        svgHtml:
          '<svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor"  class="w-12 h-12" viewBox="263.934 262.51 60.374 76.401">\n    <path d="M 303.718 318.64 C 300.618 320.54 295.518 322.94 291.218 323.34 C 284.218 323.74 284.218 316.74 284.218 312.04 C 284.218 306.94 286.518 305.44 292.018 305.44 L 303.718 305.44 L 303.718 318.64 L 303.718 318.64 Z M 319.618 290.54 C 319.618 274.54 313.418 267.14 293.118 267.14 C 285.718 267.14 277.118 268.34 270.918 270.24 L 272.818 282.74 C 278.618 281.54 285.318 280.84 290.718 280.84 C 301.218 280.84 303.218 282.74 303.218 290.24 L 303.218 293.74 L 286.518 293.74 C 273.618 293.74 268.618 303.14 268.618 316.34 C 268.618 327.64 273.718 335.44 285.418 335.44 C 292.018 335.44 298.618 333.54 304.518 329.64 L 305.718 334.74 L 318.618 334.74 L 318.618 290.74 L 319.618 290.74 L 319.618 290.54 Z"></path>\n</svg>',
      },
    ]);
  }
}
