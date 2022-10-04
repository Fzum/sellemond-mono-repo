import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlSanitizerService } from '@sellemond/shared/util-components';

@Component({
  selector: 'components-ui-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiCardComponent {
  @Input() isAnimatedAll = false;
  @Input() isAnimatedScale = false;
  @Input() isAnimatedBackground = false;
  @Input() imgUrl: string | undefined;
  @Input() cardStatus: CardStatus | undefined;

  constructor(public htmlSanitizer: HtmlSanitizerService) {}
}

export interface CardStatus {
  label: string;
  svgHtml: string;
}
