import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { OverviewComponent } from "./overview/overview.component";

const routes: Routes = [
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "overview",
    component: OverviewComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
