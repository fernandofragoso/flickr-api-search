import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { SearchFormComponent } from './search/search-form/search-form.component';
import { SearchComponent } from './search/search.component';
import { FlickrService } from './flickr.service';
import { PhotoComponent } from './photo/photo.component';
import { GalleryComponent } from './gallery/gallery.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    SearchComponent,
    PhotoComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: SearchComponent
      },
      {
        path: 'gallery/:tag',
        component: GalleryComponent
      }
    ])
  ],
  providers: [FlickrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
