
//module - container que tem todos os components e dependencias como serviços para http requests
//existe varios modules para http, forms, etc

import { NgModule } from '@angular/core'; //module principal para http requests etc
import {BrowserModule} from '@angular/platform-browser'; //module para web
import {CommonModule} from '@angular/common'; //module para criar directives
import {FormsModule} from '@angular/forms'; //module para forms
//modules para server side rendering sao diferentes destes

import { AppComponent } from './app.component';

@NgModule ({
//declarations declara os diferentes components, especie de classes exports do react por exemplo
  declarations: [
    AppComponent
    //DashboardComponent
    //settingsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
bootstrap: [AppComponent]
})

export class AppModule{}
