import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { FormsModule } from '@angular/forms';
import { PaypalMethodComponent } from './paypal-method/paypal-method.component';

@NgModule({
  declarations: [
    DropdownComponent,
    PaymentMethodComponent,
    PaypalMethodComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [DropdownComponent, PaymentMethodComponent, PaypalMethodComponent],
})
export class ComponentsModule {}
