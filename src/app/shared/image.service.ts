import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';    //all the application constants stored here as an exported object
import { Http, Headers } from '@angular/http';    //for standard http communication. provides methods like get, post, prut, delete, patch etc.
import 'rxjs/add/operator/map';    //to map the Observable into another form

@Injectable()
export class ImageService {

  private query: string;
  private API_KEY: string = environment.PIXABAY_API_KEY;
  private API_URL: string = environment.PIXABAY_API_URL;

  constructor(private _http: Http) { }

}


//Service created using angular CLI
//command : ng generated service shared/image