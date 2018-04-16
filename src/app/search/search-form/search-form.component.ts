import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  constructor() { }

  tagValue = ""
  userValue = ""

  ngOnInit() {
  }

  @Output() onSearch = new EventEmitter();

  search(tag, userId) {
    if (!this.isFormInvalid()) {
      this.onSearch.emit({ tag: tag, userId: userId });
      this.cancel();
    }
  }

  cancel() {
    this.tagValue = "";
    this.userValue = "";
  }

  isFormInvalid() {
    return (this.tagValue === "");
  }
}
