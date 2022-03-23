import {Component} from '@angular/core'

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.sass'],
  // templateUrl: '/componentes.html',
  template: `
    <div class="app">
<!--      interpolação com uma expression-->
      <!--concat de strings-->
      {{title + '!'}}
      <div>
<!--        posso fazer javascript features dentro da interpolação-->
        {{numberOne + numberTwo}}
        {{numberTwo}}
      </div>
      <div>
<!--        if else true false simplificado-->
        {{isHappy ? ':)' : ':(' }}
      </div>

    </div>
  `

})
export class AppComponent {
  // title: string = 'Joao angular treino';
  //resto da interpolação, title aqui
  title: string;
  isHappy: boolean = true;
  numberOne: number = 1;
  numberTwo: number = 2;
  constructor() {
    this.title = 'Joao angular treino'
  }
}
