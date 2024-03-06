import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RestaurantsPageComponent } from './components/pages/restaurants-page/restaurants-page.component';
import { RestaurantComponent } from './components/pages/restaurant/restaurant.component';
import { FoodsComponent } from './components/pages/foods/foods.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'tag/:tag', component: HomeComponent },
  {path: 'food/:id', component:FoodPageComponent},
  {path: 'cart-page', component: CartPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'restaurant/:id', component:RestaurantsPageComponent},
  {path: 'restaurant', component:RestaurantComponent},
  {path: 'foods',component:FoodsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
