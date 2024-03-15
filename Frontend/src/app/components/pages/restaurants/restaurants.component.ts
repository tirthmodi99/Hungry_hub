import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { Restaurant } from 'src/app/shared/models/Restaurant';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[] = [];

  constructor(private restaurantService: RestaurantService, private activateRoute: ActivatedRoute) {
    let restaurantsObservable: Observable<Restaurant[]>;
    activateRoute.params.subscribe((params) => {
     
      restaurantsObservable= this.restaurantService.getAll();


  restaurantsObservable.subscribe((serverRestaurants) => {
    this.restaurants = serverRestaurants;
    console.log(this.restaurants);
      });


  

    });
  }

      ngOnInit(): void {
      
        
      }
      getStarColor(stars: number): string {
        return stars >= 3.5 ? 'gold' : 'red';
      }

}
