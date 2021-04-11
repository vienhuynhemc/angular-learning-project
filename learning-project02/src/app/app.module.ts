import { FormsModule } from '@angular/forms';
import { HandleInputComponent } from './handleInput/handle-input.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IfforComponent } from './iffor/iffor.component';
import { ForObjectComponent } from './for-object/for-object.component';


@NgModule({
  declarations: [
    AppComponent,
    HandleInputComponent,
    IfforComponent,
    ForObjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
