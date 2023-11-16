import { Component, Input, inject } from '@angular/core';
import { Product, ProductService } from '../item/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  category?: string;
  private activatedRoute = inject(ActivatedRoute);
  sorting_option = 'default';
  search_input = '';
  minValueFilter:number = 0;
  maxValueFilter:number = 500;
  minItemPrice:number = 500;
  maximumItemPrice:number = 500;
  products!: Product[];
  categories: string[] = [];
  selectedCategories: string[] = [];
  sizes: string[] = [];
  selectedSizes: string[] = [];
  manufacturers: string[] = [];
  selectedManufacturers: string[] = [];
  constructor(public productService: ProductService){
    this.products = productService.getProducts();
    this.categories = productService.getCategories();
    this.sizes = productService.getSizes();
    this.manufacturers = productService.getManufacturers();
    this.minItemPrice = productService.getMinPrice();
    this.minValueFilter = this.minItemPrice;
    this.maximumItemPrice = productService.getMaximumPrice();
    this.maxValueFilter = this.maximumItemPrice;
    this.selectedSizes = this.sizes;
    this.selectedManufacturers = this.manufacturers;
    this.category = this.activatedRoute.snapshot.queryParamMap.get('category')!;
    //Koristimo samo za NAV iz app-component.
    if(this.category !== null){
      this.selectedCategories.push(this.category);
      this.filterMe();
    } else {
      this.selectedCategories = this.categories;
    }
  }
  isManSelected(man: string): boolean {
    return this.selectedManufacturers.includes(man);
  }
  toggleMan(man: string): void {
    if (this.isManSelected(man)) {
      this.selectedManufacturers = this.selectedManufacturers.filter(c => c !== man);
    } else {
      this.selectedManufacturers.push(man);
    }
    this.filterMe();
  }
  isSizeSelected(size: string): boolean {
    return this.selectedSizes.includes(size);
  }
  toggleSize(size: string): void {
    if (this.isSizeSelected(size)) {
      this.selectedSizes = this.selectedSizes.filter(c => c !== size);
    } else {
      this.selectedSizes.push(size);
    }
    this.filterMe();
  }
  isCategorySelected(category: string): boolean {
    return this.selectedCategories.includes(category);
  }
  toggleCategory(category: string): void {
    if (this.isCategorySelected(category)) {
      this.selectedCategories = this.selectedCategories.filter(c => c !== category);
    } else {
      this.selectedCategories.push(category);
    }
    this.filterMe();
  }
  togglePrice(){
    this.filterMe();
  }
  search(){
    this.filterMe();
  }
  filterMe(){ //Ovo se poziva na svakoj funkciji gde se bude pozivala bilo kakva vrsta filtriranja.
    this.products = this.productService.filter(this.selectedCategories, this.selectedSizes, this.selectedManufacturers, this.minValueFilter, this.maxValueFilter, this.search_input.toLocaleLowerCase().trim());
    this.sort_by();//Moramo da sortiramo opet jer se ceo niz promenio.
  }
  sort_by(){
    //Prvo filtriramo da bi samo sortiranje posle radilo brže i u slučaju nekih zastarelih podataka tipa..
    this.products = this.productService.filter(this.selectedCategories, this.selectedSizes, this.selectedManufacturers, this.minValueFilter, this.maxValueFilter, this.search_input.toLocaleLowerCase().trim());
    if (this.sorting_option === 'default') {
      this.products = this.productService.sortByID(this.products);
    } else if (this.sorting_option === 'option1') {
      this.products = this.productService.sortByDOM(true, this.products);
    }
    else if (this.sorting_option === 'option2') {
      this.products = this.productService.sortByDOM(false, this.products);
    }
    else if (this.sorting_option === 'option11') {
      this.products = this.productService.sortByDiscount(this.products);
    }
    else if (this.sorting_option === 'option3') {
      this.products = this.productService.sortByPrice(true, this.products);
    }
    else if (this.sorting_option === 'option4') {
      this.products = this.productService.sortByPrice(false, this.products);
    }
    else if (this.sorting_option === 'option5') {
      this.products = this.productService.sortBySold(true, this.products);
    }
    else if (this.sorting_option === 'option6') {
      this.products = this.productService.sortBySold(false, this.products);
    }
    else if (this.sorting_option === 'option7') {
      this.products = this.productService.sortByRating(true, this.products);
    }
    else if (this.sorting_option === 'option8') {
      this.products = this.productService.sortByRating(false, this.products);
    }
    else if (this.sorting_option === 'option9') {
      this.products = this.productService.sortByReviewsCount(true, this.products);
    }
    else if (this.sorting_option === 'option10') {
      this.products = this.productService.sortByReviewsCount(false, this.products);
    }
    else {
      this.products = this.productService.sortByID(this.products);
    }
  }
}
