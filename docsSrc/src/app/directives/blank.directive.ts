import { Directive, ElementRef, Renderer } from "@angular/core";

@Directive({
    selector: "[blank]",
})
export class BlankDirective
{
    constructor(private el: ElementRef, private renderer: Renderer) {
        renderer.setElementAttribute(el.nativeElement, "target", "_blank");
    }
}