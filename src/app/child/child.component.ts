import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { DesignutilityserviceService } from '../designutilityservice.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  constructor(public _productsservice:DesignutilityserviceService){
    this._productsservice.deletcount.subscribe((value)=>{
      if(value && this.count > 0){
      this.count = this.count - 1;
      }
    })
  }
  count:number = 0;
 @Input() boxcolor='';
 @Input() float = '';
 @Input() placeholdertext:string ="";
 @Output() username = new EventEmitter();


 onCreate(name:any){
  if(name.value.length > 0)
  {
  this.count = this.count + 1;
  this.username.emit(name.value);
  name.value = "";
  }
}
}
