import { Directive, ElementRef ,Input,HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: false
})
export class Highlight {
@Input() appHighlight ='' ;
  constructor(private el:ElementRef) { }
@HostListener('mouseenter')onMouseEnter(){ 
  this.highlight(this.appHighlight||'yellow');
}
    @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }


  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
}
}
