// import { Component, OnInit } from '@angular/core';
// import { Restaurant } from 'src/app/shared/models/Restaurant';
// import { ActivatedRoute, Router } from '@angular/router';
// import { RestaurantSevice } from 'src/app/services/RestaurantService';

// @Component({
//     selector: 'app-restaurants-page',
//     templateUrl: './restaurants-page.component.html',
//     styleUrls: ['./restaurants-page.component.css']
//   })
//   export class RestaurantsPageComponent implements OnInit  {
//     restaurants!: Restaurant;
//     constructor (activatedRoute:ActivatedRoute, private api:RestaurantSevice, private router: Router) {
//       activatedRoute.params.subscribe((params) => {
//         if(params.id)
//         api.getRestaurantsById(params.id).subscribe((serverRestaurants: Restaurant)=>{
//           this.restaurants = serverRestaurants;
//         })
//        })
//       }
  
//       ngOnInit(): void {
//       }

//     }



import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from 'src/app/services/RestaurantService';
import { Restaurant } from 'src/app/shared/models/Restaurant';
@Component({
      selector: 'app-restaurants-page',
      templateUrl: './restaurants-page.component.html',
      styleUrls: ['./restaurants-page.component.css']
    })

    export class RestaurantsPageComponent implements OnInit  {
          restaurant!: Restaurant;
  constructor(activatedRoute:ActivatedRoute, restaurantService:RestaurantService, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      this.restaurant = restaurantService.getRestaurantById(params.id);
    })
   }

  ngOnInit(): void {
  }
}
