import {Injectable} from 'angular2/core';
import {Headers, Response, Request, RequestMethod, RequestOptions} from 'angular2/http';
import {Observable} from "rxjs";
import {HttpClient} from "../utils/http-client";

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
  
  constructor(private http:HttpClient) {
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
      this.http.get(new Request(this.requestoptions)).subscribe(
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
  getPictures():Observable<Response> {
    return this.http.get('http://localhost:8080/rest/pictures/');
  }

  /**
   * adds a comment to a picture's comments
   * @param pictureId
   * @param text
   * @returns {Observable<Response>}
     */
  saveComment(pictureId:string, text:string):Observable<Response> {
    return this.http.put('http://localhost:8080/rest/pictures/' + pictureId + '/comments/add/' + text, "" /*JSON.stringify(text)*/);
  }
  
}

