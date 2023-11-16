import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorExists = false;
  errorText = "";
  constructor(public userService: UserService, private router: Router, private dialogRef: MatDialogRef<LoginComponent>){}
  onSubmit(form:NgForm){
    var email = form.value.email;
    var password = form.value.password;
    var user = this.userService.getUserByEmail(email);
    if(!user){
      this.errorExists = true;
      this.errorText = "Account not found.";
      return;
    }
    var isPasswordValid = this.userService.isPasswordCorrect(email, password);
    if(!isPasswordValid){
      this.errorExists = true;
      this.errorText = "Wrong password.";
      return;
    }
    this.errorExists = false;
    this.router.navigate(['']);
    this.dialogRef.close();
  }
}
