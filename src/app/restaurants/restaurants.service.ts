import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map } from 'rxjs/operators';

import { Restaurants } from "./restaurants";

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(
    private http: HttpClient
  ) { }

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
}
