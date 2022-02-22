import { ComponentFactory, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableauComponent } from './tableau/tableau.component';

const routes: Routes = [
  {
    path: '', component: TableauComponent,
    children: [
      { path: '', component: TableauComponent },
      { path: 'tableau', component: TableauComponent },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule { }
