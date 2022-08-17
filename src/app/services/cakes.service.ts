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
      value: 204,
      stock: 0,
    },
    {
      id: 2,
      name: 'Cake 2',
      description: '',
      value: 303,
      stock: 0,
    },
    {
      id: 3,
      name: 'Cake 3',
      description: '',
      value: 402,
      stock: 0,
    },
  ];
  private _cakesComplements: ICakeComplement[] = [
    {
      id: 1,
      name: 'Cake 1 Complement',
      description: '',
      value: 110,
      stock: 0,
      baseId: 1,
      image:
        'https://t2.rg.ltmcdn.com/es/posts/2/4/9/pastel_de_fresa_23942_600.jpg',
    },
    {
      id: 2,
      name: 'Cake 2 Complement ',
      description: '',
      value: 220,
      stock: 0,
      baseId: 2,
      image:
        'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2020/12/recetas-pasteles-vender-nortonrsx.jpg',
    },
    {
      id: 3,
      name: 'Cake 3 Complement',
      description: '',
      value: 110,
      stock: 0,
      baseId: 3,
      image:
        'https://i0.wp.com/foodandpleasure.com/wp-content/uploads/2021/09/pasteles-retro-cdmx.jpeg',
    },
  ];

  constructor() {}

  get caseBase() {
    return [...this._caseBase];
  }

  get cakesComplements() {
    return [...this._cakesComplements];
  }

  findBase(baseId: number) {
    return this.caseBase.find((cake) => cake.id == baseId);
  }
  findComplement(complementId: number) {
    return this.cakesComplements.find((cake) => cake.id == complementId);
  }

  getCakesComplement(baseId: number) {
    return this.cakesComplements.filter((cake) => cake.baseId == baseId);
  }
}
