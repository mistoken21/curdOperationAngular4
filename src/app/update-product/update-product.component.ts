import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import "rxjs/add/operator/toPromise";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id: string;
  productObj = {};
  tempProduct = [];
  name : string;
  color : string;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private http: Http) { }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getDataForUpdate();

  }

  getDataForUpdate(){
    this.http.get("http://localhost:3004/products").subscribe(
      (res : Response)=>{this.tempProduct = res.json();
      for(var i=0;i<this.tempProduct.length;i++){
        if(this.tempProduct[i].id == this.id){
         this.name = this.tempProduct[i].name;
         this.color = this.tempProduct[i].color;
        }
      }
      }
    )
  }

  update(product) {
    this.productObj = {
      "name": product.name,
      "color": product.color
    }
    const url = "http://localhost:3004/products/"+this.id;
    this.http.put(url,this.productObj).toPromise().then(
      ()=>{this.router.navigate(['/']);}
    )
  }
}
