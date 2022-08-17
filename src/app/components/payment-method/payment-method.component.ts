import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ICardForm } from '../../interfaces/Icard';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css'],
})
export class PaymentMethodComponent implements OnInit {
  card!: ICardForm;
  @Output() creditChanges$: EventEmitter<ICardForm> = new EventEmitter();

  constructor() {
    this.card = {
      number: '',
      date: '',
      code: '',
    };
  }

  ngOnInit(): void {}

  validForm() {
    if (!this.card.number || !this.card.date || !this.card.code) {
      console.log('Enter a valid card');
      return false;
    }
    if (this.card.number.length < 17) {
      console.log('Wrong card number.');
      return false;
    }
    if (this.card.date.length < 5) {
      console.log('Wrong date.');
      return false;
    }
    if (this.card.code.length < 3 || this.card.code.length > 5) {
      console.log('Wrong code.');
      return false;
    }

    return true;
  }

  private sanitizeInput(): ICardForm {
    return {
      number: String(this.card.number).replace(/\s+/g, ''),
      date: this.card.date,
      code: this.card.code.replace(/\s+/g, ''),
    };
  }
  pagar() {
    if (!this.validForm()) {
      return;
    }
    const card = this.sanitizeInput();
    this.creditChanges$.emit(card);
  }
}
