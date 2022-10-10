import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardStatus, UiCardComponent } from '../ui-card/ui-card.component';
import { UiSocialBtnComponent } from '../ui-social-btn/ui-social-btn.component';
import { HtmlSanitizerService } from '@sellemond/shared/util-components';
import { UiButtonComponent } from '../ui-button/ui-button.component';

@Component({
  selector: 'components-ui-hero',
  standalone: true,
  imports: [
    CommonModule,
    UiCardComponent,
    UiSocialBtnComponent,
    UiButtonComponent,
  ],
  templateUrl: './ui-hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiHeroComponent {
  @Input() title: string | null = '';
  @Input() descriptionHtml: string | null = '';
  @Input() imageUrl: string | null = '';
  @Input() cardStatus: CardStatus | undefined;

  heroCardPersonInfoItems: HeroCardPersonInfo[] = [
    {
      svgHtml:
        '<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '                <path d="M14 11H10V13H14V11Z"/>\n' +
        '                <path fill-rule="evenodd" clip-rule="evenodd"\n' +
        '                      d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"/>\n' +
        '              </svg>',
      title: 'Freelance Fullstack Software Engineer',
    },
    {
      svgHtml:
        '<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"\n' +
        '                   stroke="currentColor" stroke-width="2">\n' +
        '                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>\n' +
        '                <path\n' +
        '                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>\n' +
        '                <path stroke-linecap="round" stroke-linejoin="round"\n' +
        '                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>\n' +
        '              </svg>',
      title: 'Bachelor in IT & Telecommunication',
    },
    {
      svgHtml:
        '<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"\n' +
        '                   stroke="currentColor" stroke-width="2">\n' +
        '                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>\n' +
        '                <path\n' +
        '                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>\n' +
        '                <path stroke-linecap="round" stroke-linejoin="round"\n' +
        '                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>\n' +
        '              </svg>',
      title: 'Master in Software Engineering',
    },
    {
      svgHtml:
        '<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '                <path fill-rule="evenodd" clip-rule="evenodd"\n' +
        '                      d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z"/>\n' +
        '                <path fill-rule="evenodd" clip-rule="evenodd"\n' +
        '                      d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z"/>\n' +
        '              </svg>',
      title: 'Vienna, Austria or Remote',
    },
    {
      svgHtml:
        '<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '                <path fill-rule="evenodd" clip-rule="evenodd"\n' +
        '                      d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"/>\n' +
        '              </svg>',
      title: 'office@software-sellemond.com',
    },
  ];

  constructor(public htmlSanitizer: HtmlSanitizerService) {}

  downloadCv() {
    window.open('assets/cv.pdf');
  }
}

interface HeroCardPersonInfo {
  title: string;
  svgHtml: string;
}
