
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { TestComponent } from './coponents/test/test.component';
import {SidebarModule} from 'ng-sidebar';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
