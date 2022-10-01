import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'components-ui-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiButtonComponent implements OnInit {
  @Input() description = '';

  @Output() clickedBtn = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
