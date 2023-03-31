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
    this.getCategories()
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


  getCategories(){
    this.service.getAllCategories().subscribe((res:any)=>{
      console.log(res)
    this.categories=res  // kol da fe 7alet el success
    })
  // }, error =>{
  //   alert("Error") // da fe 7alet el error
  // }     )
  }

  filterCategory(event : any) {

    let value = event.target.value;
    if(value == "all")
    {
      this.getAllProducts()
    } else {
      this.getProductsCategory(value)
    }

  }

  AllCategory(event : any) {

    let value = event.target.value;
    this.getProductsCategory(value)

  }

  getProductsCategory(keyword : string){

    this.service.getProductsByCategory(keyword).subscribe( (res: any) =>{
      this.products = res

    })
  }
}
