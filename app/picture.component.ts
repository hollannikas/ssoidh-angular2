/**
 * Created by rudi on 04/04/16.
 */
import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
  selector: 'picture',
  templateUrl: 'app/picture.component.html',
})

export class PictureComponent {
  private id:string;
  private comments:string[] = ['First!', 'Second comment.. bla bla bla '];

  constructor(routeParams:RouteParams) {
    this.id = routeParams.get('id');
    console.log('id = ' + this.id);
  }
}
