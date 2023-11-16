import { Component, OnInit } from '@angular/core';
import { ProductService } from './item/product.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './auth/login/login.component';
import { UserService } from './auth/user.service';
import { CartService } from './cart/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'shopac';
  categories: string[] = [];
  isClickedProfile:boolean = false;
  constructor(public productService: ProductService, private router:Router, public dialog:MatDialog, public userService: UserService, public cartService: CartService, private _snackBar: MatSnackBar){
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    }
  }
  ngOnInit() {
    this.categories=this.productService.getCategories();
  }
  onCategorySelected(category: string){
    this.router.navigate(['/Category'], {queryParams: {category: category}});
  }
  openLoginDialog(){
    const dialogRef = this.dialog.open(LoginComponent, {
      height: 'auto',
      width: '400px',
    });
  }
  openSnack(message:string, action:string){
    this._snackBar.open(message, action, {
      duration: 3000
    });
  }
  openEditDialog(){
    this.isClickedProfile = !this.isClickedProfile;
  }
  gotoCart(){
    if(this.userService.currentUser === undefined)
    {
      this.openSnack("You have to be logged in.", "Close");
    } else {
      this.router.navigate(['cart']);
    }
  }
  logoff(){
    this.userService.currentUser = undefined;
    this.isClickedProfile = !this.isClickedProfile;
    this.router.navigate(['']);
  }
  editProfile(){
    this.isClickedProfile = !this.isClickedProfile;
    this.router.navigate(['profile']);
  }
  openHistory(){
    this.isClickedProfile = !this.isClickedProfile;
    this.router.navigate(['orders']);
  }
  getCartTotalItems(): number{
    if(this.userService.currentUser !== undefined){
      return this.cartService.findCartTotalItems(this.userService.currentUser.id);
    } else {
      return 0;
    }
  }
  getCartTitle(): string{
    if(this.userService.currentUser !== undefined){
      return this.cartService.findCartTotalPrice(this.userService.currentUser.id);
    } else {
      return 'Cart';
    }
  }
}
