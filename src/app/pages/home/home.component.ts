import { Component, OnInit } from '@angular/core';
import { CakesService } from '../../services/cakes.service';
import { ICardForm } from '../../interfaces/Icard';
import { ICakeComplement, ICakeBase } from '../../interfaces/Icake';
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
  showCheckOut = false;

  constructor(
    private cakeService: CakesService,
    private paymentService: PaymentService
  ) {
    this.checkOut = { baseId: 0 };
  }

  ngOnInit(): void {
    this.cakes = this.cakeService.caseBase;
  }

  dropDownChange(id: number) {
    this.checkOut.baseId = id;
    this.complementCakes = this.cakeService.getCakesComplement(
      this.checkOut.baseId
    );
  }

  dropDownComplementChange(id: number) {
    this.checkOut.complementCakeId = id;
    this.paymentMethods = this.paymentService.methods;
    console.log(this.checkOut);
  }

  dropDownSelectPaymentChange(id: number) {
    this.checkOut.paymentMethodId = id;
  }

  creditCardPayment(card: ICardForm) {
    this.checkOut.card = card;
  }

  paypalPayment(email: string) {
    this.checkOut.email = email;
  }
}
