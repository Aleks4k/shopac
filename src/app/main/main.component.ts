import { Component } from '@angular/core';
import { ProductService } from '../item/product.service';
import { Router } from '@angular/router';
import { UserService } from '../auth/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  items = [
    { image: 'assets/images/1.png' },
    { image: 'assets/images/2.png' },
  ];
  constructor(public productService: ProductService, private router:Router, public userService: UserService){
  }
}
