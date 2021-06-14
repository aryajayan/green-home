import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.show') isOpen;

  // @HostBinding('class.hide_dropdown') isHide = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('document:click', ['$event']) toggleEvent(event: Event) {
    if (this.elRef.nativeElement.contains(event.target)) {
      this.renderer.removeClass(this.elRef.nativeElement, 'show');
    }
    // this.isHide = this.elRef.nativeElement.contains(event.target) ? true : false;
  }
}
