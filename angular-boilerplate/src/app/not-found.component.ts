import {Component} from '@angular/core';

@Component({
  selector: 'not-found',
  template: `
  <div>
    app not found :C
    go<a routerLink="/"> home</a>
  </div>`
})

export class NotFoundComponent {

}
