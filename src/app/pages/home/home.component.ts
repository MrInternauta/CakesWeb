import { Component, OnInit } from '@angular/core';
import { CakesService } from '../../services/cakes.service';
import { ICardForm } from '../../interfaces/Icard';
import {
  ICakeComplement,
  ICakeBase,
  ICakeSelected,
} from '../../interfaces/Icake';
import { ICheckOut } from '../../interfaces/ICheckOut';
import { IPayment } from '../../interfaces/IPayment';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  checkOut: ICheckOut;
  cakes!: ICakeBase[];
  complementCakes!: ICakeComplement[];
  paymentMethods!: IPayment[];
  cakeSelected!: ICakeSelected;
  showCheckOut = false;

  constructor(
    private cakeService: CakesService,
    private paymentService: PaymentService
  ) {
    this.checkOut = { baseId: 0 };
    this.cakeSelected = {};
  }

  ngOnInit(): void {
    this.cakes = this.cakeService.caseBase;
  }

  dropDownChange(id: number) {
    this.checkOut.baseId = id;
    this.checkOut.complementCakeId = undefined;
    this.complementCakes = this.cakeService.getCakesComplement(
      this.checkOut.baseId
    );
    this.showProduct(id);
  }

  dropDownComplementChange(id: number) {
    this.checkOut.complementCakeId = id;
    this.paymentMethods = this.paymentService.methods;
    this.showProduct(this.checkOut.baseId, this.checkOut.complementCakeId);
  }

  dropDownSelectPaymentChange(id: number) {
    this.checkOut.paymentMethodId = id;
  }

  creditCardPayment(card: ICardForm) {
    this.checkOut.card = card;
    this.showOrder();
  }

  paypalPayment(email: string) {
    this.checkOut.email = email;
    this.showOrder();
  }

  showProduct(id?: number, compleId?: number) {
    if (!id && !compleId) return;
    if (id && !compleId) {
      this.cakeSelected.base = this.cakeService.findBase(id);
      this.checkOut.total = this.cakeSelected.base?.value || 0;
      this.cakeSelected.title = `${this.cakeSelected.base?.name || ''}`;
      this.cakeSelected.complement = undefined;
    } else if (id && compleId) {
      this.cakeSelected.complement = this.cakeService.findComplement(compleId);
      // Assign total
      this.checkOut.total =
        (this.checkOut.total || 0) + (this.cakeSelected.complement?.value || 0);
      // Assign title
      this.cakeSelected.title += `: ${
        this.cakeSelected.complement?.name || ''
      }`;
    }

    console.log(this.cakeSelected);
  }

  showOrder() {
    this.checkOut.cakeSelected = this.cakeSelected;
    this.showCheckOut = true;
  }
}
