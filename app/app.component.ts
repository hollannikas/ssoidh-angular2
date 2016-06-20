import {Component} from '@angular/core';
import {Router, Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import {PictureGridComponent} from './picture-grid.component';
import {TimelineComponent} from './timeline.component';
import {UploadComponent} from './upload.component';
import {PictureComponent} from './picture.component';
import {SignInComponent} from "./signin.component";
import {SignUpComponent} from "./signup.component";
import {SignInService} from "./services/signin-service";

@Component({
  selector: 'main',
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES, PictureGridComponent, TimelineComponent, UploadComponent, SignInComponent, SignUpComponent],
  providers: [ROUTER_PROVIDERS, SignInService]
})

@Routes([
  {
    path: '/grid',
    component: PictureGridComponent, //useAsDefault: true
  },
  {
    path: '/upload',
    component: UploadComponent
  },
  {
    path: '/timeline',
    component: TimelineComponent
  },
  {
    path: '/picture/:id',
    component: PictureComponent
  },
  {
    path: '/signin',
    component: SignInComponent
  },
  {
    path: '/signup',
    component: SignUpComponent
  }
])

export class AppComponent {
  title = 'Screenshot, or it didn\'t happen';

  constructor(private router:Router, private signInService:SignInService) {

  }

  logout() {
    this.signInService.signOut();
    this.router.navigate(['/PictureGrid']);
  }

}
