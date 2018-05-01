import { Component, OnInit,EventEmitter,Inject} from '@angular/core';
import {Http,Response} from '@angular/http'
import { MatDialog } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { FetchjsonService } from '../fetchjson.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private http : Http,
    public dialog: MatDialog,
  private router : Router,
private data : FetchjsonService,
@Inject(MAT_DIALOG_DATA) public dialogData: any) { }
product={};
tempProduct = [];
name : string;
color : string;
title : string = "Add Product";
  ngOnInit() {
    if(this.dialogData.id > 0){
      this.getDataForUpdate();
      this.title = "Update Product";
    }
  }
  onAdd = new EventEmitter();

  addNewProduct(data){
    this.product = {
      "name" : data.name,
      "color" : data.color
    }
    if(this.dialogData.id == 0){
    this.http.post("http://localhost:3004/products/" , this.product).subscribe(
      (res : Response)=> {console.log(res);
      this.dialog.closeAll();
      this.onAdd.emit();
    }
    )
  }else{
    const url = "http://localhost:3004/products/"+this.dialogData.id;
    this.http.put(url,this.product).toPromise().then(
      ()=>{this.dialog.closeAll();
        this.onAdd.emit();}
    )
  }
  }

  getDataForUpdate(){
    this.http.get("http://localhost:3004/products").subscribe(
      (res : Response)=>{this.tempProduct = res.json();
      for(var i=0;i<this.tempProduct.length;i++){
        if(this.tempProduct[i].id == this.dialogData.id){
         this.name = this.tempProduct[i].name;
         this.color = this.tempProduct[i].color;
        }
      }
      }
    )
  }
}
