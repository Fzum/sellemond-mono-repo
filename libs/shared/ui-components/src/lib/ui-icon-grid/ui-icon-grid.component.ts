import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'components-ui-icon-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-icon-grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiIconGridComponent implements AfterViewInit {
  @Input() iconGridItem: IconGridItem = {
    heading: '',
    description: '',
    items: [],
  };

  private gridItemIntersectionObserver: IntersectionObserver | undefined;

  ngAfterViewInit(): void {
    const delimitedIds = this.iconGridItem.items
      .map((i) => `#${i.uuid}`)
      .join();

    const gridItems = document.querySelectorAll(delimitedIds);
    this.gridItemIntersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('invisible');
            entry.target.classList.add('xyz-in');
          }
        });
      },
      { threshold: 0.3 }
    );
    gridItems.forEach((card) => {
      this.gridItemIntersectionObserver?.observe(card);
    });
  }
}

export interface IconGridItemDescription {
  uuid: string;
  category: string;
  title: string;
  iconUrl: string;
}

export interface IconGridItem {
  heading: string;
  description: string;
  items: IconGridItemDescription[];
}
