import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() onSearch = new EventEmitter();

  search(tag, userId) {
    this.onSearch.emit({ tag: tag, userId: userId });
    this.cancel();
  }

  cancel() {
    tagSearch.value = "";
    userSearch.value = "";
  }
}
