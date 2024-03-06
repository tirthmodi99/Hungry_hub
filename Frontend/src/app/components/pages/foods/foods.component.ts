import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';


@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {

  foods: Food[] = [];

  constructor(private foodService: FoodService, private activateRoute: ActivatedRoute) {
    let foodsObservable: Observable<Food[]>;
    activateRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        foodsObservable = this.foodService.getAllFoodBySearchTerm(params.searchTerm);
      } else if (params.tag) {
        foodsObservable = this.foodService.getAllFoodByTag(params.tag);
      } else {
        foodsObservable = this.foodService.getAll();
      }

      foodsObservable.subscribe((serverFoods) => {
        this.foods = serverFoods;
        console.log(this.foods);
        
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








 
 

   


 
