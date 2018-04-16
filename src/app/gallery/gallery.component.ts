import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FlickrService } from '../flickr.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private flickrService :FlickrService) { }

  ngOnInit() {
    this.tag = this.route.snapshot.paramMap.get('tag');

    this.flickrService.getAllPhotos(this.tag, this.page).subscribe(photos => {
      // debugger;
      this.photos = photos.photo;
      // if (photo !== undefined) {
      //   photo.tag = this.tag;
      //   this.photos.unshift(photo);
      // } else {
      //   //this.showError("Sorry, the photo couldn't be found.");
      // }
      this.isLoading = false;
    }, err => {
      // this.showError("Sorry, the photo couldn't be found.");
      this.isLoading = false;
    });
  }

  tag = ""
  page = "1"
  photos = []
  isLoading = true

  hasPhotos() {
    return (this.photos.length !== 0);
  }

}
