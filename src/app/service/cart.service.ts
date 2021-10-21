import { Injectable } from '@angular/core';
import { cartItem } from '../model/cartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemList: cartItem[] = [];

  constructor() {}

  addToCart(item: cartItem) {
    let tempItem = this.cartItemList.find(
      (cartItem) => cartItem.title === item.title
    );
    if (tempItem) {
      tempItem.quantity++;
    } else {
      this.cartItemList.push(item);
    }
  }

  getCartItem() {
    return this.cartItemList;
  }

  removeItem(itemName: string) {
    let index = this.cartItemList.findIndex((item) => item.title === itemName);
    this.cartItemList.splice(index, 1);
  }
}
