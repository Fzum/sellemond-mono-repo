import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlSanitizerService } from '@sellemond/shared/util-components';

@Component({
  selector: 'components-ui-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiButtonComponent {
  @Input() description: string | undefined;
  @Input() iconSvg: string | undefined;
  @Input() isAnimatedBounce = false;

  @Output() clickedBtn = new EventEmitter();

  constructor(public htmlSanitizer: HtmlSanitizerService) {}
}
