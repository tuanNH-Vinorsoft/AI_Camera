import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [NgFor, NgIf, NzIconModule, NgStyle, NgClass],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() pages: number = 1;
  @Input() isFullScreen: boolean = false;

  @Output() pageClick = new EventEmitter<number>();
  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();

  pageNumbers: number[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    this.generatePageNumbers();
  }

  generatePageNumbers(): void {
    const arr = [];
    for (let i = 1; i <= this.pages; i++) {
      if (
        i === 1 ||
        i === this.pages ||
        (i >= this.currentPage - 1 && i <= this.currentPage + 1) ||
        (this.currentPage <= 3 && i <= 4) ||
        (this.currentPage > this.pages - 3 && i > this.pages - 4)
      ) {
        arr.push(i);
      }
    }
    this.pageNumbers = arr;
  }

  onPageClick(page: number): void {
    this.pageClick.emit(page);
  }

  onNext(): void {
    if (this.currentPage < this.pages) {
      this.next.emit();
    }
  }

  onPrevious(): void {
    if (this.currentPage > 1) {
      this.previous.emit();
    }
  }
}
