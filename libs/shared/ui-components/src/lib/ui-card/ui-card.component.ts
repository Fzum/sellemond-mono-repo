import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'components-ui-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
