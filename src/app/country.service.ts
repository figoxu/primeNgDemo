import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class CountryService {

  constructor(private http:Http) { }

  getCountries(){
    return this.http.get('/assets/data/countries.json').toPromise().then(res=> <any[]> res.json().data)
        .then(data=>{return data;});
  }
}
