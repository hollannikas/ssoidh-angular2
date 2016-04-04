import {Injectable} from 'angular2/core';
import {Http, Headers, Response, Request, RequestMethod, RequestOptions, RequestOptionsArgs} from 'angular2/http';

export class Picture {
  private id:string;
  private caption:string;
  private filename:string;
}

@Injectable()
export class PictureService {

  private headers:Headers;
  private requestoptions:RequestOptions;
  
  constructor(private http:Http) {
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
  
}

