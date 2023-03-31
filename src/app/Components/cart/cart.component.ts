import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {



  constructor( ) { }

  cartProducts:any[]= [];
  total:number=0;
  ngOnInit() : void {

    this.getCartProducts()

  }

  getCartProducts(){

    if ("cart" in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
  }

  this. getCartTotal()
  }



  addAmount (index:number){
    this.cartProducts[index].quantity++
    this. getCartTotal()
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))

  }
  minsAmount (index:number){
    this.cartProducts[index].quantity--
    this. getCartTotal()
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))

  }

  detectChange(){
    this. getCartTotal() // update el total price el gdid
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
  }


  deleteProduct(index:number){
    this. getCartTotal() // bandah el method bta3t get total

    this.cartProducts.splice(index,1)
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))

  }

  getCartTotal(){
    this.total=0
    for(let x in this.cartProducts){
      this.total += this.cartProducts[x].item.price * this.cartProducts[x].quantity
    }
  }

  clearCart(){
    this.cartProducts =[]
    this. getCartTotal() // update el total price el gdid
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))

  }

  // removeItem(item:any) {
  //   this.cartService.removeCartItem(item);
  // }

  // emptyCart() {
  //   this.cartService.removeAllCart();
  // }

}
