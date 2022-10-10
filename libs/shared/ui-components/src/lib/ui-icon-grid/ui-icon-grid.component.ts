import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconGridItem } from './ui-icon-grid.model';
import { UiHeadingComponent } from '../ui-heading/ui-heading.component';

@Component({
  selector: 'components-ui-icon-grid',
  standalone: true,
  imports: [CommonModule, UiHeadingComponent],
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
