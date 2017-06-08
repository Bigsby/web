import { Directive, ElementRef, Input, OnInit } from "@angular/core";
import {  Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Directive({
    selector: "[dynamic]"
})
export class DynamicDirective implements OnInit
{
    constructor(private el: ElementRef, private http: Http) { }
    @Input("dynamic") url: string;
    
    ngOnInit(): void {
        this.http.get("assets/articles/" + this.url)
        .toPromise()
        .then(reponse => this.el.nativeElement.innerHTML = reponse.text())
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}