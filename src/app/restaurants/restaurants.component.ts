import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from "./restaurants.service";
import { Restaurants } from "./restaurants";

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurants;

  constructor(
    private restaurantsService: RestaurantsService
  ) { }

  ngOnInit() {
    this.getRestaurants();
  }

  private getRestaurants() {
    this.restaurantsService.getRestaurants$()
      .subscribe(data => {
        this.restaurants = data;
        console.log(this.restaurants);
      });
  }

}
