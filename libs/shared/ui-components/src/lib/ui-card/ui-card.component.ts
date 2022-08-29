import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'components-ui-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiCardComponent implements OnInit {
  @Input() isAnimatedAll = false;
  @Input() isAnimatedScale = false;
  @Input() isAnimatedBackground = false;
  @Input() imgUrl: string | undefined;
  @Input() cardStatus: CardStatus | undefined;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  sanitize(svgHtml: string | undefined) {
    return this.sanitizer.bypassSecurityTrustHtml(svgHtml ?? '');
  }
}

export interface CardStatus {
  label: string;
  svgHtml: string;
}
