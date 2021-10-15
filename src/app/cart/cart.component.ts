import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { cartItem } from '../model/cartItem';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  @Input()
  public showCart:any;

  @Output()
  public cartAction = new EventEmitter();

  public cartItemList: cartItem[] = [];
  public cartTotal: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.fetchCartList();
  }

  closeCart(){
    this.cartAction.emit(this.showCart);
  }

  fetchCartList(){
    this.cartItemList = this.cartService.getCartItem();
    this.cartItemList.map(item => {
      item.itemTotal = item.quantity * item.MRP;
      this.cartTotal += item.itemTotal;
    });
  }

  addQuantity(item: cartItem){
    item.quantity++;
    item.itemTotal = item.MRP * item.quantity;
    this.cartTotal += item.MRP;
  }

  removeQuantity(item: cartItem){
    if(item.quantity === 1){
      this.cartService.removeItem(item.title);
    } else {
      item.quantity--;
      item.itemTotal = item.MRP * item.quantity;
    }
    this.cartTotal -= item.MRP;
  }
}
