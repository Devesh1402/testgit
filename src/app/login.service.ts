import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginurl :any;
  constructor(private httpclient:HttpClient) {
   this.loginurl = environment.baseUrl;
  }
 authentication(reqObj:Object){
  return this.httpclient.post(this.loginurl,reqObj);
 }

 storeToken(token:string)
{
  window.localStorage.setItem("authtoken", token)
}

getToken(){
  return window.localStorage.getItem("authtoken")
}



}
