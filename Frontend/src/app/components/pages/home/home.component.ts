import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RestaurantService } from 'src/app/services/restaurant.service'; 
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';
import { Restaurant } from 'src/app/shared/models/Restaurant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  foods: Food[] = [];
  restaurants: Restaurant[] = [];

 
  constructor(private foodService: FoodService, private restaurantService: RestaurantService, private activateRoute: ActivatedRoute) {
    let foodsObservable: Observable<Food[]>;
    let  restaurantsObservable: Observable<Restaurant[]>;
   
    activateRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        foodsObservable = this.foodService.getAllFoodBySearchTerm(params.searchTerm);
      } else if (params.tag) {
        foodsObservable = this.foodService.getAllFoodByTag(params.tag);
      } else {
        foodsObservable = this.foodService.getAll();
      }

      foodsObservable.subscribe((serverFoods: Food[]) => {
  
        this.foods = serverFoods.sort((a: Food, b: Food) => b.stars - a.stars).slice(0, 10);
      
      });
      restaurantsObservable = this.restaurantService.getAll();
      restaurantsObservable.subscribe((serverRestaurants: Restaurant[]) => {
        this.restaurants = serverRestaurants.sort((a: Restaurant, b: Restaurant) => b.stars - a.stars).slice(0, 5);
      });
    });

    


     
    
    




  
  }
  ngOnInit(): void {
  
  }
  getStarColor(stars: number): string {
    return stars >= 3.5 ? 'gold' : 'red';
  }

  toggleFavorite(food: any): void {
    food.favorite = !food.favorite;
  }


}


  

//   import { Component, OnInit } from '@angular/core';
//   import { ActivatedRoute } from '@angular/router';
//   import { Observable } from 'rxjs';
//   import { RestaurantService } from 'src/app/services/restaurant.service';
//   import { FoodService } from 'src/app/services/food.service';
//   import { Food } from 'src/app/shared/models/Food';
//   import { Restaurant } from 'src/app/shared/models/Restaurant';
  
//   @Component({
//     selector: 'app-home',
//     templateUrl: './home.component.html',
//     styleUrls: ['./home.component.css']
//   })
  
//   export class HomeComponent implements OnInit {
//     foods: Food[] = [];
//     restaurants: Restaurant[] = [];
  
//     constructor(
//       private foodService: FoodService,
//       private restaurantService: RestaurantService,
//       private activateRoute: ActivatedRoute
//     ) {
//       let foodsObservable: Observable<Food[]>;
  
//       activateRoute.params.subscribe((params) => {
//         if (params.searchTerm) {
//           foodsObservable = this.foodService.getAllFoodBySearchTerm(params.searchTerm);}
//         //  else if (params.tag) {
//         //   foodsObservable = this.foodService.getAllFoodByTag(params.tag);
//         // } 
//         else {
//           foodsObservable = this.foodService.getAll();
//         }
       
//       foodsObservable.subscribe((serverFoods: Food[]) => {
  
//         this.foods = serverFoods.sort((a: Food, b: Food) => b.stars - a.stars).slice(0, 10);
//       });
//       {
//       let  restaurantsObservable: Observable<Restaurant[]>;


//       restaurantService.subscribe((serverRestaurant: Restaurant[]) => {
//         this.restaurants = serverRestaurants.sort((a: Restaurant, b: Restaurant) => b.stars - a.stars).slice(0, 5);
//       });}
//     }
  
//     ngOnInit(): void {}
  
//     getStarColor(stars: number): string {
//       return stars >= 3.5 ? 'gold' : 'red';
//     }
  
//     toggleFavorite(food: any): void {
//       food.favorite = !food.favorite;
  
//     }


//     // onRestaurantClick() {
//     //   // This method will be executed when the div is clicked.
//     //   // Add your click event logic here.
//     //   console.log('Restaurant div clicked!');
//     // }
 
 
//   }
//     ngOnInit(): void {
//       throw new Error('Method not implemented.');
//     }

       
// }