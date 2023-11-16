import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/item/product.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name?: string;
  surname?: string;
  email?: string;
  dateOfBirth?: Date;
  gender?:string;
  address?:string;
  phone_number?:string;
  fav_category?: string;
  categories: string[] = [];
  constructor(public productService: ProductService, public userService: UserService, private router:Router, private _snackBar: MatSnackBar){}
  onSubmit(form: NgForm){
    //Ovde nam i ne treba form.value jer je sve two way bind.
    if(this.userService.changeGeneralInfo(this.name!, this.surname!, this.email!)){
      this.openSnack("You have changed your general informations successfully.", "Close");
      return;
    } else {
      this.openSnack("Error: Please, log in again.", "Close");
      return;
    }
  }
  changePassword(form: NgForm){
    var isPasswordValid = this.userService.isPasswordCorrect(this.email!, form.value.oldPassword);
    if(!isPasswordValid){
      this.openSnack("Password you provided is not true.", "Close");
      return;
    }
    if(form.value.oldPassword === form.value.newPassword){
      this.openSnack("New password can not be same as old.", "Close");
      return;
    }
    if(this.userService.changeUserPassword(form.value.newPassword)){
      this.openSnack("You have changed your password successfully.", "Close");
      return;
    } else {
      this.openSnack("Error: Please, log in again.", "Close");
      return;
    }
  }
  onSubmitOther(form: NgForm){
    if(this.userService.changeOtherData(this.dateOfBirth!, this.gender!, this.address!, this.phone_number!, this.fav_category!)){
      this.openSnack("You have changed your other data successfully.", "Close");
      return;
    } else {
      this.openSnack("Error: Please, log in again.", "Close");
      return;
    }
  }
  openSnack(message:string, action:string){
    this._snackBar.open(message, action, {
      duration: 3000
    });
  }
  ngOnInit() {
    if(this.userService.currentUser !== undefined){
      this.categories=this.productService.getCategories();
      this.name = this.userService.currentUser.name;
      this.surname = this.userService.currentUser.surname;
      this.email = this.userService.currentUser.email;
      this.dateOfBirth = this.userService.currentUser.dateOfBirth;
      this.gender = this.userService.currentUser.gender;
      this.address = this.userService.currentUser.address;
      this.phone_number = this.userService.currentUser.phone_number
      this.fav_category = this.userService.currentUser.fav_category;
    } else {
      this.router.navigate(['']);
    }
  }
}
