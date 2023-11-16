import { Injectable } from "@angular/core";
import { Product, ProductService } from "../item/product.service";

export interface Cart {
    id: number,
    user_id: number,
    items: Array<Cart_Item>
}
export interface Cart_Item {
    id:number,
    size:string,
    quantity: number
}

@Injectable()
export class CartService {
    static dummyCartList: Array<Cart> =  [
    ];
    findUserCart(user_id:number){
        var user_cart:Cart | undefined = CartService.dummyCartList.find(cart => cart.user_id == user_id);
        return user_cart;
    }
    addToCart(user_id:number, product:Product, size:string){
        var user_cart:Cart | undefined = CartService.dummyCartList.find(cart => cart.user_id == user_id);
        if(user_cart !== undefined){
            var existingItem = user_cart.items.find(item => item.id === product.id && item.size === size);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                user_cart.items.push({ id: product.id, size: size, quantity: 1 });
            }
        } else {
            var maxId: number = 0;
            CartService.dummyCartList.forEach(cart => {
                if(cart.id > maxId){
                    maxId = cart.id;
                }
            });
            var id = ++maxId;
            var cart: Cart = {id: id, user_id:user_id, items: [
                {id: product.id, size: size, quantity: 1}
            ]}
            CartService.dummyCartList.push(cart);
        }
    }
    findCartTotalItems(user_id:number):number{
        var user_cart:Cart | undefined = CartService.dummyCartList.find(cart => cart.user_id === user_id);
        if(user_cart !== undefined){
            return user_cart.items.reduce((total, item) => total + item.quantity, 0);
        } else {
            return 0;
        }
    }
    findCartTotalPrice(user_id:number):string{
        var user_cart:Cart | undefined = CartService.dummyCartList.find(cart => cart.user_id === user_id);
        if(user_cart !== undefined){
            const total = user_cart.items.reduce((accumulator, item) => {
                const product = ProductService.dummyProductList.find(product => product.id === item.id);
                if (product) {
                    accumulator += product.price * item.quantity;
                }
                return accumulator;
            }, 0);
            return total.toString() + 'RSD';
        }else {
            return 'Cart';
        }    
    }
    removeCart(id:number){
        CartService.dummyCartList = CartService.dummyCartList.filter(cart => cart.id !== id);
    }
}