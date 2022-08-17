import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CakesService {
  constructor() {}

  getCakeBases = () => {
    return [
      {
        id: 0,
        name: 'Cake 1',
        description: '',
        value: 0,
        stock: 0,
      },
      {
        id: 0,
        name: 'Cake 2',
        description: '',
        value: 0,
        stock: 0,
      },
      {
        id: 0,
        name: 'Cake 3',
        description: '',
        value: 0,
        stock: 0,
      },
    ];
  };

  #getCakesComplements = () => {
    return [
      {
        id: 0,
        name: '',
        description: '',
        value: 0,
        stock: 0,
        baseId: 0,
      },
      {
        id: 0,
        name: '',
        description: '',
        value: 0,
        stock: 0,
        baseId: 0,
      },
      {
        id: 0,
        name: '',
        description: '',
        value: 0,
        stock: 0,
        baseId: 0,
      },
    ];
  };

  getCakesComplement = (baseId: number) => {
    return this.#getCakesComplements().find((cake) => cake.id == baseId);
  };
}
