import {Component} from '@angular/core'

interface Child {
  name: string,
  age: number
}

interface Nav {
  link: string,
  name: string,
  exact: boolean
}

interface Passenger {
  id:number,
  fullname: string,
  checkedIn: boolean,
  checkedInDate: number | null, /*, significa que pode ser um numero ou null*/
  /*checkedInDate?: number , significa que pode existir ou não, se a api nao devolver nao mete e n tem problema*/
  children:  Child[] | null
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.sass'],
  // templateUrl: '/componentes.html',
  template: `
    <div class="app">
      <nav class="nav">
      <a href=""
         *ngFor="let item of nav"
         [routerLink]="item.link"
         routerLinkActive="active"
         [routerLinkActiveOptions]="{exact: item.exact}"
      >
          {{item.name}}
      </a>
<!--        dynamic routing-->
<!--      <a-->
<!--        routerLink="/"-->
<!--        routerLinkActive="active"-->
<!--        [routerLinkActiveOptions]="{exact: true}"-->
<!--      > home</a>-->
<!--      <a routerLink="/oops" routerLinkActive="active"> 404</a>-->
      </nav>
      <router-outlet></router-outlet>
<!--      interpolação com uma expression-->
      <!--concat de strings-->
      <!--one way dataflow sintax-->
      <h1 [innerHTML]="title"></h1>
      <h1>{{title + '!'}}</h1>
      <div>
<!--        posso fazer javascript features dentro da interpolação-->
        {{numberOne + numberTwo}}
        {{numberTwo}}
      </div>
      <div>
<!--        if else true false simplificado-->
        {{isHappy ? ':)' : ':(' }}
      </div>
      <div>
        <!--dizer ao angular que quero dar bind a variavel à src property
        equivalente em javascript: element.src = 'eu.jpg'-->
        <img [src]="imgEu" alt="foto da minha cara lol">
        <br>
        <!--isto é one way data flow, ou seja se eu atualizar o input, nao vai atualizar o texto por baixo a variavel automaticamente-->
        <input type="text" [value]="name">
        {{name}}
      </div>

      <!--event binding-->
      <button (click)="handleClick()">botao</button>
      <div>
        <!--o handleinput nao é two way data binding mas age como tal, na questao de atualizar logo a label-->
        <!--ngmodel para two way data binding-->

        <input type="text" [ngModel]="name" [value]="name" (input)="handleInput($event)" (blur)="handleBlur($event)">
        {{name}}
      </div>

      <!--two way binding-->
      <div>
        <input type="text" [ngModel]="name" (ngModelChange)="handleChange($event)">
        {{name}}
      </div>
      <!--two way binding sem o handle change func-->
      <div>
        <input type="text" [(ngModel)]="name">
        {{name}}
      </div>

<!--      template refs, diz ao agular que eu quero um ref de username-->
      <button (click)="handleClickRef(username.value)">get valor no console log</button>
      <div>
        <input type="text" #username>
        {{name}}
      </div>

<!--      ng-ifs basicamente conditional render do react-->
<!--      quand usas o * tipo em *ngIf é uma directive do angular-->

    <div *ngIf="name.length > 0">
      searching for... {{name}}
    </div>
<!--      outra maneira de usar ngif é dentro de um template de shadowdom. o template usa a property binding com ngif-->
      <!--<template [ngIf]="name.length>2">
        <div>
          searching for... {{name}}
        </div>
      </template>-->
<!--    ng for-->
      <h3>Airline passagers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
         {{i}}: {{passenger.fullname }}
        </li>
      </ul>

<!--      sintax com template tag, isto nunca funciona entao vou deixar de fazer isto sem directives *-->
      <!--<h3>Airline passagers</h3>
      <ul>
        <template ngFor let-passenger let-i="index" [ngForOf]="passengers">
        <li>
          {{i}}: {{passenger.fullname }}
        </li>
        </template>
      </ul>-->

<!--      class e ngclass-->

      <h3>Airline passagers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span class="status" [class.checked-in]="passenger.checkedIn"></span>
          {{i}}: {{passenger.fullname }}
        </li>
      </ul>

<!--      basicamente a diferença entre o class e o ngclass é que o class serve para varias linhas e nao so um.
aqui ta comentado porque nao existe checkout definido-->
      <!--<h3>Airline passagers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span class="status" [ngClass]="{
          'checked-in': passenger.checkedIn,
          'checked-out': !passenger.checkedIn,
          }"></span>
          {{i}}: {{passenger.fullname }}
        </li>
      </ul>-->
      <!--      style e ngstyle-->
<!--      style é o equivalente a element.style.background = 'red'; no javascript-->
      <h3>Airline passagers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span class="status" [style.backgroundColor]="(passenger.checkedIn ? '#2ecc71' : '#c0392b')"></span>
          {{i}}: {{passenger.fullname }}
        </li>
      </ul>

<!--      wow ng funciona aqui estou estupefacto meu deus-->
      <h3>Airline passagers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span class="status" [ngStyle]="{
          backgroundColor: (passenger.checkedIn ? '#2ecc71' : '#c0392b')
          }"></span>
          {{i}}: {{passenger.fullname }}
        </li>
      </ul>
      <!--      pipes, adoro os json pipes da pa ver o object inteiro demais-->
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
        </li>
      </ul>

      <!--      safe navigation-->
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

      <!--      smart e dumb/presentational components-->
<!--      smart components: comunica com os services e da render a child components, pode lhes passar a data que ele recebeu dos services-->
<!--      dumb/presentational component: aceita data via inputs e emite data changes atraves dos event outputs-->
<!--///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->

      <!--      one way data flow-->
<!--        quando um user faz uma change num component child de baixo, para passar para o smart component e para os serviços é utilizado events-->
<!--      events, o angular tem uma feature built in que é o event emitter-->
<!--      tenho de fazer um event pelos dumb components todos ate chegar ao smart-->
<!--      apos uma change no smart, é preciso dar trigger a um rerender nos dumb para atualizar os dados-->
<!--      data flows down, events emit up-->

<!--      container components-->
      <passenger-dashboard></passenger-dashboard>
    </div>
  `
})



export class AppComponent {
  // title: string = 'Joao angular treino';
  //resto da interpolação, title aqui
  title: string;
  name: string = 'joao';
  imgEu: string = '/imgs/eu.jpg';
  isHappy: boolean = true;
  numberOne: number = 1;
  numberTwo: number = 2;

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

  handleClick() {
    this.name = "joao";
  }
  handleInput(event: any) {
    this.name = event.target.value;
  }
  handleBlur(event: any) {
    this.name = event.target.value;
    console.log(event)
  }
  //twoway
  handleChange(value: string) {
    this.name = value;
  }

  //template refs
  handleClickRef(value: string) {
    console.log(value);
  }

  constructor() {
    this.title = 'Joao angular treino'
  }
  //dynamic routing
  nav: Nav[] = [
    {
      link: '/',
      name: 'Home',
      exact: true
    },{
      link: '/oops',
      name: '404',
      exact: false
    },{
      link: '/passengers',
      name: 'Passengers',
      exact: false
    }
  ]

}
