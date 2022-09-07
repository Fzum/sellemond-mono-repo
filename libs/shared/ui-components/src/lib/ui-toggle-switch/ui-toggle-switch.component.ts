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
  selector: 'components-ui-toggle-switch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-toggle-switch.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiToggleSwitchComponent implements OnInit {
  @Input() title = 'Toggle Me';
  @Input() isChecked = false;
  @Output() isCheckedChange = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  toggleIsChecked() {
    this.isChecked = !this.isChecked;
    this.isCheckedChange.emit(this.isChecked);
  }
}
