import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'src/app/services/RestaurantService'; 
import { Restaurant } from 'src/app/shared/models/Restaurant';



@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  restaurants: Restaurant[] = [];

  constructor(private restaurantService: RestaurantService, private activateRoute: ActivatedRoute) {
    activateRoute.params.subscribe((params) => {
     
      this.restaurants = this.restaurantService.getAll();
    });
  }

  ngOnInit(): void {

  }
 getStarColor(stars: number): string {
    return stars >= 3.5 ? 'gold' : 'red';
  }
}

  

 
  

   