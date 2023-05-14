import {Component, AfterViewInit, Input, HostListener, Output, EventEmitter, OnChanges} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  listSize: number = 10;
  @Input('itemList') itemList = true;
  @Input('page') page: number = 1;
  @Input('pagelimit') pagelimit: number = 10;
  @Input('currentPage') currentPage: number = 1;
  @Input('lastPage') lastPage: number = 0;
  @Input('totalSize') collectionSize: number = 0;
  @Output('pageChange') pageChange: EventEmitter<any> = new EventEmitter();

  nextPage() {
    if (this.currentPage == this.lastPage) {
      return;
    }

    this.currentPage++;
    this.pageChange.emit({page: this.currentPage, limit: this.listSize});
  }

  prevPage() {
    if (this.currentPage == 1) {
      return;
    }
    this.currentPage--;
    this.pageChange.emit({page: this.currentPage, limit: this.listSize});
  }

  goFirst() {
    if (this.currentPage == 1) {
      return;
    }
    this.currentPage = 1;
    this.pageChange.emit({page: this.currentPage, limit: this.listSize});
  }

  goLast() {
    if (this.currentPage == this.lastPage) {
      return;
    }

    this.currentPage = this.lastPage;
    this.pageChange.emit({page: this.currentPage, limit: this.listSize});
  }

  changeListSize() {
    this.pageChange.emit({page: this.currentPage, limit: this.listSize});
  }
}
