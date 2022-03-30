import {Component, OnChanges, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {Passenger} from "../../models/passenger.interface"


@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.sass'],
  template: `
  <div>
    <span class="status" [ngStyle]="{
          backgroundColor: (detail.checkedIn ? '#2ecc71' : '#c0392b')
          }"></span>
    <div *ngIf="editing">
<!--      output event emiter-->
      <input type="text" [value]="detail.fullname" (input)="onNameChange(name.value)" #name>
    </div>
    <div *ngIf="!editing">
      {{detail.fullname }}
    </div>

    <p>{{detail | json}}</p>
    <!--este date pipe serve para converter date formats, é proprio do angular-->
    <div class="date">
      check in date: {{detail.checkedInDate ? (detail.checkedInDate | date: 'yMMMMd' | uppercase) : 'Not checked in'}}

    </div>
    <div class="children">
      <!--            safe navigation operator para o angular nao passar um erro no template, é o "?" -->
      Children: {{ detail.children?.length || 0}}
    </div>
    <button (click)="toggleEdit()">
      {{editing ? 'done' : 'edit'}}
    </button>
    <button (click)="onRemove()">
      remove
    </button>

<!--    podia por um router link mas como é um stateless component meto um go to para o parent que é stateful-->
    <button (click)="goToPassenger()">
      view
    </button>
  </div>
  `
})

export class PassengerDetailComponent implements OnChanges, OnInit{
  @Input()
  detail: Passenger;

  @Output()
  edit: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  @Output()
    //cria um novo evento do angular, mas o EventEmitter <any> antes serve para definir o tipo de evento que estamos a criar
  remove: EventEmitter <Passenger> = new EventEmitter<Passenger>();
  editing: boolean = false;

  @Output()
  view: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  constructor() {
  }
  onNameChange(value: string) {
    console.log('Value:', value)
    this.detail.fullname = value;
  }
  toggleEdit() {
    //se tivermos a editar o input esta exposto para nos, quando damos toggle ao edit
    if(this.editing) {
      //commit as changes para o component pai e dizer que foi editado atraves do this.detail
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }
  onRemove() {
    //this.remove refere a variavel dentro do export no @output
    this.remove.emit(this.detail)
  }

  goToPassenger() {
    this.view.emit(this.detail);
  }

  //serve para separar o data binding do parent do filho, ou seja quando atualizo o filho, o parent so atualiza quando faço confirmar nos dados
  //ngonchanges é chamado antes do on init entao podemos mudar as variaveis antes do init
  ngOnChanges(changes: any) {
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
  }

  ngOnInit() {

  }
}
