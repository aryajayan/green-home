import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.show') isOpen = false;

  // @HostBinding('class.hide_dropdown') isHide = false;

  constructor(private elRef: ElementRef) {}

  @HostListener('document:click', ['$event']) toggleEvent(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;

    // this.isHide = this.elRef.nativeElement.contains(event.target) ? true : false;
  }
}
