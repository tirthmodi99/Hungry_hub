// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// declare var Razorpay: any;

// @Injectable({
//   providedIn: 'root',
// })
// export class RazorpayService {
//   [x: string]: any;
//   private razorpay: any;

//   constructor() {
//     this.razorpay = new Razorpay({
//       key: 'rzp_test_j0uWKk8zR3QVul', // Replace with your Razorpay API key
//     });
//   }

//   createOrder(amount: number): Observable<any> {
  
//     const orderId = 'order_' + Math.floor(Math.random() * 1000);

//     return new Observable((observer) => {
//       observer.next({ orderId });
//       observer.complete();
//     });
  // }

//   initiatePayment(orderId: string, amount: number): void {
//     const options = {
//       key: 'rzp_test_j0uWKk8zR3QVul', // Replace with your Razorpay API key
//       amount: amount * 100, // Amount in paise
//       currency: 'INR',
//       name: 'Hungry HUB',
//       description: 'Food Payment',
//       order_id: orderId,
//       handler: (response: any) => {
//         // Handle the payment success callback
//         console.log(response);
//         // You can send the payment details to your server for verification
//       },
//       prefill: {
//         name: 'Customer Name',
//         email: 'customer@example.com',
//         contact: 'customer_contact_number',
//       },
//       theme: {
//         color: '#F37254',
//       },
//     };

//     this.razorpay.open(options);
//   }

