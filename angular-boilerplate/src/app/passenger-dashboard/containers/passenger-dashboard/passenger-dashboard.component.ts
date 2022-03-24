//container component
import {Component} from '@angular/core';
import {Passenger} from '../../models/passenger.interface'


@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.sass'],
  template: `
  <div>
    <h3>Airline passagers</h3>
    <ul>
      <li *ngFor="let passenger of passengers; let i = index;">
          <span class="status" [ngStyle]="{
          backgroundColor: (passenger.checkedIn ? '#2ecc71' : '#c0392b')
          }"></span>
        {{i}}: {{passenger.fullname }}
        <p>{{passenger | json}}</p>
        <!--este date pipe serve para converter date formats, é proprio do angular-->
        <div class="date">
          check in date: {{passenger.checkedInDate ? (passenger.checkedInDate | date: 'yMMMMd' | uppercase) : 'Not checked in'}}

        </div>
        <div class="children">
          <!--            safe navigation operator para o angular nao passar um erro no template, é o "?" -->
          Children: {{ passenger.children?.length || 0}}
        </div>
      </li>
    </ul>
  </div>
  `
})

export class PassengerDashboardComponent{
//passengers array para ngfor
  passengers: Passenger[] = [{
    id: 1,
    fullname: 'maluco',
    checkedIn: true,
    checkedInDate: 1490742000000,
    children: null
  }, {
    id: 2,
    fullname: 'doido',
    checkedIn: false,
    checkedInDate: null,
    children: [{name: 'jessica', age: 1}]
  }, {
    id: 3,
    fullname: 'XD?',
    checkedIn: true,
    checkedInDate: 1490742000000,
    children: [{name: 'teresa', age: 3}]
  }, {
    id: 4,
    fullname: 'nao',
    checkedIn: false,
    checkedInDate: 1490742000000,
    children: null
  },{
    id: 5,
    fullname: 'talvez',
    checkedIn: true,
    checkedInDate: 1490742000000,
    children: [{name: 'sara', age: 30}]
  }];
}
