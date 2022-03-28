//models é basicamente o sitio das interfaces
export interface Child {
  name: string,
  age: number
}

export interface Passenger {
  id:number,
  fullname: string,
  checkedIn: boolean,
  checkedInDate: number | null, /*, significa que pode ser um numero ou null*/
  /*checkedInDate?: number , significa que pode existir ou não, se a api nao devolver nao mete e n tem problema*/
  children:  Child[] | null,
  baggage?: string
}
