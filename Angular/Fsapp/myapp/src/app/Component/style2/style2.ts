import { Component } from '@angular/core';

@Component({
  selector: 'app-style2',
  standalone: false,
  templateUrl: './style2.html',
  styleUrl: './style2.css'
})
export class Style2 {
textColor='blue';
fontSize=16;
changeColor(){
this.textColor=this.textColor==='blue' ?'red':'blue';
}
increaseFont(){
this.fontSize+=2;
}
decreaseFont(){
this.fontSize-=2;
}
}
