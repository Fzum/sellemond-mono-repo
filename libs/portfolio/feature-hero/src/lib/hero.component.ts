import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroFacade } from '@sellemond/portfolio/domain';
import { UiHeroComponent } from '@sellemond/shared/ui-components';
import { map } from 'rxjs';
import { HeroContent } from '@sellemond/portfolio/domain';
import { CardStatus } from '../../../../shared/ui-components/src/lib/ui-card/ui-card.component';

@Component({
  standalone: true,
  imports: [CommonModule, UiHeroComponent],
  selector: 'portfolio-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  constructor(private heroFacade: HeroFacade) {}

  cardStatus: CardStatus = {
    label: 'Focusing',
    svgHtml:
      '<path fill-rule="evenodd" clip-rule="evenodd"\n' +
      '      d="M17 21C15.8954 21 15 20.1046 15 19V15C15 13.8954 15.8954 13 17 13H19V12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12V13H7C8.10457 13 9 13.8954 9 15V19C9 20.1046 8.10457 21 7 21H3V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21H17ZM19 15H17V19H19V15ZM7 15H5V19H7V15Z" />',
  };

  ngOnInit() {
    this.heroFacade.loadHeroContent();
  }

  get description$() {
    return this.extract((h) => h.description);
  }

  get imageUrl$() {
    return this.extract((h) => h.imageUrl);
  }

  get title$() {
    return this.extract((h) => h.title);
  }

  private extract(mapFn: (h: HeroContent) => string) {
    return this.heroFacade.content$.pipe(map(mapFn));
  }
}
