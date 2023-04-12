import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import { AppRoutingModule } from '../app-routing.module';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  pattern = /[a-zA-Z]@(gmail)\.com\b$/
  data:any;
  loginform = new FormGroup({
    email:new FormControl('',[Validators.required]),
    password:new FormControl('12345')
  });
  submitted = false;
  constructor(private service:LoginService,private _router:Router){

  }
  login(){
    var obj= {username : this.f['email'].value, password: this.f['password'].value }
    this.submitted = true;
    if (this.loginform.valid) {
      this.service.authentication(obj).subscribe(data=>{
        this.data = data
        if(this.data.token)
        {
          this.service.storeToken(this.data.token)
        }
        console.log(data)
        this._router.navigate(['admin/home'])
      })
    }
  }
  get f(){
    return this.loginform.controls
  }
}

