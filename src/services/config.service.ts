import { Injectable } from '@angular/core';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public config = {
    host: ""
  };

  constructor() {
    if(environment.production) {
      this.config.host = 'http://52.23.88.1:3339'
    } else {
      this.config.host = 'http://localhost:3339'
    }
  }

}
