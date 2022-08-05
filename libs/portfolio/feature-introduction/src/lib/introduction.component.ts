import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionFacade } from '@sellemond/portfolio/domain';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'portfolio-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
})
export class IntroductionComponent implements OnInit {
  constructor(
    public introductionFacade: IntroductionFacade,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.introductionFacade.loadCareerEvents();
  }

  sanitize(svgHtml: string | undefined) {
    return this.sanitizer.bypassSecurityTrustHtml(svgHtml ?? '');
  }
}
