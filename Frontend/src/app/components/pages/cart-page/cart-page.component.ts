import { Component, OnInit } from '@angular/core';
// import { RazorpayService } from 'src/app/services/RazorpayService';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
 
  cart!: Cart;
  constructor(private cartService: CartService, ) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    })
   }
  
  ngOnInit(): void {
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
  }

  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
  }
//   initiatePayment() {
//     const amount = this.cart.totalPrice; // Get the total amount from your cart
//     this.http.post('/api/checkout', { amount }).subscribe((response: any) => {
//         const options = {
//             key: 'your-razorpay-key',
//             amount: response.amount,
//             order_id: response.id,
//             name: 'Your Company Name',
//             description: 'Food Payment',
//             prefill: {
//                 name: 'Customer Name',
//                 email: 'customer@example.com',
//                 contact: '1234567890',
//             },
//             handler: (response: any) => {
//                 // Handle success callback
//                 console.log(response);
//             },
//             theme: {
//                 color: '#3399cc',
//             },
//         };
//         const rzp = new RazorpayService(); // Instantiate RazorpayService without arguments
//         rzp.open(options);
//     });
// }

}
