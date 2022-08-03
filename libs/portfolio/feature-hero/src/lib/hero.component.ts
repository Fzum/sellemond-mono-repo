import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroFacade } from '@sellemond/portfolio/domain';
import { UiHeroComponent } from '@sellemond/shared/ui-components';

@Component({
  standalone: true,
  imports: [CommonModule, UiHeroComponent],
  selector: 'portfolio-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  constructor(private heroFacade: HeroFacade) {}

  ngOnInit() {}
}
