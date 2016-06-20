import {Injectable} from "@angular/core";

@Injectable()
export class UploadService {

  constructor() {
  }

  upload(file:File, caption:string) {
    return this.makeFileRequest("http://localhost:8080/rest/pictures/upload", file, caption);
  }

  private makeFileRequest(url: string, file:File, caption:string) {
    return new Promise((resolve, reject) => {
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();
      xhr.open("POST", url, true);
      xhr.setRequestHeader('x-auth-token', localStorage.getItem('jwt'));
      formData.append("file", file, file.name);
      formData.append("caption", caption);
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      };
      xhr.send(formData);
    });
  }

}
