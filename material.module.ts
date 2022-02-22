import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialRoutingModule } from './material-routing.module';
import { TableauComponent } from './tableau/tableau.component';
import { RouterModule } from '@angular/router';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {MatRadioModule} from '@angular/material/radio'



@NgModule({
  declarations: [
    TableauComponent
  ],
  imports: [
    CommonModule,
    MaterialRoutingModule,
    RouterModule,
    MatSliderModule,
    MatCheckboxModule,
    MatTableModule,
    MatRadioModule
  ]
})
export class MaterialModule { }
