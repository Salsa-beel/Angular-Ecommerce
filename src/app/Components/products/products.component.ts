import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productList : any ;
grandTotal: any;
  constructor( private api :ApiService, private cartService :CartService ) { }

  ngOnInit():void {
    this.api.getProduct().subscribe(res=>{
      this.productList = res;
      this.productList.forEach((a: any) =>{
        Object.assign(a,{quantity:1,total:a.price})
      });
    })
  }


  addtoCart(item: any){
this.cartService.addtoCart(item);
  }
}
