import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  getProducts() {
    throw new Error('Method not implemented.');
  }

  public cartItemList : any = []
  public productList = new BehaviorSubject<any> ([]) //add and remove
constructor() { }


getProduct() {

  return this.productList.asObservable();
}


setProduct( product :any) {
  this.cartItemList.push (...product);
  this.productList.next(product);
}

addtoCart (product: any)
{
  this.cartItemList.push (product);
  this.productList.next(this.cartItemList);
  this.getTotalPrice();
  console.log(this.cartItemList)

}

getTotalPrice(): number{
  let grandTotal = 0;
  this.cartItemList.map((a:any)=>{
    grandTotal += a.total;
  })
  return grandTotal;
}

removeCartItem (product:any){
  this.cartItemList.map((a:any,index:any)=>{
if(product.id=== a.id) {
  this.cartItemList.splice(index,1);
}
  })
  this.productList.next(this.cartItemList);
}



removeAllCart()
{
  this.cartItemList = []
  this.productList.next(this.cartItemList);
}

}
