import { Injectable } from "@angular/core";

export interface Product {
    id: number,
    name:string,
    image:string,
    category:'Jakne'|'Pantalone'|'Prsluci'|'Duksevi i majice'|'Kabanice i kišna odela'|'Radna odela'|'Kombinezoni',
    size:Array<'XL'|'L'|'M'|'S'>,
    manufacturer:string,
    dateOfManufacture:Date,
    price:number,
    reviews:Array<number>, //number is 1-5
    totalSold: number,
    recommended?: boolean,
    discount?: number,
}

@Injectable()
export class ProductService {
    static dummyProductList: Array<Product> =  [
        {
            id: 1,
            name: 'Wurth Aerton jakna', //Search
            image: 'assets/images/products/1.webp',
            category: 'Jakne',
            size: ['XL', 'L', 'M', 'S'],
            manufacturer: 'Wurth',
            dateOfManufacture: new Date('2019-12-12'),
            price: 5999,
            reviews: [5, 5, 4, 4],
            totalSold: 200,
          },
          {
            id: 2,
            name: 'Rossini Superstar Parka 4u1 teget jakna',
            image: 'assets/images/products/2.webp',
            category: 'Jakne',
            size: ['XL', 'L', 'M', 'S'],
            manufacturer: 'Rossini',
            dateOfManufacture: new Date('2018-11-10'),
            price: 7990,
            reviews: [4, 5, 3, 5],
            totalSold: 12,
          },
          {
            id: 3,
            name: 'Wurth Volkano jakna',
            image: 'assets/images/products/3.webp',
            category: 'Jakne',
            size: ['XL', 'L', 'M'],
            manufacturer: 'Wurth',
            dateOfManufacture: new Date('2022-01-15'),
            price: 2990,
            reviews: [5, 4],
            totalSold: 22,
          },
          {
            id: 4,
            name: 'Wurth Santorin jakna',
            image: 'assets/images/products/4.webp',
            category: 'Jakne',
            size: ['XL', 'L', 'M', 'S'],
            manufacturer: 'Wurth',
            dateOfManufacture: new Date('2021-08-05'),
            price: 2990,
            reviews: [5, 5, 2, 4, 3],
            totalSold: 71,
            recommended: true,
            discount: 20,
          },
          {
            id: 5,
            name: 'Black Peak Sicily zimska jakna',
            image: 'assets/images/products/5.webp',
            category: 'Jakne',
            size: ['XL', 'L', 'M', 'S'],
            manufacturer: 'Black Peak',
            dateOfManufacture: new Date('2020-06-20'),
            price: 4190,
            reviews: [5, 5, 5, 4, 5, 4],
            totalSold: 200,
          },
          {
            id: 6,
            name: 'Rossini New Santiago radne pantalone sive',
            image: 'assets/images/products/6.webp',
            category: 'Pantalone',
            size: ['XL', 'L', 'M', 'S'],
            manufacturer: 'Rossini',
            dateOfManufacture: new Date('2019-12-12'),
            price: 4190,
            reviews: [4, 4, 5, 4],
            totalSold: 100,
            recommended: true
          },
          {
            id: 7,
            name: 'Rossini New Santiago radne pantalone teget',
            image: 'assets/images/products/7.webp',
            category: 'Pantalone',
            size: ['XL', 'L', 'M'],
            manufacturer: 'Rossini',
            dateOfManufacture: new Date(),
            price: 4190,
            reviews: [5, 1, 5, 3],
            totalSold: 12,
            discount:10
          },
          {
            id: 8,
            name: 'Rossini Jeans Cargo Soul farmerke',
            image: 'assets/images/products/8.webp',
            category: 'Pantalone',
            size: ['XL', 'L', 'M', 'S'],
            manufacturer: 'Rossini',
            dateOfManufacture: new Date('2017-10-14'),
            price: 4990,
            reviews: [5, 5, 5, 4, 3],
            totalSold: 22,
          },
          {
            id: 9,
            name: 'Rossini pantalone UltraFlex plave',
            image: 'assets/images/products/9.webp',
            category: 'Pantalone',
            size: ['XL', 'L', 'M', 'S'],
            manufacturer: 'Rossini',
            dateOfManufacture: new Date('2014-3-3'),
            price: 5990,
            reviews: [5, 5, 5, 4, 5],
            totalSold: 254,
          },
          {
            id: 10,
            name: 'Black Peak kamuflažne pantalone',
            image: 'assets/images/products/10.webp',
            category: 'Pantalone',
            size: ['XL', 'L', 'M', 'S'],
            manufacturer: 'Black Peak',
            dateOfManufacture: new Date('2020-12-11'),
            price: 2000,
            reviews: [5, 5, 5, 5],
            totalSold: 88,
          },
          {
            id: 11,
            name: 'Wurth šorts Viking',
            image: 'assets/images/products/11.webp',
            category: 'Pantalone',
            size: ['XL', 'M', 'S'],
            manufacturer: 'Wurth',
            dateOfManufacture: new Date(),
            price: 2590,
            reviews: [5, 5, 5, 5, 4],
            totalSold: 77,
            recommended: true,
            discount: 30,
          },
          {
            id: 12,
            name: 'Wurth Hornet prsluk, zeleni',
            image: 'assets/images/products/12.webp',
            category: 'Prsluci',
            size: ['XL', 'L', 'M'],
            manufacturer: 'Wurth',
            dateOfManufacture: new Date(),
            price: 3190,
            reviews: [5, 4, 4, 5],
            totalSold: 27,
          },
          {
            id: 13,
            name: 'Rossini prsluk Morgan sivi',
            image: 'assets/images/products/13.webp',
            category: 'Prsluci',
            size: ['L', 'M', 'S'],
            manufacturer: 'Rossini',
            dateOfManufacture: new Date('2019-10-18'),
            price: 4490,
            reviews: [5, 5, 5, 4],
            totalSold: 44,
          },
          {
            id: 14,
            name: 'Rossini Perlis prsluk crni',
            image: 'assets/images/products/14.webp',
            category: 'Prsluci',
            size: ['XL', 'L', 'M'],
            manufacturer: 'Rossini',
            dateOfManufacture: new Date('2020-11-11'),
            price: 4290,
            reviews: [5, 4, 3, 5, 4],
            totalSold: 22,
          },
          {
            id: 15,
            name: 'Rossini Perlis prsluk plavi',
            image: 'assets/images/products/15.webp',
            category: 'Prsluci',
            size: ['XL', 'L', 'M'],
            manufacturer: 'Rossini',
            dateOfManufacture: new Date('2014-12-12'),
            price: 4290,
            reviews: [5, 3, 5, 4],
            totalSold: 41,
          },
          {
            id: 16,
            name: 'Black Peak William softshell prsluk crnosivi',
            image: 'assets/images/products/16.webp',
            category: 'Prsluci',
            size: ['XL', 'L', 'M', 'S'],
            manufacturer: 'Black Peak',
            dateOfManufacture: new Date(),
            price: 2390,
            reviews: [5, 5, 5, 4, 5],
            totalSold: 77,
          },
          {
            id: 17,
            name: 'Rossini dukserica Skil plava',
            image: 'assets/images/products/17.webp',
            category: 'Duksevi i majice',
            size: ['XL', 'S'],
            manufacturer: 'Rossini',
            dateOfManufacture: new Date('2023-10-10'),
            price: 4390,
            reviews: [5, 5, 5, 4, 5, 3, 4],
            totalSold: 200,
            recommended: true
          },
          {
            id: 18,
            name: 'Dukserica crvena Wurth',
            image: 'assets/images/products/18.webp',
            category: 'Duksevi i majice',
            size: ['XL', 'L', 'M'],
            manufacturer: 'Wurth',
            dateOfManufacture: new Date('2021-9-3'),
            price: 1790,
            reviews: [5, 5, 4, 5, 4],
            totalSold: 100,
            discount: 20
          },
          {
            id: 19,
            name: 'Rossini dukserica Perth zelena',
            image: 'assets/images/products/19.webp',
            category: 'Duksevi i majice',
            size: ['XL', 'L', 'M'],
            manufacturer: 'Rossini',
            dateOfManufacture: new Date('2021-10-17'),
            price: 2690,
            reviews: [5, 5, 1, 4],
            totalSold: 44,
          },
          {
            id: 20,
            name: 'Kapriol set majica plava/bela/siva 3 kom',
            image: 'assets/images/products/20.webp',
            category: 'Duksevi i majice',
            size: ['XL', 'L', 'M', 'S'],
            manufacturer: 'Kapriol',
            dateOfManufacture: new Date(),
            price: 1990,
            reviews: [5, 5, 3, 4, 5],
            totalSold: 201,
          },
          {
            id: 21,
            name: 'Kapriol majica Polo now crvena',
            image: 'assets/images/products/21.webp',
            category: 'Duksevi i majice',
            size: ['XL', 'L', 'M', 'S'],
            manufacturer: 'Kapriol',
            dateOfManufacture: new Date('2021-10-10'),
            price: 1990,
            reviews: [5, 5, 5, 4, 4, 3],
            totalSold: 27,
          },
          {
            id: 22,
            name: 'Kabanica poliamid Kisha plava',
            image: 'assets/images/products/22.webp',
            category: 'Kabanice i kišna odela',
            size: ['XL', 'L', 'M'],
            manufacturer: 'Kisha',
            dateOfManufacture: new Date('2021-10-14'),
            price: 1590,
            reviews: [5, 5, 2, 3],
            totalSold: 21,
            recommended: true
          },
          {
            id: 23,
            name: 'Kabanica PVC Rainy zelena',
            image: 'assets/images/products/23.webp',
            category: 'Kabanice i kišna odela',
            size: ['XL', 'L', 'M', 'S'],
            manufacturer: 'Rainy',
            dateOfManufacture: new Date('2014-10-10'),
            price: 1390,
            reviews: [2, 2, 5, 3],
            totalSold: 41,
            discount: 10,
          },
          {
            id: 24,
            name: 'Odelo poliamid Kisha zeleno',
            image: 'assets/images/products/24.webp',
            category: 'Kabanice i kišna odela',
            size: ['XL', 'L', 'M'],
            manufacturer: 'Kisha',
            dateOfManufacture: new Date(),
            price: 1890,
            reviews: [5, 5, 5, 4, 4],
            totalSold: 21,
          },
          {
            id: 25,
            name: 'NEO pantalone sa tregerima sive',
            image: 'assets/images/products/25.webp',
            category: 'Radna odela',
            size: ['XL', 'S'],
            manufacturer: 'NEO',
            dateOfManufacture: new Date('2022-9-3'),
            price: 3150,
            reviews: [5, 5, 2, 4, 5],
            totalSold: 411,
          },
          {
            id: 26,
            name: 'NEO radna bluza siva',
            image: 'assets/images/products/26.webp',
            category: 'Radna odela',
            size: ['XL', 'L', 'M', 'S'],
            manufacturer: 'NEO',
            dateOfManufacture: new Date('2021-10-1'),
            price: 2750,
            reviews: [5, 5, 5, 4, 5],
            totalSold: 27,
            discount:5,
          },
          {
            id: 27,
            name: 'Wurth jakna radna teget',
            image: 'assets/images/products/27.webp',
            category: 'Radna odela',
            size: ['XL', 'L', 'M'],
            manufacturer: 'Wurth',
            dateOfManufacture: new Date(),
            price: 2990,
            reviews: [5, 4, 5, 4],
            totalSold: 11,
          },
          {
            id: 28,
            name: 'Wurth Pantalone radne sa tregerima Diolen Stone',
            image: 'assets/images/products/28.webp',
            category: 'Radna odela',
            size: ['XL', 'L', 'M', 'S'],
            manufacturer: 'Wurth',
            dateOfManufacture: new Date(),
            price: 4790,
            reviews: [5, 3, 5, 4],
            totalSold: 211,
          },
          {
            id: 29,
            name: 'Rossini Londra kombinezon azzuro',
            image: 'assets/images/products/29.webp',
            category: 'Kombinezoni',
            size: ['XL', 'L', 'S'],
            manufacturer: 'Rossini',
            dateOfManufacture: new Date(),
            price: 4990,
            reviews: [5, 5, 2, 4, 3],
            totalSold: 41,
            discount:10,
          }
    ]
    getProductById(id:number){
      return ProductService.dummyProductList.find(product => product.id == id);
    }
    getProducts(){
      return this.sortByID(ProductService.dummyProductList);
    }
    getMaximumPrice(){
      return Math.max(...ProductService.dummyProductList.map(itm => itm.price));
    }
    getMinPrice(){
      return Math.min(...ProductService.dummyProductList.map(itm => itm.price));
    }
    getCategories(){
      let set = new Set();
      ProductService.dummyProductList.forEach(itm => set.add(itm.category));
      let categoriesArray:any[] = [];
      set.forEach(category => {
        categoriesArray.push(category);
      });
      return categoriesArray;
    }
    getManufacturers(){
      let set = new Set();
      ProductService.dummyProductList.forEach(itm => set.add(itm.manufacturer));
      let manArray:any[] = [];
      set.forEach(manu => {
        manArray.push(manu);
      });
      return manArray;
    }
    getSizes(){
      let set = new Set();
      ProductService.dummyProductList.forEach(itm => itm.size.forEach(sze => set.add(sze)));
      let sizesArray:any[] = [];
      set.forEach(size => {
        sizesArray.push(size);
      });
      return sizesArray;
    }
    getBestSeller(){
        return ProductService.dummyProductList.sort((a,b) => b.totalSold - a.totalSold).slice(0, 6);
    }
    getRecommended(){
        return ProductService.dummyProductList.filter(pr => pr.recommended);
    }
    sortByDOM(ascending:boolean, products:Product[]){
      if(ascending){
        return products.sort((a,b) => a.dateOfManufacture.getTime() - b.dateOfManufacture.getTime());
      } else {
        return products.sort((a,b) => b.dateOfManufacture.getTime() - a.dateOfManufacture.getTime());
      }
    }
    sortByDiscount(products:Product[]){
      return products.sort((a,b) => (b.discount === undefined ? 0:b.discount) - (a.discount === undefined ? 0:a.discount));
    }
    sortByPrice(ascending:boolean, products:Product[]){
      if(ascending){
        return products.sort((a,b) => a.price - b.price);
      } else {
        return products.sort((a,b) => b.price - a.price);
      }
    }
    sortByID(products:Product[]){
      return products.sort((a,b) => a.id - b.id);
    }
    sortBySold(ascending:boolean, products:Product[]){
      if(ascending){
        return products.sort((a,b) => a.totalSold - b.totalSold);
      } else {
        return products.sort((a,b) => b.totalSold - a.totalSold);
      }
    }
    sortByReviewsCount(ascending:boolean, products:Product[]){
      if(ascending){
        return products.sort((a,b) => a.reviews.length - b.reviews.length);
      } else {
        return products.sort((a,b) => b.reviews.length - a.reviews.length);
      }
    }
    sortByRating(ascending:boolean, products:Product[]){
      if(ascending){
        return products.sort((a,b) => (a.reviews.reduce((a,b) => {return a+b;}, 0))/a.reviews.length - (b.reviews.reduce((a,b) => {return a+b;}, 0))/b.reviews.length);
      } else {
        return products.sort((a,b) => (b.reviews.reduce((a,b) => {return a+b;}, 0))/b.reviews.length - (a.reviews.reduce((a,b) => {return a+b;}, 0))/a.reviews.length);
      }
    }
    filter(categories: string[], sizes: string[], manufacturers: string[], minValue: number, maxValue: number, search_input:string) {
      return ProductService.dummyProductList.filter(product => categories.includes(product.category) && product.size.some(size => sizes.includes(size)) && manufacturers.includes(product.manufacturer) && (product.price >= minValue && product.price <= maxValue) && (product.name.toLocaleLowerCase().trim().includes(search_input)));
    }
    filterByCategory(category: string){
      return ProductService.dummyProductList.filter(product => product.category === category);
    }
}