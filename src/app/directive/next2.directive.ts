import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appNext2]'
})
export class Next2Directive {

  constructor(private el:ElementRef) { }

  @HostListener('click')
  nextFunct(){
    let elm =this.el.nativeElement.parentElement.parentElement.children[0];
    let item2=elm.getElementsByClassName("item2");
    console.log(item2)
    elm.append(item2[0]);
  }

}
