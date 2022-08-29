import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardStatus, UiCardComponent } from '../ui-card/ui-card.component';

@Component({
  selector: 'components-ui-hero',
  standalone: true,
  imports: [CommonModule, UiCardComponent],
  templateUrl: './ui-hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiHeroComponent {
  @Input() title: string | null = '';
  @Input() descriptionHtml: string | null = '';
  @Input() imageUrl: string | null = '';
  @Input() cardStatus: CardStatus | undefined;
}
