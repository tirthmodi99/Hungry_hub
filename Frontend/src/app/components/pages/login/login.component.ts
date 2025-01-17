import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm!:FormGroup;
isSubmited=false;
returnUrl='';
  constructor(private fb:FormBuilder, private userService:UserService,
    private acivatedRoute:ActivatedRoute,
    private router:Router){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
    email:['', Validators.required,Validators.email],
    password:['',Validators.required]
  })
  this.returnUrl =this.acivatedRoute.snapshot.queryParams.returnUrl;
}
get fc(){
  return this.loginForm.controls;
}
submit(){
  this.isSubmited=true;
if (this.loginForm.invalid) return;

// alert(`Email: ${this.fc.email.value},
// Password: ${this.fc.password.value}`)
this.userService.login(
  {email:this.fc.email.value, password:this.fc.password.value}).subscribe(()=>{
    this.router.navigateByUrl(this.returnUrl);
  })
}

}
