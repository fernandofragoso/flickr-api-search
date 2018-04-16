import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FlickrService {

  api_key = `5ab9d8e66f96eccd325b0885eee738f6`;
  base_url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=1&api_key=${this.api_key}`;

  constructor(private http: Http) { }

  getPhoto(tag, userId = "") {
    let params = `&sort=interestingness-desc&per_page=1&extras=date_upload%2Cdate_taken%2Cowner_name%2Cviews%2Curl_q`;
    let url = `${this.base_url}${params}&tags=${tag}&user_id=${userId}`;

    return this.http.get(url).map(res => res.json()).map(photos => photos.photos.photo[0]);
  }

  getAllPhotos(tag, page, userId = "") {
    console.log(userId);
    let params = `&sort=interestingness-desc&per_page=100&extras=url_q%2Cowner_name`;
    let url = `${this.base_url}${params}&tags=${tag}&user_id=${userId}&page=${page}`;

    return this.http.get(url).map(res => res.json()).map(photos => photos.photos);
  }

}
