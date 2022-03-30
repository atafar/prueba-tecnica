import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[upperCaseFormat]'
})
export class UpperCaseFormatDirective {

  constructor(private el: ElementRef) {

    this.el.nativeElement.style.textTransform = "uppercase";

  }

}
