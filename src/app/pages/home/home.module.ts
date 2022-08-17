import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CakesService } from '../../services/cakes.service';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, ComponentsModule],
  providers: [CakesService],
})
export class HomeModule {}
