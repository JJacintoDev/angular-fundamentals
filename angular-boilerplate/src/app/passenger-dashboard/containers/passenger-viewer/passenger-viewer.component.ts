import {Component, OnInit} from '@angular/core';
import {PassengerDashboardService} from '../../passenger-dashboard.service'
import {Passenger} from '../../models/passenger.interface';
import {Router, ActivatedRoute, Params} from '@angular/router'

import 'rxjs/operators'

@Component({
  selector: 'passenger-viewer',
  styleUrls:['passenger-viewer.component.sass'],
  template: `
  <div>
    <button (click)="goBack()"> &lsaquo; go back</button>
    <passenger-form [detail]="passenger" (update)="onUpdatePassenger($event)">

    </passenger-form>
  </div>
  `
})

export class PassengerViewerComponent implements OnInit {
  passenger: Passenger;
  constructor(
    //route param switchmap, para mudar as rotas consoante o id dos dados
    private router: Router,
    private route: ActivatedRoute,
    private passengerService: PassengerDashboardService) {
  }
  ngOnInit() {
    this.route.params
      //params mudam, vamos buscar a param data com id de por exemplo 3, passamos esse id dinamicamente para o nosso serviço
      //vamos buscar a data de volta atravez do subscribe e damos bind ao this.passenger
      // .switchMap((data: Passenger) => {
      //   return this.passengerService.getPassenger(data.id)
      // })
      .subscribe((data: Params) => {console.log(data)})

    this.route.params
    this.passengerService
      // .getPassenger(1)
      // .subscribe((data: Passenger) => this.passenger = data);
  }

  onUpdatePassenger(event: Passenger) {
    console.log(event);
    this.passengerService
      /*.updatePassenger(event)
      .subscribe((data: passenger) => {
        object assing merge as novas changes com as current changes e criar um novo objecto com object assign
        this.passenger = Object.assign({}, this.passenger, event);
      })*/
  }
  //imperative routing porque estamos a usar a native api em vez do router do angular
  goBack() {
    this.router.navigate(['/passengers']);
  }
}
