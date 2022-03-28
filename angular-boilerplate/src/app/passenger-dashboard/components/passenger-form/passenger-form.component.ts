import {Component, Input} from '@angular/core';
import {PassengerDashboardService} from '../../passenger-dashboard.service'
import {Passenger} from '../../models/passenger.interface';

@Component({
  selector: 'passenger-form',
  styleUrls:['passenger-form.component.sass'],
  template: `
  <div>
    {{detail | json}}
  </div>
  `
})

export class PassengerFormComponent {
  //esta aqui o detail porque temos um binding de detail quando chamamos o markdown do passengerform
  @Input()
  detail: Passenger;
  constructor(private passengerService: PassengerDashboardService) {
  }
  ngOnInit() {
    this.passengerService
      // .getPassenger(1)
      // .subscribe((data: Passenger) => this.passenger = data);
  }

}
