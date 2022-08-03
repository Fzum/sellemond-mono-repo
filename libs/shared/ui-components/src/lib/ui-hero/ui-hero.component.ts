import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'components-ui-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiHeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
