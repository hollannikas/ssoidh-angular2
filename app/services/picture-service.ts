import {Injectable} from 'angular2/core';
import {Headers, Response, Request, RequestMethod, RequestOptions} from 'angular2/http';
import {Observable} from "rxjs";
import {HttpClient} from "../utils/http-client";

export class Picture {
  id:string;
  caption:string;
  filename:string;
  comments:Comment[];
}

export class Comment {
  author:string;
  text:string;
  date:string;
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

  getUserPictures(user:string):Observable<Response> {
    const url = (username:string):string => `http://localhost:8080/rest/pictures/by/${username}`;
    return this.http.get(url(user));
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

