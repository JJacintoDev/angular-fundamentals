import {Component} from '@angular/core'

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.sass'],
  // templateUrl: '/componentes.html',
  template: `
    <div class="app">
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
      </div>
      <!--two way binding sem o handle change func-->
      <div>
        <input type="text" [(ngModel)]="name">
      </div>

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

  constructor() {
    this.title = 'Joao angular treino'
  }
}
