/**
 * Created by rudi on 04/04/16.
 */
import {Component} from 'angular2/core';
import {PictureService, Picture} from './services/picture-service';
import {ROUTER_DIRECTIVES} from "angular2/router";

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
    this.update();
  }

  update() {
    this.pictureservice.getPictures().then((_pictures:Picture[]) => {
      this.pictures = _pictures;
    });
  }

}
