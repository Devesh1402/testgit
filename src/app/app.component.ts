import { Component,Input, OnInit, Output} from '@angular/core';
import { DesignutilityserviceService } from './designutilityservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _productsservice:DesignutilityserviceService){
  }
userlist:any;
 ngOnInit(){
  //this._productsservice.product()
  //.subscribe(data=>this.userlist = data)
 }
  title = 'pro';
  username:string[]=[];
  admin:string[]=[];
adduser(event:any)
{
  this.username.push(event);
}
addadmin(event:any)
{
  this.admin.push(event);
}
removeuser(item:any){
  this.username.splice(item,1);
  this._productsservice.deleteCount();
}
removeadmin(item:any){
  this.admin.splice(item,1);
  this._productsservice.deleteCount();
}
}
