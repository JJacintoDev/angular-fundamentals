import {Injectable} from '@angular/core'
import {Passenger } from './models/passenger.interface';
import {HttpClient, HttpResponse} from '@angular/common/http';

import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';



const PASSENGER_API: string= '/api/passengers';

//injectable diz ao anuglar que podemos injetar coisas no construtor, com isto podemos fazer dependency injection dentro de outras classes
@Injectable()
export class PassengerDashboardService {
  //dependency injection do http module
  constructor(private http: HttpClient) {
    console.log(this.http)
  }
//services e dependency injection para o serviço estar disponivel a qualquer component
 /* getPassengers(): Observable<Passenger[]>{
    /!*return {[
      // .get(PASSENGER_API)
      // .map((response: HttpResponse<Passenger>) => { return response.json()})
      //   id: 1,
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
        }*!/

    /////////// dificuldades com os get puts etc por falta de imports corretos, video um pouco deprecated
    .put(PASSENGER_API + '/' + passenger.id) é igual a .put(`${PASSENGER_API}/${passenger.id}`)

    .put(`${PASSENGER_API}/${passenger.id}`, passenger)
  }*/
}
