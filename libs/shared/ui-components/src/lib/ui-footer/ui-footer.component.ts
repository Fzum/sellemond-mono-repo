import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiButtonComponent } from '@sellemond/shared/ui-components';
import { HtmlSanitizerService } from '@sellemond/shared/util-components';
import { SocialLink } from '../model/social-link.model';
import { UiHeadingComponent } from '../ui-heading/ui-heading.component';

@Component({
  selector: 'components-ui-footer',
  standalone: true,
  imports: [CommonModule, UiButtonComponent, UiHeadingComponent],
  templateUrl: './ui-footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiFooterComponent {
  @Input() header = '';
  @Input() contactEmailAddress = '';
  @Input() socialLinks: SocialLink[] = [];

  @Output() clickedBackToTop = new EventEmitter();

  constructor(public htmlSanitizer: HtmlSanitizerService) {}

  backToTopIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 m-auto">\n' +
    '  <path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />\n' +
    '</svg>\n';

  openEmailClient() {
    window.location.href = `mailto:${this.contactEmailAddress}`;
  }
}
