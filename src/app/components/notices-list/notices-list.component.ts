import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notices-list',
  templateUrl: './notices-list.component.html',
  styleUrls: ['./notices-list.component.css']
})
export class NoticesListComponent {

  @Input()
  public listNews: any;

}
