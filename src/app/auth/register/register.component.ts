import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/item/product.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  fav_category!: string;
  gender:string = "male";
  categories: string[] = [];
  errorExists = false;
  errorText = "";
  constructor(public productService: ProductService, public userService: UserService, private router:Router){}
  onSubmit(form:NgForm){
    if(!this.userService.getUserByEmail(form.value.email)){
      this.errorExists = false;
      var newUser = this.userService.registerUser(form.value.name, form.value.surname, form.value.email, form.value.password, form.value.dob, this.gender, form.value.address, form.value.phone, this.fav_category);
      this.router.navigate(['']);
    } else {
      this.errorExists = true;
      this.errorText = "You are already registered.";
    }
  }
  ngOnInit() {
    this.categories=this.productService.getCategories();
    this.fav_category = this.categories[0];
  }
}
