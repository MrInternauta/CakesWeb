import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paypal-method',
  templateUrl: './paypal-method.component.html',
  styleUrls: ['./paypal-method.component.css'],
})
export class PaypalMethodComponent implements OnInit {
  @Output() emailChanges$: EventEmitter<string> = new EventEmitter();
  email!: string;

  constructor() {}

  ngOnInit(): void {}

  validForm() {
    if (!this.email || !this.validateEmail(this.email)) {
      console.log('Enter an valid email');
      return false;
    }
    return true;
  }

  validateEmail(email: string) {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  private sanitizeInput(): string {
    return this.email.replace(/\s+/g, '');
  }

  pagar() {
    if (!this.validForm()) {
      return;
    }
    const email = this.sanitizeInput();
    this.emailChanges$.emit(email);
  }
}
