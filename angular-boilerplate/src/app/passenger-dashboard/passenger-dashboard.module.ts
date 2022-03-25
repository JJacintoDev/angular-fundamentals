//isto é um feature module, basicamente uma class no react
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

//containers
import {PassengerDashboardComponent} from './containers/passenger-dashboard/passenger-dashboard.component'

//components
import {PassengerCountComponent} from './components/passenger-count/passenger-count.component'
import {PassengerDetailComponent} from './components/passenger-detail/passenger-detail.components'

@NgModule({
  //temos de declarar os components todos mas para exportar apenas precisamos de exportar o container
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent
  ],
  imports: [
    CommonModule
  ],
  //apenas exportamos o container
  exports: [
    PassengerDashboardComponent
  ]
})

export class PassengerDashboardModule {

}
