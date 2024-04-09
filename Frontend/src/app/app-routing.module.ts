import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RestaurantPageComponent } from './components/pages/restaurant-page/restaurant-page.component';
import { RestaurantsComponent } from './components/pages/restaurants/restaurants.component';
import { FoodsComponent } from './components/pages/foods/foods.component';
import { RegisterComponent } from './components/pages/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'tag/:tag', component: HomeComponent },
  {path: 'food/:id', component:FoodPageComponent},
  {path: 'cart-page', component: CartPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'restaurant/:id', component:RestaurantPageComponent},
  {path: 'restaurants', component:RestaurantsComponent},
  {path: 'foods',component:FoodsComponent},
  {path:'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
