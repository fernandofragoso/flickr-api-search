import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { SearchFormComponent } from './search/search-form/search-form.component';
import { SearchComponent } from './search/search.component';
import { FlickrService } from './flickr.service';
import { PhotoComponent } from './photo/photo.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    SearchComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [FlickrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
