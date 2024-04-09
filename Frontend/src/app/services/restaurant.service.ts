import { Injectable } from '@angular/core';
import { Restaurant } from '../shared/models/Restaurant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurants_BY_ID_URL, Restaurants_BY_SEARCH_URL, Restaurants_URL } from '../shared/constants/url';

// import { RSTag } from '../shared/models/Tagrs';


@Injectable({
    providedIn: 'root'
  })


  export class RestaurantService {

    constructor(private httpClient: HttpClient) { }
    getAll():Observable<Restaurant[]> {
      return this.httpClient.get<Restaurant[]>(Restaurants_URL)
    }

//search Restaurant
  getAllRestaurantBySearchTerm(searchTerm: string){
    return this.httpClient.get<Restaurant[]>(Restaurants_BY_SEARCH_URL + searchTerm)
  }
// //Get All Tag
//   getAllTags():Observable< RSTag []>{
//     return this.httpClient.get< RSTag []>(Restaurants_TAGS_URL);
//   }
// //Get Food by Tags
//   getAllRestaurantsByTag(tag: string):Observable<Restaurant[]>{
//     return tag === "All" ? this.getAll():this.httpClient.get<Restaurant[]>(Restaurants_BY_TAG_URL + tag)
//   }

    getRestaurantById(rstId: string):Observable<Restaurant>{
      return this.httpClient.get<Restaurant>(Restaurants_BY_ID_URL + rstId)
    }
  }

  




// import { Injectable } from '@angular/core';
// import { sample_restaurants } from 'src/datars';
// import { Restaurant } from '../shared/models/Restaurant';


// @Injectable({
//   providedIn: 'root'
// })
// export class RestaurantService {
  

//   constructor() { }

//   getAll(): Restaurant[] {

//     return sample_restaurants;
//   }

//   getRestaurantById(restaurantId:string):Restaurant{
//     return this.getAll().find(restaurant => restaurant.rstid == restaurantId) ?? new Restaurant();
//   }
// }