import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError, Subject } from "rxjs";
import { catchError, map } from 'rxjs/operators';

import { Restaurants } from "./restaurants";
import { Restaurant } from "./restaurant";

@Injectable()
export class RestaurantsService {
  restaurant: Restaurant;
  restaurantChange: Subject<Restaurant> = new Subject<Restaurant>();

  constructor (private http: HttpClient) {
    this.restaurantChange.subscribe((value: Restaurant) => {
      this.restaurant = value;
    });
  }

  private handleError(error: any) {
    console.error('Restaurants Service Error:', error);
    return throwError(error);
  }

  getRestaurants$(): Observable<Restaurants> {
    return this.http.get('http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json')
      .pipe(
        map(response => response['restaurants']),
        catchError(this.handleError)
      );
  }

  selectedRestaurant(restaurant) {
    this.restaurantChange.next(restaurant);
  }
}
