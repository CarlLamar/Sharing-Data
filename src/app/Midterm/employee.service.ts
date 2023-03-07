import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {
  constructor() {}
  Employee() {
    return [
      {
        id: 101,
        firstname: 'Freddie',
        lastname: '	Baker',
        email: 'fbaker@gmail.com',
      },
      {
        id: 102,
        firstname: 'Donna',
        lastname: 'Autumn',
        email: 'dautumn@yahoo.com',
      },
      {
        id: 103,
        firstname: 'Johnny',
        lastname: 'Bravo',
        email: 'jbravo@gmail.com',
      },
      {
        id: 104,
        firstname: 'Patrick Januel',
        lastname: 'Mariano',
        email: 'pat.mariano04@gmail.com',
      },
    ];
  }
}
