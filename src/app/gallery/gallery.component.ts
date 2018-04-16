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
    this.userId = this.route.snapshot.paramMap.get('userId');
    this.getPhotos(this.tag, "1", this.userId);
  }

  getPhotos(tag, page, userId) {
    this.isLoading = true;

    if (!userId) {
      userId="";
    }

    this.flickrService.getAllPhotos(tag, page.toString(), userId).subscribe(photos => {
      this.totalPages = photos.pages;
      this.photos = photos.photo;
      this.isLoading = false;
    }, err => {
      this.isLoading = false;
    });
  }

  tag = ""
  userId = ""
  page = 1
  totalPages = 0
  photos = []
  isLoading = true

  hasPhotos() {
    return (this.photos.length !== 0);
  }

  goToPage(page) {
    this.getPhotos(this.tag, page, this.userId);
    this.page = page
  }

  getOwnerName() {
    if (this.userId && this.hasPhotos()) {
      return this.photos[0].ownername;
    } 
    return null;
  }

}
