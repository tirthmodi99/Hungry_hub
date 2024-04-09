import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { Tag } from '../shared/models/Tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FOODS_BY_ID_URL, FOODS_BY_SEARCH_URL, FOODS_BY_TAG_URL, FOODS_TAGS_URL, FOODS_URL } from '../shared/constants/url';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private httpClient: HttpClient) { }
  getAll():Observable<Food[]> {
    return this.httpClient.get<Food[]>(FOODS_URL)
  }
  //search Food
  getAllFoodBySearchTerm(searchTerm: string){
    return this.httpClient.get<Food[]>(FOODS_BY_SEARCH_URL + searchTerm)
  }
  //Get All Tag
  getAllTags():Observable<Tag[]>{
    return this.httpClient.get<Tag[]>(FOODS_TAGS_URL);
  }
  //Get Food by Tags
  getAllFoodByTag(tag: string):Observable<Food[]>{
    return tag === "All" ? this.getAll():this.httpClient.get<Food[]>(FOODS_BY_TAG_URL + tag)
  }
  //Get Food by Id
  getFoodById(foodId: string):Observable<Food>{
    return this.httpClient.get<Food>(FOODS_BY_ID_URL + foodId)
  }

}
