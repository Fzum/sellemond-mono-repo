import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiButtonComponent } from '@sellemond/shared/ui-components';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'components-ui-footer',
  standalone: true,
  imports: [CommonModule, UiButtonComponent],
  templateUrl: './ui-footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiFooterComponent implements OnInit {
  @Output() clickedBackToTop = new EventEmitter();

  constructor(private sanitizer: DomSanitizer) {}

  backToTopIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">\n' +
    '  <path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />\n' +
    '</svg>\n';

  ngOnInit(): void {}

  sanitize(svgHtml: string | undefined) {
    return this.sanitizer.bypassSecurityTrustHtml(svgHtml ?? '');
  }
}
