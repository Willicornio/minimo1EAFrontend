import { AppRoutingModule } from './app-routing.module';
import { SubjectdetallComponent } from './subjectdetall/subjectdetall.component';
import { GeneralComponent } from './general/general.component';
import { CarreradetaillComponent } from './carreradetaill/carreradetaill.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    GeneralComponent,
    CarreradetaillComponent,
    SubjectdetallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
