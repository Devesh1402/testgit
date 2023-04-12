import { Component } from '@angular/core';
import { DesignutilityserviceService } from '../designutilityservice.service';
@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component {

  constructor(private _productsservice:DesignutilityserviceService){
    this._productsservice.username.subscribe(uname=>{
      this.username = uname;
    })
    this._productsservice.imagealternative.subscribe(alt=>{
      this.alter =alt;
    })
  }
  username:any;
  alter:any;
  update(value1:any){
    //this.username = value1.value;
    this._productsservice.username.next(value1.value)
  }

}
