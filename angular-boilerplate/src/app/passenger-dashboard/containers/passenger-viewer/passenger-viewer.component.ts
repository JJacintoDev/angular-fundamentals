import {Component, OnInit} from '@angular/core';
import {PassengerDashboardService} from '../../passenger-dashboard.service'
import {Passenger} from '../../models/passenger.interface';

@Component({
  selector: 'passenger-viewer',
  styleUrls:['passenger-viewer.component.sass'],
  template: `
  <div>
    <passenger-form [detail]="passenger" (update)="onUpdatePassenger($event)">

    </passenger-form>
  </div>
  `
})

export class PassengerViewerComponent implements OnInit {
  passenger: Passenger;
  constructor(private passengerService: PassengerDashboardService) {
  }
  ngOnInit() {
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

}
