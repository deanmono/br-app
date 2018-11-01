import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { RestaurantsService } from "./restaurants.service";
import { RestaurantsComponent } from './restaurants.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [ListComponent, DetailComponent, RestaurantsComponent],
  providers: [RestaurantsService]
})
export class RestaurantsModule { }
