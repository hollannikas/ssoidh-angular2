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
   * @param id
   * @returns {Observable<Response>}
    */
  getPicture(id:string):Observable<Response> {
      return this.http.get('http://localhost:8080/rest/pictures/' + id + '/metadata');
  }

  /**
   * Retrieves pictures from service
   * @returns {Observable<Response>}
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
    return this.http.put('http://localhost:8080/rest/pictures/' + pictureId + '/comments', text);
  }
  
}

