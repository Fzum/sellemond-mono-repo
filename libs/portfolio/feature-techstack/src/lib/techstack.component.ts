import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TechstackFacade} from '@sellemond/portfolio/domain';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'portfolio-techstack',
  templateUrl: './techstack.component.html',
  styleUrls: ['./techstack.component.scss'],
})
export class TechstackComponent implements OnInit {
  constructor(public techstackFacade: TechstackFacade) {
  }

  ngOnInit() {
    this.techstackFacade.loadTechnologies();
  }
}
