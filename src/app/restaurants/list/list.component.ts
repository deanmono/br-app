import { Component, Input, OnInit } from '@angular/core';
import { RestaurantsService } from "../restaurants.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() restaurants;

  constructor(
    private restaurantsService: RestaurantsService
  ) { }

  ngOnInit() {}

  selectRestaurant(index) {
    this.restaurantsService.selectedRestaurant(this.restaurants[index]);
  }

}
