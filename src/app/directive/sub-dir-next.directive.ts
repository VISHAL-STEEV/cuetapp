import { Directive ,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appSubDirNext]'
})
export class SubDirNextDirective {

  constructor(private el :ElementRef) { }

  @HostListener('click')
  nextFunct(){
    let elm =this.el.nativeElement.parentElement.parentElement.children[0];
    let item3=elm.getElementsByClassName("item3");
    
    elm.append(item3[0]);
  }
}
