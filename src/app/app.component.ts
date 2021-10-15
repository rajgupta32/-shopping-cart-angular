import { AfterViewChecked, Component } from '@angular/core';
import { cartItem } from './model/cartItem';
import { CartService } from './service/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'SapientProject';
  showCart: boolean = false;
  public cartItemList: cartItem[] = [];

  constructor(public cartService: CartService){
    this.cartItemList = cartService.cartItemList;
  }

  toggleCart(){
    this.showCart = !this.showCart;
  }
}
