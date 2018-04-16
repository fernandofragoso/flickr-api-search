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
    this.getPhotos(this.tag, this.page)
  }

  getPhotos(tag, page) {
    this.isLoading = true;
    this.flickrService.getAllPhotos(tag, page.toString()).subscribe(photos => {
      this.totalPages = photos.pages;
      this.photos = photos.photo;
      this.isLoading = false;
    }, err => {
      this.isLoading = false;
    });
  }

  tag = ""
  page = 1
  totalPages = 0
  photos = []
  isLoading = true

  hasPhotos() {
    return (this.photos.length !== 0);
  }

  goToPage(page) {
    this.getPhotos(this.tag, page);
    this.page = page
  }

}
