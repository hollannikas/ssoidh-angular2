import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
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

@RouteConfig([
  {
    path: '/grid',
    name: 'PictureGrid',
    component: PictureGridComponent,
    useAsDefault: true
  },
  {
    path: '/upload',
    name: 'Upload',
    component: UploadComponent
  },
  {
    path: '/timeline',
    name: 'Timeline',
    component: TimelineComponent
  },
  {
    path: '/picture/:id',
    name: 'Picture',
    component: PictureComponent
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignInComponent
  },
  {
    path: '/signup',
    name: 'SignUp',
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
