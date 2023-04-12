import { Component } from '@angular/core';
import { DesignutilityserviceService } from '../designutilityservice.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component {

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
