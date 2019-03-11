import { Directive, Renderer2, HostListener, ElementRef, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
    // private isOpen = false;

    // constructor(private elRef: ElementRef, private renderer: Renderer2) { }

    // @HostListener('click') toggleOpen() {
    //     this.isOpen = !this.isOpen;
    //     if (this.isOpen) {
    //         this.renderer.addClass(this.elRef.nativeElement, 'open');
    //     } else {
    //         this.renderer.removeClass(this.elRef.nativeElement, 'open');
    //     }
    // }
}
