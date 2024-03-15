import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { Restaurant } from 'src/app/shared/models/Restaurant';

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrls: ['./restaurant-page.component.css']
})
export class RestaurantPageComponent implements OnInit {
  restaurants!: Restaurant;
  constructor (activatedRoute:ActivatedRoute, private api:RestaurantService, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      api.getRestaurantById(params.id).subscribe((serverRestaurants: Restaurant)=>{
        this.restaurants = serverRestaurants;
      })
     })
    }

    ngOnInit(): void {
    }

  }



// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { RestaurantService } from 'src/app/services/restaurant.Service';
// import { Restaurant } from 'src/app/shared/models/Restaurant';
// @Component({
//       selector: 'app-restaurants-page',
//       templateUrl: './restaurants-page.component.html',
//       styleUrls: ['./restaurants-page.component.css']
//     })

//     export class RestaurantsPageComponent implements OnInit  {
//           restaurant!: Restaurant;
//   constructor(activatedRoute:ActivatedRoute, restaurantService:RestaurantService, private router: Router) {
//     activatedRoute.params.subscribe((params) => {
//       if(params.id)
//       this.restaurant = restaurantService.getRestaurantById(params.id);
//     })
//    }

//   ngOnInit(): void {
//   }
// }
