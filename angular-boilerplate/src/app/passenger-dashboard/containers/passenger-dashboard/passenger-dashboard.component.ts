//container component
import {Component, OnInit} from '@angular/core';
import {Passenger} from '../../models/passenger.interface'


@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.sass'],
  template: `
  <div>
<!--    input data, para display da passenger count, dar bind ao array de passengers a este component-->
    <passenger-count [items]="passengers"></passenger-count>
    <!--//render a um detail component por passenger
    //o remove faz um handleremove que é um callback function-->
    <passenger-detail
      *ngFor="let passenger of passengers;"
      [detail]="passenger"
      (remove)="handleRemove($event)"
      (edit)="handleEdit($event)"
    ></passenger-detail>
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

export class PassengerDashboardComponent implements OnInit{
//passengers array para ngfor
  passengers: Passenger[]
  = [{
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
  constructor() {}
  //lifecycle hook do angular, como tem ng a frente é o angular que lida. ngOnInit
  ngOnInit(){
    console.log(this.ngOnInit())
    this.passengers = [{
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
  handleEdit(event: Passenger){
    //map devolve uma nova coleçao, filter tambem
    this.passengers = this.passengers.map((passenger: Passenger) => {
      //temos de checkar se o passenger foi update e dar merge as changes para o novo passenger
      //este if verifica se estamos no passenger que foi fired pelo o event que entra no handleEdit
      if (passenger.id === event.id) {
        //imutable operation pega no passenger object original e da merge com as ultimas changes do event
        passenger = Object.assign({}, passenger, event)
      }
      return passenger;
    });
    console.log(this.passengers);
  }
  handleRemove(event: Passenger){
    //usar um filter method para fazer uma collection imutavel
    this.passengers = this.passengers.filter((passenger: Passenger) => {
      //no evento ta a ser passado um event: passenger então o event tem event.id
      return passenger.id !== event.id;
    });
  }
}
