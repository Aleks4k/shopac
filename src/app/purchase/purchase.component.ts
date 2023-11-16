import { Component, OnInit } from '@angular/core';
import { UserService } from '../auth/user.service';
import { Router } from '@angular/router';
import { Purchase, PurchaseService } from './purchase.service';
import { ProductService } from '../item/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  userPurchases?: Array<Purchase>;
  max = 5;
  rate = 3;
  overStar: number | undefined;
  percent = 0;
  constructor(private _snackBar: MatSnackBar, public userService:UserService, private router:Router, public purchaseService:PurchaseService, public productService:ProductService){}
  ngOnInit(): void {
    if(this.userService.currentUser !== undefined){
      this.userPurchases = this.purchaseService.getUserPurchases(this.userService.currentUser.id);
      this.userPurchases.sort((a,b) => b.dateOfPurchase.getTime() - a.dateOfPurchase.getTime());
    } else {
      this.router.navigate(['']);
    }
  }
  openSnack(message:string, action:string){
    this._snackBar.open(message, action, {
      duration: 3000
    });
  }
  hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = value;
  }
  resetStar(): void {
    this.overStar = void 0;
  }
  rateProduct(item_id:number, purchase_id:number, user_id:number){
    this.userPurchases = this.purchaseService.rateOrder(purchase_id, item_id, user_id, this.rate);
    this.userPurchases.sort((a,b) => b.dateOfPurchase.getTime() - a.dateOfPurchase.getTime());
    const message = "You have rated " + this.productService.getProductById(item_id)?.name + " with " + this.rate + " stars.";
    this.openSnack(message, "Close");
  }
  calculateAverage(reviews: number[]){
    if (reviews.length === 0) {
      return 'N/A';
    }
    const average = reviews.reduce((acc, val) => acc + val, 0) / reviews.length;
    return average.toFixed(1);
  }
  deleteOrder(order_id:number, user_id:number){
    this.userPurchases = this.purchaseService.deleteOrderById(order_id, user_id);
    //Samo opet sortiramo da ne menja red...
    this.userPurchases.sort((a,b) => b.dateOfPurchase.getTime() - a.dateOfPurchase.getTime());
    this.openSnack("The order has been deleted from the database.", "Close");
  }
  cancelOrder(order_id:number, user_id:number){
    this.userPurchases = this.purchaseService.cancelOrderById(order_id, user_id);
    this.userPurchases.sort((a,b) => b.dateOfPurchase.getTime() - a.dateOfPurchase.getTime());
    this.openSnack("The order has been canceled.", "Close");
  }
}