//isto é um feature module, basicamente uma class no react
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router'

//containers
import {PassengerDashboardComponent} from './containers/passenger-dashboard/passenger-dashboard.component'
import {PassengerViewerComponent} from './containers/passenger-viewer/passenger-viewer.component'

//components
import {PassengerCountComponent} from './components/passenger-count/passenger-count.component'
import {PassengerDetailComponent} from './components/passenger-detail/passenger-detail.components'
import {PassengerFormComponent} from './components/passenger-form/passenger-form.component'

//service
import {PassengerDashboardService} from './passenger-dashboard.service'

const routes: Routes = [
  {
    path: '/passengers',
    children: [
      {path: '', component: PassengerDashboardComponent},
      {path: ':id', component: PassengerViewerComponent}
    ]
    // component: PassengerDashboardComponent route normal
  }
];

@NgModule({
  //temos de declarar os components todos mas para exportar apenas precisamos de exportar o container
  declarations: [
    PassengerDashboardComponent,
    PassengerViewerComponent,
    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  //com o feature forchild do routermodule, o routing não necessita de exportar nada porque ja faz isso
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
