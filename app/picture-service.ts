import {Injectable} from 'angular2/core';
import {Http, Headers, Response, Request, RequestMethod, RequestOptions, RequestOptionsArgs} from 'angular2/http';

export class Picture {
  private id:string;
  private caption:string;
  private filename:string;
  private comments:Comment[];
}

export class Comment {
  private author:string;
  private text:string;
  private date:string;
}

@Injectable()
export class PictureService {

  private headers:Headers;
  private requestoptions:RequestOptions;
  
  constructor(private http:Http) {
  }

  /**
   * Retrieves picture from service
   * @returns {Promise<Picture>}
   */
  getPicture(id:string):Promise<Picture> {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json; charset=UTF-8');
    this.headers.append('Accept', 'application/json; charset=UTF-8');

    this.requestoptions = new RequestOptions({
      method: RequestMethod.Get,
      url: 'http://localhost:8080/rest/pictures/' + id + '/metadata',
      headers: this.headers,
    })

    return new Promise((resolve, reject)=> {
      this.http.request(new Request(this.requestoptions)).subscribe(
        (response:Response) => {
          const json = response.json();
          if (json.error) {
            reject(json);
          }
          resolve(json);
        },
        () => {
          reject({error: null});
        });
    });
  }

  /**
   * Retrieves pictures from service
   * @returns {Promise<T>}
   */
  getPictures():Promise<Picture[]> {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json; charset=UTF-8');
    this.headers.append('Accept', 'application/json; charset=UTF-8');

    this.requestoptions = new RequestOptions({
      method: RequestMethod.Get,
      url: 'http://localhost:8080/rest/pictures/',
      headers: this.headers,
    })

    return new Promise((resolve, reject)=> {
      this.http.request(new Request(this.requestoptions)).subscribe(
        (response:Response) => {
          const json = response.json();
          if (json.error) {
            reject(json);
          }
          resolve(json);
        },
        () => {
          reject({error: null});
        });
    });
  }

  /**
   * Saves a comments to a picture
   * @param pictureId
   * @param author
   * @param text
   * @returns {Promise<T>|Promise<R>|Promise}
     */
  saveComment(pictureId:string, author:string, text:string) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json; charset=UTF-8');
    this.headers.append('Accept', 'application/json; charset=UTF-8');

    this.requestoptions = new RequestOptions({
      method: RequestMethod.Get,
      url: 'http://localhost:8080/rest/pictures/' + pictureId + '/comments/add/' + author + '/' + text,
      headers: this.headers,
    })

    return new Promise((resolve, reject)=> {
      this.http.request(new Request(this.requestoptions)).subscribe(
        (response:Response) => {
          const json = response.json();
          if (json.error) {
            reject(json);
          }
          resolve(json);
        },
        () => {
          reject({error: null});
        });
    });
  }
  
}

