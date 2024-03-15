// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable, tap } from 'rxjs';
// import { User } from '../shared/models/User';
// import { IUserLogin } from '../shared/interfaces/IUserLogin';
// import { HttpClient } from '@angular/common/http';
// import { USER_LOGIN_URL } from '../shared/constants/url';
// import { ToastrService } from 'ngx-toastr';

// const USER_KEY = 'User'
// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {


// private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
// public userObservable: Observable<User>
//     register: any;
//   constructor(private http:HttpClient, private toastrservice:ToastrService) {
//     this.userObservable = this.userSubject.asObservable();
//    }

//    login(userLogin:IUserLogin):Observable<User>{
//     return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(tap({
//        next: (user) => {
//         this.setUserToLocalStorage(user)
//          this.toastrservice.success(`Welcome To Hungry Hub ${user.name}!`,
//            'Login Successful !');
//        },
//        error: (errorResponse) => {
//          this.toastrservice.error(errorResponse.error, 'Login Failed !');
//        }
//      }));
//   }
//   logout(){
//     this.userSubject.next(new User());
//     localStorage.removeItem(USER_KEY);
//     window.location.reload();
//   }
//    private setUserToLocalStorage(user:User){
//     localStorage.setItem(USER_KEY,JSON.stringify(user));
//    }
//    private getUserFromLocalStorage():User{
//     const userJson=localStorage.getItem(USER_KEY);
//     if(userJson)
//     return  JSON.parse(userJson) as User;
//     return new User();
// }
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { USER_LOGIN_URL, USER_REGISTER_URL } from '../shared/constants/url';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { IUserRegister } from '../shared/interfaces/IUserRegiser';
import { User } from '../shared/models/User';

const USER_KEY = 'User'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject =
  new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable:Observable<User>;
  constructor(private http:HttpClient, private toastrService:ToastrService) {
    this.userObservable = this.userSubject.asObservable();
  }

  public get currentUser():User{
    return this.userSubject.value;
  }

  login(userLogin:IUserLogin):Observable<User>{
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) =>{
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastrService.success(
            `Welcome to Hungryhub ${user.name}!`,
            'Login Successful'
          )
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error, 'Login Failed');
        }
      })
    );
  }

  register(userRegister:IUserRegister): Observable<User>{
    return this.http.post<User>(USER_REGISTER_URL, userRegister).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastrService.success(
            `Welcome to the Hungryhub ${user.name}`,
            'Register Successful'
          )
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error,
            'Register Failed')
        }
      })
    )
  }


  logout(){
    this.userSubject.next(new User());
    localStorage.removeItem(USER_KEY);
    window.location.reload();
  }

  private setUserToLocalStorage(user:User){
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private getUserFromLocalStorage():User{
    const userJson = localStorage.getItem(USER_KEY);
    if(userJson) return JSON.parse(userJson) as User;
    return new User();
  }
}