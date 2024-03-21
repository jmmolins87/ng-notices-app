import { Component, Input } from '@angular/core';

import { NoticesService } from './services/notices.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title: string = 'Buscador de notícias';
  public listNews: any[] = [];
  public loading: boolean = false

  constructor( private _noticesService: NoticesService ) { }

  searchNotices( params: any ) {

    this.loading = true;
    this._noticesService.getNotices( params ).subscribe( data => {
      this.listNews = data.articles;
      this.loading = false;
    }, error => {
      console.log( error );
    })
  }
  
}
