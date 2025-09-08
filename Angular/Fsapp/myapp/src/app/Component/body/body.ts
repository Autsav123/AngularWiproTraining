import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: false,
  templateUrl: './body.html',
  styleUrl: './body.css'
})
export class Body {
@Input() link:string='';
@Input() myhobbies:any[]=[];
content:string='';
ngOnChanges(){
  switch(this.link){
    case 'hobby':
      this.content='My hobbies include Reading ,Teaching ,Playing & Coding';
      break;
      case'new':
      this.content='I am Exploring new hobbies';
      break;
      case 'fav':
        this.content='My favorite hobby is reading mystry novels';
        break;
        default:
          this.content='Please select hobby from the menu';
  }
}
}
