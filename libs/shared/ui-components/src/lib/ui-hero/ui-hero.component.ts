import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'components-ui-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiHeroComponent {
  @Input() title: string | null = '';
  @Input() description: string | null = '';
  @Input() imageUrl: string | null = '';
}
