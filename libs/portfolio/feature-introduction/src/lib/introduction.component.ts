import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionFacade } from '@sellemond/portfolio/domain';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'portfolio-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
})
export class IntroductionComponent implements OnInit {
  constructor(private introductionFacade: IntroductionFacade) {}

  ngOnInit() {}
}
