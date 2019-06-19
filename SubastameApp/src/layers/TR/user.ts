import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class User {
  _name: string;
  _mail: string;
  
  constructor(public http: Http) {    
  }

  get name(): string {
    return this._name;
  }

  set mail(value: string) {
    this._mail = value;
  }

}
