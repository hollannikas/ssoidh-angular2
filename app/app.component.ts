import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {PictureGridComponent} from './picture-grid.component';
import {TimelineComponent} from './timeline.component';
import {UploadComponent} from './upload.component';
import {PictureComponent} from './picture.component';

@Component({
  selector: 'main',
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES, PictureGridComponent, TimelineComponent, UploadComponent],
  providers: [ROUTER_PROVIDERS]
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
  }
])

export class AppComponent {
  title = 'Screenshot, or it didn\'t happen';


}
