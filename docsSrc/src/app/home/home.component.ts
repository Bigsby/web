import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Http } from "@angular/http";

import * as hljs from "highlightjs";

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  @ViewChild("content") container: ElementRef;
  data = "<b>not yet</b>";
  constructor(private http: Http){
    
  }

  ngOnInit(): void {
    
    this.http.get("assets/articles/ng4-owin.html")
      .toPromise()
      .then(response => {
        this.data = response.text();
        // var code = document.createElement("code");
        // code.className = "html";
        // code.textContent = response.text();
        // hljs.highlightBlock(code);
        // this.markdown = code.outerHTML;

        alert(this.container.nativeElement.innerHTML);
      });
    
  }
}
