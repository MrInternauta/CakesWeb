import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICakeBase, ICakeComplement } from '../../interfaces/Icake';
import { IPayment } from '../../interfaces/IPayment';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent implements OnInit {
  @Input()
  cakes!: Array<ICakeBase | ICakeComplement | IPayment>;
  show!: boolean;
  @Output() dropdownChange$: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.show = !this.show;
  }

  selectItem(id: number) {
    this.show = false;
    this.dropdownChange$.emit(id);
  }
}
