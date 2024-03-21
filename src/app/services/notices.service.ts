import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticesService {

  public baseUrl: string = 'https://newsapi.org/v2/top-headlines?'
  public token: string = 'ba8dfd4bb13449e4a45773898dc60505'

  constructor( private _http: HttpClient ) { }

  getNotices( params: any ): Observable<any> {

    const url = `${ this.baseUrl }country=${ params.country }&category=${ params.category }&apiKey=${ this.token }`;
    return this._http.get( url );
  }
}
