import { Directive, ElementRef, Input } from '@angular/core';

/**
 * Generated class for the ItemBackgroundDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[item-background]' // Attribute selector
})
export class ItemBackgroundDirective {
  private element: HTMLElement;

  @Input('item-background') backgroundImage: string;

  constructor(element: ElementRef) {
    this.element = element.nativeElement;
  }

 ngAfterViewInit() {
   //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
   //Add 'implements AfterViewInit' to the class.
  
   if (this.backgroundImage != '') {
    this.element.style.backgroundImage = 'url('+ this.backgroundImage +')';
   }
   else {
    this.element.style.backgroundColor = '#898989';
   }
   
 }

}
