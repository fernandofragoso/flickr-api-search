import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() page;
  @Input() totalPages;

  @Output() onChangePage = new EventEmitter();

  goToPage(page) {
    this.onChangePage.emit(page);
  }

}
