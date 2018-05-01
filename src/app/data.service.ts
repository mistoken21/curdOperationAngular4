import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }
  arr = ["ford","tata","honda"];

  getData(){
    alert("this is my data");
  }

}
