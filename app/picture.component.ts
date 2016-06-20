/**
 * Created by rudi on 04/04/16.
 */
import {Component} from '@angular/core';
import {OnActivate, RouteSegment} from '@angular/router';
import {PictureService, Picture} from './services/picture-service';
import {CommentComponent} from './comments.component';
import {Response} from "@angular/http";

@Component({
  selector: 'picture',
  templateUrl: 'app/picture.component.html',
  directives: [CommentComponent],
  providers: [PictureService]
})

export class PictureComponent implements OnActivate {
  private id:string;
  private picture:Picture;

  //@Output() commentAdded:EventEmitter<any> = new EventEmitter();

  constructor(private pictureservice:PictureService) {}

  routerOnActivate(curr: RouteSegment): void {
    this.id = +curr.getParam('id');
  }

  ngOnInit() {
    this.update();
  }

  update() {
    this.pictureservice.getPicture(this.id).subscribe((res:Response) => this.picture = res.json());
  }

  addComment(comment:HTMLInputElement) {
    this.pictureservice.saveComment(this.id, comment.value ).subscribe(() => {
      comment.value = '';
      this.update();
      //this.commentAdded.emit({});
    }, () => {});
  }
}
