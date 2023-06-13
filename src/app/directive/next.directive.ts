import { Directive ,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appNext]'
})
export class NextDirective {

  constructor(private el:ElementRef) { }

  @HostListener('click')
  nextFunc(){
    let elm =this.el.nativeElement.parentElement.parentElement.children[0];
    let item=elm.getElementsByClassName("item");
    elm.append(item[0]);
  }

}
