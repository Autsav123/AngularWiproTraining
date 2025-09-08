import { Component } from '@angular/core';

@Component({
  selector: 'app-stylesample',
  standalone: false,
  templateUrl: './stylesample.html',
  styleUrl: './stylesample.css'
})
export class Stylesample {
isSpecial=true;
isHighlighted=true;
toggleSpecial(){
  this.isSpecial=!this.isSpecial;
}
toggleHighlight(){
  this.isHighlighted=!this.isHighlighted;
}
}
