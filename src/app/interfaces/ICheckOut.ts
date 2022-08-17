import { ICardForm } from './Icard';
import { ICakeSelected } from './Icake';

export interface ICheckOut {
  paymentMethodId?: number;
  card?: ICardForm;
  email?: string;
  baseId?: number;
  complementCakeId?: number;
  total?: number;
  cakeSelected?: ICakeSelected;
}
