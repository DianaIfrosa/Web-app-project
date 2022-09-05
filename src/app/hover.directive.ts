import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(public el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.textSize("large");
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.textSize("initial");
  }

  private textSize(size: string){
    this.el.nativeElement.style.fontSize = size;
  }

}
