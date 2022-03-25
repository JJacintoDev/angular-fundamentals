import {Component, Input} from '@angular/core';

import {Passenger} from '../../models/passenger.interface'

@Component({
  selector: 'passenger-count',
  template: `
  <div>
    count component
    total de gente checked in: {{ checkedInCount()}} de {{items.length}}
  </div>
  `
})

export class PassengerCountComponent {
  //input data
  @Input()
  items: Passenger[];
  //este number é usado no typescript para dizer que devolve um numero
  checkedInCount(): number {
    //se nao ouver items, sai do if
    if (!this.items) return 0;
    //passa cada um dos passenger objects para dentro do filter
    return this.items.filter((passenger:Passenger) => {
      return passenger.checkedIn;
    }).length;
  }
}
