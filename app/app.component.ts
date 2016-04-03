import {Component} from 'angular2/core';
import {PictureService} from './picture-service';

@Component({
  selector: 'main',
  templateUrl: 'app/app.component.html',
  providers: [PictureService]
})

export class AppComponent {

  private pictures:string[];

  constructor(private pictureservice:PictureService) {
  }

  ngOnInit() {
    this.update();
  }

  update() {
      this.pictureservice.getPictureIDs().then((_pictures:string[]) => {
        this.pictures = _pictures;
    });
  }

}
