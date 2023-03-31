import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : any [] = [];
catgories :any[]=[];
grandTotal: any;
categories: any;
  constructor( private service :ProductsService, private cartService :CartService ) { }

  ngOnInit():void {
    this.getAllProducts()
    this.getAllCategories()
  }


  addtoCart(item: any){
this.cartService.addtoCart(item);
  }

  getAllProducts(){
    this.service.getAllProducts().subscribe((res:any)=>{

    this.products=res // kol da fe 7alet el success
  }, error =>{
    alert("Error") // da fe 7alet el error
  }     )
  }


  getAllCategories(){
    this.service.getAllCategories().subscribe((res:any)=>{
      console.log(res)
    this.categories=res // kol da fe 7alet el success
  }, error =>{
    alert("Error") // da fe 7alet el error
  }     )
  }

  filterCategory(event : any) {

    let value = event.target.value;
    console.log(value)
  }
}
