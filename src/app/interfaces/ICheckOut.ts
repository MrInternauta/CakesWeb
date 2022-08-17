import { ICardForm } from './Icard';
import { ICakeBase } from './Icake';

export interface ICheckOut {
  paymentMethodId?: number;
  card?: ICardForm;
  email?: string;
  baseId?: number;
  complementCakeId?: number;
  othersComplements?: ICakeBase[];
  total?: number;
}
