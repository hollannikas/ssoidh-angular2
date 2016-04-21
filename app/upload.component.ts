/**
 * Created by rudi on 04/04/16.
 */
import {Component} from 'angular2/core';
import {
  CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgStyle, FormBuilder, ControlGroup,
  Validators
} from 'angular2/common';
import {UploadService} from './services/upload-service';
import {Router, ROUTER_DIRECTIVES} from "angular2/router";
import {Picture} from "./services/picture-service";

@Component({
  selector: 'upload',
  templateUrl: 'app/upload.component.html',
  providers: [UploadService],
  directives: [ROUTER_DIRECTIVES, NgClass, NgStyle, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class UploadComponent {

  private pictureForm:ControlGroup;
  private file:File;
  private caption:string = '';

  constructor(private uploadService:UploadService,
              private router:Router,
              fb:FormBuilder) {
    this.pictureForm = fb.group({
      caption: ["", Validators.required]
    })
  }

  fileChanged(event) {
    this.file = event.srcElement.files.item(0);
    console.log("File name: ", this.file.name);
  }

  upload(event) {
    this.uploadService.upload(this.file, this.caption).then((result:Picture) => {
      this.router.navigate(['/Picture', { id: result.id }]);
    }, (error) => {
      console.error(error);
    });
  }

}
