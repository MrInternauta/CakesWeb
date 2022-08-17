import { Injectable } from '@angular/core';
import { IPayment } from '../interfaces/IPayment';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private _methods: IPayment[] = [
    {
      id: 1,
      name: 'Debit/Credit Card',
    },
    {
      id: 2,
      name: 'Paypal',
    },
  ];

  constructor() {}

  get methods() {
    return [...this._methods];
  }
}
