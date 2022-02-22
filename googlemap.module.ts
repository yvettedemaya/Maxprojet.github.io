import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GooglemapRoutingModule } from './googlemap-routing.module';
import { PositionComponent } from './position/position.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PositionComponent
  ],
  imports: [
    CommonModule,
    GooglemapRoutingModule,
    RouterModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyAXv36lBsfUJgnqBtSaEaTBC15u8UeKsg4'
    // })
  ],
})
export class GooglemapModule { }
