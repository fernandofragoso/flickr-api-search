import { Component, OnInit } from '@angular/core';

import { FlickrService } from '../flickr.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private flickrService :FlickrService) { }

  ngOnInit() {
  }

  error = ""
  isLoading = false
  photos = []

  searchPhoto(params) {
    this.isLoading = true
    let tag = params.tag;
    let userId = params.userId;
    this.flickrService.getPhoto(tag, userId).subscribe(photo => {
      if (photo !== undefined) {
        photo.tag = tag;
        this.photos.unshift(photo);
      } else {
        this.showError("Sorry, the photo couldn't be found.");
      }
      this.isLoading = false;
    }, err => {
      this.showError("Sorry, the photo couldn't be found.");
    });
  }

  showError(text) {
    this.error = text;
    setTimeout(()=>{
      this.error = "";
    }, 2000);
  }

  hasPhotos() {
    return (this.photos.length > 0);
  }
}
