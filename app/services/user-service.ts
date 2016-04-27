/**
 * Created by rudi on 17/04/16.
 */
import {Observable} from "rxjs/Observable";
import {Injectable} from "angular2/core";
import {Headers, RequestOptions, Response} from "angular2/http";
import {HttpClient} from "../utils/http-client";

const url = 'http://localhost:8080/rest/users';

export interface UserParams {
  email?:string;
  password?:string;
  name?:string;
  username?:string;
}

@Injectable()
export class UserService {

  constructor(private http:HttpClient) {
  }

  create(params:UserParams):Observable<Response> {
    return this.http.post(url, JSON.stringify(params));
  }

  getCurrentUser():Observable<Response> {
    return this.http.get(url);
  }

}
