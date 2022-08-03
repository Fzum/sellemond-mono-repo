import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroFacade } from '@sellemond/portfolio/domain';
import { UiHeroComponent } from '@sellemond/shared/ui-components';
import { map } from 'rxjs';
import { HeroContent } from '@sellemond/portfolio/domain';

@Component({
  standalone: true,
  imports: [CommonModule, UiHeroComponent],
  selector: 'portfolio-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  constructor(private heroFacade: HeroFacade) {}

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
