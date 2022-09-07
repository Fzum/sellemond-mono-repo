import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'components-ui-social-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-social-btn.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiSocialBtnComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
