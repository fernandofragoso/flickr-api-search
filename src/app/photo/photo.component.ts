import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  @Input() photo;
  @Input() complete = true;

  goToGallery(tag) {
    this.router.navigate([`/gallery/`, tag]);
  }

}
