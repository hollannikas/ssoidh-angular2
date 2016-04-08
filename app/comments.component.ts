/**
 * Created by rudi on 08/04/16.
 */
import {Component, Input} from 'angular2/core';
import {DatePipe} from "angular2/common";
import {Collapse} from 'ng2-bootstrap';

@Component({
  selector: 'comments',
  templateUrl: 'app/comments.component.html',
  directives: [Collapse],
  pipes: [DatePipe]
})

export class CommentComponent {
  private isCollapsed:boolean = false;
  @Input() private comments:Comment[]

  constructor() {
  }
}
