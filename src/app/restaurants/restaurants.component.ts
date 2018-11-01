import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';
import { RestaurantsService } from "./restaurants.service";
import { Restaurants } from "./restaurants";


@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
  animations: [
    trigger('selection', [
      state('true' , style({ 'transform': 'translateX(0%)', visibility: 'visible'})),
      state('false', style({ 'transform': 'translateX(0%)', visibility: 'visible'})),
      transition('* => *', [
        animate('1s ease-in', keyframes ( [
          style({ 'transform': 'translateX(0%)', visibility: 'hidden'}),
          style({ 'transform': 'translateX(-100%)'}),
          style({ 'transform': 'translateX(0%)', visibility: 'visible'}),
        ]))
      ]),
    ])
  ]
})

export class RestaurantsComponent implements OnInit {

  private restaurants: Restaurants;
  selection: boolean = false;

  constructor(
    private restaurantsService: RestaurantsService
  ) { }

  ngOnInit() {
    this.getRestaurants();

    this.restaurantsService.restaurantChange.subscribe(() => {
      this.selectionDrawer();
    });
  }

  private getRestaurants() {
    this.restaurantsService.getRestaurants$()
      .subscribe(data => {
        this.restaurants = data;
        this.restaurantsService.selectedRestaurant(this.restaurants[0]);
      });
  }

  selectionDrawer (){
    this.selection = !this.selection;
  }
}
