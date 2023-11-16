import { Component } from '@angular/core';
import { UserService } from '../auth/user.service';
import { Cart, CartService, Cart_Item } from './cart.service';
import { ProductService } from '../item/product.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PurchaseService } from '../purchase/purchase.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  user_cart?:Cart;
  constructor(private _snackBar: MatSnackBar, public userService: UserService, public cartService: CartService, public productService: ProductService, private router:Router, public purchaseService: PurchaseService){
    if(this.userService.currentUser !== undefined){
      this.user_cart = this.cartService.findUserCart(this.userService.currentUser.id);
    } else {
      this.user_cart = undefined;
      this.router.navigate(['']);
    }
  }
  openSnack(message:string, action:string){
    this._snackBar.open(message, action, {
      duration: 3000
    });
  }
  increment(product_id:number, size:string){
    var item:Cart_Item|undefined = this.user_cart?.items.find(item => item.id === product_id && item.size === size);
    if(item !== undefined){
      item.quantity++;
    }
  }
  decrement(product_id:number, size:string){
    var item:Cart_Item|undefined = this.user_cart?.items.find(item => item.id === product_id && item.size === size);
    if(item !== undefined){
      if(item.quantity > 1){
        item.quantity--;
      }
    }
  }
  remove(product_id:number, size:string){
    let itemIndex: number | undefined = this.user_cart?.items.findIndex(item => item.id === product_id && item.size === size);
    if (itemIndex !== undefined && itemIndex !== -1) {
      this.user_cart?.items.splice(itemIndex, 1);
    }
    if (this.user_cart?.items && this.user_cart.items.length === 0) {
      this.cartService.removeCart(this.user_cart.id);
      this.user_cart = undefined;
    }
  }
  getTotalPrice(): string{
    if(this.userService.currentUser !== undefined){
      return this.cartService.findCartTotalPrice(this.userService.currentUser.id);
    } else {
      return '0RSD';
    }
  }
  finishOrder(user_cart:Cart){
    this.purchaseService.add(user_cart);
    this.cartService.removeCart(user_cart.id);
    this.openSnack("Your order has been finished.", "Close")
    this.router.navigate(['']);
  }
}