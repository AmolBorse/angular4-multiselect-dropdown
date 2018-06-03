import { Directive, ElementRef, Output, EventEmitter, HostListener, Input, OnInit, OnChanges } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[clickOutside]'
})
export class ClickOutsideDirective {
    @Output()
    public clickOutside = new EventEmitter<MouseEvent>();

    constructor(private _elementRef: ElementRef) {
    }


    @HostListener('document:click', ['$event', '$event.target'])
    @HostListener('document:touchstart', ['$event', '$event.target'])
    public onClick(event: MouseEvent, targetElement: HTMLElement): void {
        if (!targetElement) {
            return;
        }

        const clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(event);
        }
    }
}

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[scroll]'
})
export class ScrollDirective {

    @Output()
    public scroll = new EventEmitter<MouseEvent>();

    constructor(private _elementRef: ElementRef) {
    }

    @HostListener('scroll', ['$event'])
    public onClick(event: MouseEvent, targetElement: HTMLElement): void {
        this.scroll.emit(event);
    }
}
@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[styleProp]'
})
// tslint:disable-next-line:class-name
export class styleDirective {

    // tslint:disable-next-line:no-input-rename
    @Input('styleProp') styleVal: number;

    constructor(private el: ElementRef) {

    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {

        this.el.nativeElement.style.top = this.styleVal;
    }
    // tslint:disable-next-line:use-life-cycle-interface
    ngOnChanges(): void {
        this.el.nativeElement.style.top = this.styleVal;
    }
}


@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[setPosition]'
})

// tslint:disable-next-line:directive-class-suffix
export class SetPosition implements OnInit, OnChanges {

    // tslint:disable-next-line:no-input-rename
    @Input('setPosition') height: number;

    constructor(public el: ElementRef) {

    }
    ngOnInit() {
        if (this.height) {
            // tslint:disable-next-line:radix
            this.el.nativeElement.style.bottom = parseInt(this.height + 15 + '') + 'px';
        }
    }
    ngOnChanges(): void {
        if (this.height) {
            // tslint:disable-next-line:radix
            this.el.nativeElement.style.bottom = parseInt(this.height + 15 + '') + 'px';
        }
    }
}
