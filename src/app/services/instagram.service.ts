import { Injectable } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';

import { keys } from '../core/_config';

@Injectable()
export class InstagramService {

  private instagramUrl = "https://api.instagram.com/v1/tags/vanhops/media/recent?client_id="+keys.instagramKey;

  constructor(private http : Http){ }

  getInstagramImages(){
    console.log('instagramUrl', this.instagramUrl);
    return this.http.get(this.instagramUrl)
        .map(this.extractData);
  }

  private extractData (res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json ? res.json() : null;
    console.log('body', body);
    return (body && body.data || {});
  }

}
