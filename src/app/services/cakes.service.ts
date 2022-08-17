import { Injectable } from '@angular/core';
import { ICakeBase, ICakeComplement } from '../interfaces/Icake';

@Injectable({
  providedIn: 'root',
})
export class CakesService {
  private _caseBase: ICakeBase[] = [
    {
      id: 1,
      name: 'Cake 1',
      description: '',
      value: 0,
      stock: 0,
    },
    {
      id: 2,
      name: 'Cake 2',
      description: '',
      value: 0,
      stock: 0,
    },
    {
      id: 3,
      name: 'Cake 3',
      description: '',
      value: 0,
      stock: 0,
    },
  ];
  private _cakesComplements: ICakeComplement[] = [
    {
      id: 1,
      name: 'Cake 1 Complement',
      description: '',
      value: 0,
      stock: 0,
      baseId: 1,
    },
    {
      id: 2,
      name: 'Cake 2 Complement ',
      description: '',
      value: 0,
      stock: 0,
      baseId: 2,
    },
    {
      id: 3,
      name: 'Cake 3 Complement',
      description: '',
      value: 0,
      stock: 0,
      baseId: 3,
    },
  ];

  constructor() {}

  get caseBase() {
    return [...this._caseBase];
  }

  get cakesComplements() {
    return [...this._cakesComplements];
  }

  getCakesComplement(baseId: number) {
    return this.cakesComplements.filter((cake) => cake.baseId == baseId);
  }
}
