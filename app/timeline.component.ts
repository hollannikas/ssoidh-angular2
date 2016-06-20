/**
 * Created by rudi on 04/04/16.
 */
import {Component} from '@angular/core';
import {UserService, UserParams} from "./services/user-service";
import {PictureService, Picture} from "./services/picture-service";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  selector: 'timeline',
  templateUrl: 'app/timeline.component.html',
  directives: ROUTER_DIRECTIVES,
  providers: [UserService, PictureService]
})
export class TimelineComponent {
  private user:UserParams;
  private pictures:Picture[];

  constructor(private userService:UserService, private pictureService:PictureService) {

  }

  ngOnInit() {
    const users = this.userService.getCurrentUser().map(response => response.json())
      .subscribe(_user => {
        this.user = _user;
        console.log("User: " + _user.name + " " + _user.username);
        this.pictureService.getUserPictures(_user.username).map(response => response.json())
          .subscribe(_pictures => {
            this.pictures = _pictures
            console.log("Pics: " + _pictures);
          })

      }, (error) => {
        console.error(error)
      });
  }
}
