import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import "rxjs/add/operator/toPromise";
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ProductComponent } from '../product/product.component';
import { FetchjsonService } from '../fetchjson.service';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-json-server',
  templateUrl: './json-server.component.html',
  styleUrls: ['./json-server.component.css']
})


export class JsonServerComponent implements OnInit {
  constructor(private http: Http, private router: Router,
    public dialog: MatDialog, private data: FetchjsonService) {
     }
  product : Element[];
  id: number;
  displayedColumns = ['id', 'name', 'color','delete','update'];
  dataSource = new MatTableDataSource(this.product);


  private headers = new Headers({ "Content-Type": "application/json" });
  dialog1: any;
  openPopup(id1) {
    this.dialog1 = this.dialog.open(ProductComponent,{data :{
      id : id1
    }});
    const sub = this.dialog1.componentInstance.onAdd.subscribe(() => {
      this.fetchData();
  });
  }
  fetchData() {
    this.data.fetchData().then((res) => {
      this.product = res;
      this.dataSource = new MatTableDataSource(this.product);
      //this.gridOptions.rowData = this.product;
    });
  }

  deleteProduct = function (id) {
    if (confirm("Are you sure")) {
      const url = `${"http://localhost:3004/products"}/${id}`;
      return this.http.delete(url, { headers: this.headers }).toPromise().then(
        () => { this.fetchData(); }
      )
    }
  }
  ngOnInit() {
    this.fetchData();
  }
  updateProduct(id) {
    this.router.navigate(['/update', id]);
  }
}
export interface Element {
  id: number;
  name: string;
  color: string;
  buttons : string
}
