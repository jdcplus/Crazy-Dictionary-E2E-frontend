import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WengineComponent } from './wengine/wengine.component';


const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
