import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'components-ui-icon-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-icon-grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiIconGridComponent {
  @Input() iconGridItem: IconGridItem = {
    heading: '',
    description: '',
    items: [],
  };
}

export interface IconGridItemDescription {
  category: string;
  title: string;
  iconUrl: string;
}

export interface IconGridItem {
  heading: string;
  description: string;
  items: IconGridItemDescription[];
}
