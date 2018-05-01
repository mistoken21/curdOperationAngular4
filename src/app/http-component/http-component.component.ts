import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-http-component',
  templateUrl: './http-component.component.html',
  styleUrls: ['./http-component.component.css']
})
export class HttpComponentComponent implements OnInit {

  constructor(private http: HttpClient) { }
   ngOnInit() {
    this.http.get("assets/data.json").subscribe((data) => {this.displaydata(data);})
   }
   allData;
   displaydata(data){
    this.allData = data;
   }
}
