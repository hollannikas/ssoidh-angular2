/**
 * Created by rudi on 04/04/16.
 */
import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {PictureService, Picture} from './services/picture-service';
import {CommentComponent} from './comments.component';

@Component({
  selector: 'picture',
  templateUrl: 'app/picture.component.html',
  directives: [CommentComponent],
  providers: [PictureService]
})

export class PictureComponent {
  private id:string;
  private picture:Picture;
  private comment:string;

  constructor(routeParams:RouteParams, private pictureservice:PictureService) {
    this.id = routeParams.get('id');
  }

  ngOnInit() {
    this.update();
  }

  update() {
    this.pictureservice.getPicture(this.id).then((_picture:Picture) => {
      this.picture = _picture;
    });
  }

  addComment() {
    this.pictureservice.saveComment(this.id, 'Anonymous', this.comment).then((_picture:Picture) => {
      this.picture = _picture;
      this.comment = null;
      this.update();
    });
  }
}
