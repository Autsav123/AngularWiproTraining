import { Component} from '@angular/core';
import { Output , EventEmitter } from '@angular/core';
@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
@Output ()menu=new EventEmitter<string>();
onMenuItemClick(item: string){
  console.log("Menu item clicked: ",item);
  this.menu.emit(item);
}

}
