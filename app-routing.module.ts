import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './coponents/test/test.component';

const routes: Routes = [
  { path: '',redirectTo: 'test',pathMatch: 'full'},
  {path: 'test', component: TestComponent},

  // { path: '', redirectTo: 'googlemap', pathMatch: 'full' },
  {
    path: 'googlemap',
    loadChildren: () => import(`./modules/googlemap/googlemap.module`).then(m => m.GooglemapModule),
  },

  {
    path: 'material',
    loadChildren: () => import(`./modules/material/material.module`).then(m => m.MaterialModule),
  }];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
