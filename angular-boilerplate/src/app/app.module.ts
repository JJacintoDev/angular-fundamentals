
//module - container que tem todos os components e dependencias como serviços para http requests
//existe varios modules para http, forms, etc

import { NgModule } from '@angular/core'; //module principal para http requests etc
import {BrowserModule} from '@angular/platform-browser'; //module para web
import {CommonModule} from '@angular/common'; //module para criar directives
import {FormsModule} from '@angular/forms'; //module para forms
//modules para server side rendering sao diferentes destes
import {RouterModule, Routes} from '@angular/router'

import { PassengerDashboardModule} from './passenger-dashboard/passenger-dashboard.module'
import {HomeComponent} from './home.component'
import {NotFoundComponent} from './not-found.component'

import { AppComponent } from './app.component';

const routes: Routes =[
  //pathmatch diz que mesmo estando vazio, é o path completo do sitio
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},
  {path: 'redirectlol', redirectTo:'passengers', pathMatch: 'full'}
];


@NgModule ({
//declarations declara os diferentes components, especie de classes exports do react por exemplo
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
    //DashboardComponent
    //settingsComponent
  ],
  imports: [
    //angular modules
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes, {useHash:true}),
    // RouterModule.forRoot(routes, {useHash:true}), use hash é basicamente para browsers mais antigos
    FormsModule,
    //custom modules
    PassengerDashboardModule
  ],
bootstrap: [AppComponent]
})

export class AppModule{}
