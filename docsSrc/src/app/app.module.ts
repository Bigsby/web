import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

import { AppRoutingModule } from './app-routing.module';

import { BlankDirective } from "./directives/blank.directive";
import { DynamicDirective } from "./directives/dynamic.directive";

import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BlankDirective,
    DynamicDirective,
    OverviewComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
