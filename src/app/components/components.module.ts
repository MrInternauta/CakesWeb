import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';

@NgModule({
  declarations: [DropdownComponent, PaymentMethodComponent],
  imports: [CommonModule],
  exports: [DropdownComponent, PaymentMethodComponent],
})
export class ComponentsModule {}
