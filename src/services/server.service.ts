import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(public http: HttpClient) { }

  getMenu(){
    return this.http.get('./assets/data/test.json');
  }


}
