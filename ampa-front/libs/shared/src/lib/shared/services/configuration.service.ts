import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  private apiURL: string = "http://localhost:8022/";

  constructor() {

  }

  getApiURL():string
  {
    return this.apiURL;
  }
}
