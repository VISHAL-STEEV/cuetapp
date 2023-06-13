import { Directive,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appPrev2]'
})
export class Prev2Directive {

  constructor(private el:ElementRef) { }

  @HostListener('click')
  prevFunc(){
    let elm =this.el.nativeElement.parentElement.parentElement.children[0];
    let item =elm.getElementsByClassName("item2");
    elm.prepend(item[item.length-1]);
  }

}
