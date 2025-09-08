import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  standalone: false,
  templateUrl: './hobbies.html',
  styleUrl: './hobbies.css'
})
export class Hobbies {
@Input()myhobbies: any[]=[];
toggleFavorite(hobby:any){
  hobby.fav=!hobby.fav;
  console.log(`${hobby.name} is now ${hobby.fav ? `a favourite`:`not a Favorite`}.`);
}
}
