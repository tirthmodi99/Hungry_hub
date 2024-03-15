import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { RatingModule } from 'ng-starrating';
import { SearchComponent } from './components/partials/search/search.component';
import { TagsComponent } from './components/partials/tags/tags.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { TitleComponent } from './components/partials/title/title.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FoodsComponent } from './components/pages/foods/foods.component';
import { AdminComponent } from './components/pages/admin/admin.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { RestaurantsComponent } from './components/pages/restaurants/restaurants.component';
import { RestaurantPageComponent } from './components/pages/restaurant-page/restaurant-page.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    FoodPageComponent,
    CartPageComponent,
    TitleComponent,
    NotFoundComponent,
    FooterComponent,
    LoginComponent,
    FoodsComponent,
    AdminComponent,
    RegisterComponent,
    RestaurantsComponent,
    RestaurantPageComponent,
   

  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RatingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass:'toast-bottom-right',
      newestOnTop:false
    })    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
