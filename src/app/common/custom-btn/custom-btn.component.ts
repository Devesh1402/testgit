import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-btn',
  templateUrl: './custom-btn.component.html',
  styleUrls: ['./custom-btn.component.css']
})
export class CustomBtnComponent {
 @Input() btnname:string="";
 @Input() btnclass:string="";
 @Output() callbackFunction:any = new EventEmitter<any>();
 eventemiter(e:any){
  this.callbackFunction.emit(e);
 }
}

