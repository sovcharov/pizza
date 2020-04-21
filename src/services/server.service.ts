import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(public http: HttpClient) { }

  test(){
    return this.http.get('./assets/data/test.json');
  }


}
