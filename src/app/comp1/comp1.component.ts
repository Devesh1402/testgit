import { Component } from '@angular/core';
import { DesignutilityserviceService } from '../designutilityservice.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {

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
    this.username = value1.value;
  }

  name3= "kaivalya";

}
