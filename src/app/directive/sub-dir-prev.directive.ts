import { Directive,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appSubDirPrev]'
})
export class SubDirPrevDirective {

  constructor(private el : ElementRef) { }

  @HostListener('click')
  prevfun(){
    let elm =this.el.nativeElement.parentElement.parentElement.children[0];
    let item3 = elm.getElementsByClassName("item3");
    elm.prepend(item3[item3.length-1]);
  }
  
}
