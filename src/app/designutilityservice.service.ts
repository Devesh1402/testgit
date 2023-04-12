import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignutilityserviceService {

  constructor(private http:HttpClient) { }
  url= "https://jsonplaceholder.typicode.com/users"
  username = new BehaviorSubject("dev");
  imagealternative = new BehaviorSubject("dev")
  deletcount = new Subject();
  username_array:string[] = [];
  username_admin:string[] =[];
  product(): Observable<any>
  {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
  deleteCount(){
    this.deletcount.next(true);
  }
}
