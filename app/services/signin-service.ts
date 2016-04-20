/**
 * Created by rudi on 09/04/16.
 */
import {Injectable} from 'angular2/core';
import {Response, RequestOptions, Headers, Http} from 'angular2/http';
import {Observable} from "rxjs";
import 'rxjs/add/operator/do';

@Injectable()
export class SignInService {

  constructor(private http:Http) {
  }

  signIn(email, password):Observable<Response> {
    return this.http.post('http://localhost:8080/api/login', JSON.stringify({
      email: email,
      password: password,
    })).do(resp => {
      localStorage.setItem('jwt', resp.headers.get('x-auth-token'));
    });
  }

  signOut():void {
    localStorage.removeItem('jwt');
  }

  isSignedIn():boolean {
    return localStorage.getItem('jwt') !== null;
  }

}
