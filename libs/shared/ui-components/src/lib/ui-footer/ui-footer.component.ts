import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'components-ui-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
