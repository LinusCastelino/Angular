import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';    //all the application constants stored here as an exported object
import { HttpClient } from '@angular/common/http';    //for standard http communication. provides methods like get, post, put, delete, patch etc.
import 'rxjs/add/operator/map';    //to map the Observable into another form
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ImageService {

  private query: string;
  private API_KEY: string = '?key='+environment.PIXABAY_API_KEY;
  private API_URL: string = environment.PIXABAY_API_URL;
  private URL : string = this.API_URL + this.API_KEY  + '&q=';
  private resultsPerPage : string = '&per_page=10';

  constructor(private _http: HttpClient) { }

  public getImage(query: string) {
    return this._http.get(this.URL + query + this.resultsPerPage);//.map(res => res.json());
  }
}


//ImageService service created using angular CLI
//command : ng generated service shared/image