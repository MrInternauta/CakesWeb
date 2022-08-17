import { Component, OnInit } from '@angular/core';
import { CakesService } from '../../services/cakes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  cakes!: any[];
  constructor(private cakeService: CakesService) {}

  ngOnInit(): void {
    this.cakes = this.cakeService.getCakeBases();
  }
}
