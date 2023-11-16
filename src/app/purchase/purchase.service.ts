import { Injectable } from "@angular/core";
import { Cart, Cart_Item } from "../cart/cart.service";
import { Product, ProductService } from "../item/product.service";

export interface Purchase {
    id: number,
    user_id: number,
    dateOfPurchase: Date,
    status: 'arrived' | 'in progress' | 'canceled',
    items: Array<Purchase_Item>
}
export interface Purchase_Item {
    item_id: number, //Ovaj deo će nam trebati za recenzije itd.
    size: string,
    quantity: number,
    price: number, //Cena može da varira zato je čuvamo odvojeno od stranog ključa.
    review: number //Moramo da znamo da li je već ocenio proizvod
}

@Injectable()
export class PurchaseService {
    static dummyPurchaseList: Array<Purchase> = [
        {
            id: 1,
            user_id: 1,
            dateOfPurchase: new Date('2022-10-10'),
            status: 'arrived',
            items: [
                { item_id: 4, size: 'XL', quantity: 2, price: 2990, review: 0 }
            ]
        },
        {
            id: 2,
            user_id: 1,
            dateOfPurchase: new Date('2020-11-9'),
            status: 'arrived',
            items: [
                { item_id: 9, size: 'XL', quantity: 1, price: 5990, review: 0 }
            ]
        },
        {
            id: 3,
            user_id: 1,
            dateOfPurchase: new Date('2022-10-10'),
            status: 'arrived',
            items: [
                { item_id: 4, size: 'L', quantity: 1, price: 2990, review: 0 }
            ]
        },
        {
            id: 4,
            user_id: 1,
            dateOfPurchase: new Date('2021-1-8'),
            status: 'canceled',
            items: [
                { item_id: 16, size: 'M', quantity: 2, price: 2390, review: 0 },
                { item_id: 4, size: 'L', quantity: 1, price: 2990, review: 0 }
            ]
        },
        {
            id: 5,
            user_id: 1,
            dateOfPurchase: new Date('2023-10-21'),
            status: 'in progress',
            items: [
                { item_id: 29, size: 'S', quantity: 1, price: 4990, review: 0 }
            ]
        },
        {
            id: 6,
            user_id: 2,
            dateOfPurchase: new Date('2023-10-21'),
            status: 'canceled',
            items: [
                { item_id: 29, size: 'XL', quantity: 22, price: 4990, review: 0 }
            ]
        }
    ];
    cancelOrderById(order_id:number, user_id:number){
        let index = PurchaseService.dummyPurchaseList.findIndex(order => order.id === order_id);
        if (index !== -1) {
            PurchaseService.dummyPurchaseList[index].status = 'canceled';
        }
        return this.getUserPurchases(user_id);
    }
    rateOrder(purchase_id:number, item_id:number, user_id:number, rate:number){
        var purchase:Purchase = PurchaseService.dummyPurchaseList.find(purchase => purchase.id === purchase_id)!;
        var item:Purchase_Item = purchase.items.find(item => item.item_id === item_id)!;
        if(item.review !== 0){
            var product:Product = ProductService.dummyProductList.find(item => item.id === item_id)!;
            let index = product.reviews.findIndex(rew => rew === item.review);
            item.review = rate;
            if (index !== -1) {
                product.reviews[index] = item.review;
            }
        } else {
            item.review = rate;
            var product:Product = ProductService.dummyProductList.find(item => item.id === item_id)!;
            product.reviews.push(item.review);
        }
        return this.getUserPurchases(user_id);
    }
    deleteOrderById(order_id:number, user_id:number){
        PurchaseService.dummyPurchaseList = PurchaseService.dummyPurchaseList.filter(order => order.id !== order_id);
        return this.getUserPurchases(user_id);
    }
    getPurchaseSpending(purchase_id:number){
        var purchase:Purchase = PurchaseService.dummyPurchaseList.find(purchase => purchase.id === purchase_id)!;
        var items:Purchase_Item[] = purchase.items;
        return items.reduce((a,b) => a + (b.price*b.quantity), 0);
    }
    getUserPurchases(user_id:number){
        return PurchaseService.dummyPurchaseList.filter(purchase => purchase.user_id === user_id);
    }
    mapToPurchaseItems(cartItem: Cart_Item): Purchase_Item {
        return {
            item_id: cartItem.id,
            size: cartItem.size,
            quantity: cartItem.quantity,
            price: ProductService.dummyProductList.find(product => product.id === cartItem.id)!.price,
            review: 0,
        };
    }
    add(user_cart: Cart) {
        var maxId: number = 0;
        PurchaseService.dummyPurchaseList.forEach(pur => {
            if (pur.id > maxId) {
                maxId = pur.id;
            }
        });
        var id = ++maxId;
        var purchaseItems: Purchase_Item[] = [];
        user_cart.items.forEach(cartItem => {
            purchaseItems.push(this.mapToPurchaseItems(cartItem));
            ProductService.dummyProductList.find(product => product.id === cartItem.id)!.totalSold += cartItem.quantity;
        });
        var purchase: Purchase = {
            id: id,
            user_id: user_cart.user_id,
            dateOfPurchase: new Date(),
            status: 'in progress',
            items: purchaseItems,
        };
        PurchaseService.dummyPurchaseList.push(purchase);
    }
}