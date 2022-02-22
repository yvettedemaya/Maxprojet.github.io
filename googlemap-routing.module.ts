
import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PositionComponent } from './position/position.component';

const routes: Routes = [
  { path: '', component: PositionComponent  ,
    children: [
  { path: '', component: PositionComponent },
  { path: 'position', component: PositionComponent },
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GooglemapRoutingModule { }
