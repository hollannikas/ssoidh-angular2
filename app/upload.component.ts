/**
 * Created by rudi on 04/04/16.
 */
import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgStyle} from 'angular2/common';
import {FILE_UPLOAD_DIRECTIVES, FileUploader} from 'ng2-file-upload';

const URL = 'http://localhost:8080/rest/pictures/upload/';

@Component({
  selector: 'upload',
  templateUrl: 'app/upload.component.html',
  directives: [FILE_UPLOAD_DIRECTIVES, NgClass, NgStyle, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class UploadComponent {

  private uploader:FileUploader = new FileUploader({url: URL + this.caption});
  private hasBaseDropZoneOver:boolean = false;
  private caption:string = '';

  ngOnInit() {
    this.uploader.queueLimit = 10000;
  }

  onBlur() {
    this.uploader.url = URL + this.caption;
  }
  
  fileOverBase(e:any) {
    this.hasBaseDropZoneOver = e;
  }
}
