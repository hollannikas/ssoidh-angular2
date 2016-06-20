/**
 * Created by rudi on 04/04/16.
 */
import {Component} from '@angular/core';
import {PictureService, Picture} from './services/picture-service';
import {ROUTER_DIRECTIVES} from "@angular/router";
import 'rxjs/add/operator/map';

@Component({
  selector: 'picture-grid',
  templateUrl: 'app/picture-grid.html',
  directives: ROUTER_DIRECTIVES,
  providers: [PictureService]
})

export class PictureGridComponent {

  private pictures:Picture[];

  constructor(private pictureservice:PictureService) {
  }

  ngOnInit() {
    this.pictureservice.getPictures().map(response => response.json())
      .subscribe(pictures => {
        this.pictures = pictures;
      }, (error) => { console.error(error)})
    ;
  }

}
