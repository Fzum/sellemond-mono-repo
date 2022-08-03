import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroFacade } from '@sellemond/portfolio/domain';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'portfolio-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  constructor(private heroFacade: HeroFacade) {}

  ngOnInit() {}
}
