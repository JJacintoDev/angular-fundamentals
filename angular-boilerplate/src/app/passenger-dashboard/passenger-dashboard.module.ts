//isto é um feature module, basicamente uma class no react
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

//containers
import {PassengerDashboardComponent} from './containers/passenger-dashboard/passenger-dashboard.component'

//components
import {PassengerCountComponent} from './components/passenger-count/passenger-count.component'
import {PassengerDetailComponent} from './components/passenger-detail/passenger-detail.components'
import {PassengerFormComponent} from './components/passenger-form/passenger-form.component'

//service
import {PassengerDashboardService} from './passenger-dashboard.service'

@NgModule({
  //temos de declarar os components todos mas para exportar apenas precisamos de exportar o container
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  //apenas exportamos o container
  exports: [
    PassengerDashboardComponent
  ],
  //services e dependency injection para o serviço estar disponivel a qualquer component
  providers: [
    PassengerDashboardService
  ]
})

export class PassengerDashboardModule {

}
