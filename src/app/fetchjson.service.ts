import { Injectable } from '@angular/core';
import {Http,Response,Headers} from '@angular/http';

@Injectable()
export class FetchjsonService {
  product = [];
  constructor(private http : Http) { }
  fetchData (){
    return this.http
    .get("http://localhost:3004/products")
    .map((response) => response.json())
    .toPromise();
  }
}
