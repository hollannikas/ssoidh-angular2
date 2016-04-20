/**
 * Created by rudi on 04/04/16.
 */
import {Component, EventEmitter, Output} from 'angular2/core';
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

  //@Output() commentAdded:EventEmitter<any> = new EventEmitter();

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

  addComment(comment:HTMLInputElement) {
    this.pictureservice.saveComment(this.id, comment.value ).subscribe(() => {
      comment.value = '';
      this.update();
      //this.commentAdded.emit({});
    }, () => {});
  }
}
