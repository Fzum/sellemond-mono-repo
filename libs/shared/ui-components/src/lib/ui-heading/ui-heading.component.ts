import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'components-ui-heading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-heading.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiHeadingComponent {
  @Input() heading = '';
  @Input() subheading: string | undefined;
}
