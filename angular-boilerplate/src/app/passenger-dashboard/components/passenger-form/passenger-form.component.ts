import {Component, Input, EventEmitter, Output} from '@angular/core';
import {PassengerDashboardService} from '../../passenger-dashboard.service'
import {Passenger} from '../../models/passenger.interface';
import {Baggage} from '../../models/baggage.interface';

@Component({
  selector: 'passenger-form',
  styleUrls:['passenger-form.component.sass'],
  template: `
<!--    template ref é o #form. usa directive ngForm do angular-->
    <form (ngSubmit)="handleSubmit(form.value, form.valid)" #form="ngForm" novalidate>
      {{detail | json}}
<!--      validation-->
  <div>
    Passenger Name:
    <input type="text" required minlength="0" name="fullname" #fullname="ngModel" [ngModel]="detail?.fullname" >
    {{fullname.errors | json}}
     form valid: {{form.valid | json}}
    form invalid: {{form.invalid | json}}
    <div *ngIf="fullname.errors === null && fullname.dirty && fullname.touched ">
<!--      && fullname.minLength === 0-->
      passenger name is required

    </div>
  </div>

      <div>
        Passenger id:
        <input type="number" name="id" [ngModel]="detail?.id">
      </div>

      <div>
        <label for="">
          <input type="radio"
                 [value]="true"
          name="checkedIn"
          [ngModel]="detail?.checkedIn"
          (ngModelChange)="toggleCheckIn($event)">
          yes
        </label>
      </div>
      <div>
        <label for="">
          <input type="radio"
                 [value]="false"
                 name="checkedIn"
                 [ngModel]="detail?.checkedIn"
                 (ngModelChange)="toggleCheckIn($event)">>
          no
        </label>
      </div>

      <div>
        <label for="">
          <input type="checkbox"
                 name="checkedIn"
                 [ngModel]="detail?.checkedIn"
                 (ngModelChange)="toggleCheckIn($event)">>
          no
        </label>
      </div>

      <div>
        luggage:
        <select name="baggage" id=""
        [ngModel]="detail?.baggage">
          <option value="" *ngFor="let item of baggage" [value]="item.key" [selected]="item.key === detail?.baggage">

            {{item.value}}
          </option>
        </select>
      </div>

      <div>
        luggage:
        <select name="baggage" id=""
                [ngModel]="detail?.baggage">
<!--          ngValue faz o mesmo do que o de cima -->
          <option value="" *ngFor="let item of baggage" [ngValue]="item.key" >
            {{item.value}}
          </option>
        </select>
      </div>

      <div *ngIf="form.value.checkedIn">
        check in date:
        <input type="number" name="checkInDate" [ngModel]="detail.checkedInDate">

      </div>
      {{form.value | json}}


      <button type="submit" [disabled]="form.invalid">
        update passenger
      </button>
    </form>
  `
})

export class PassengerFormComponent {
  //esta aqui o detail porque temos um binding de detail quando chamamos o markdown do passengerform
  @Input()
  detail: Passenger;

  @Output()
  update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  baggage: Baggage[] = [{
    key: 'none',
    value: 'No baggage'
  },{
    key: 'hold-only',
    value: 'hold baggage'
  },{
    key: 'hand-only',
    value: 'hand baggage'
  }
  ]
  constructor(private passengerService: PassengerDashboardService) {
  }
  toggleCheckIn(checkedIn: boolean) {
    if (checkedIn) {
      //this.detail é o detail do input
      this.detail.checkedInDate = Date.now() //ms
    }
  }

  handleSubmit(passenger: Passenger, isValid: any) {
    if (isValid) {
      //emit passenger para dar update ao parent component, neste caso os containers
      this.update.emit(passenger);
    }
  }
  ngOnInit() {
    this.passengerService
      // .getPassenger(1)
      // .subscribe((data: Passenger) => this.passenger = data);
  }

}
