/**
 * Created by rudi on 08/04/16.
 */
import {Component, Input} from '@angular/core';
import {DatePipe} from "@angular/common";
import {CollapseDirective} from 'ng2-bootstrap';

@Component({
  selector: 'comments',
  templateUrl: 'app/comments.component.html',
  directives: [CollapseDirective],
  pipes: [DatePipe]
})

export class CommentComponent {
  public isCollapsed:boolean = true;
  @Input() private comments:Comment[]

  constructor() {
  }
}
