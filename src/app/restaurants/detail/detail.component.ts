import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { RestaurantsService } from "../restaurants.service";
import { Restaurant } from "../restaurant";
declare let google: any;

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent implements OnInit, AfterViewInit {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  restaurant: Restaurant;

  constructor(
    private restaurantsService: RestaurantsService
  ) { }

  ngOnInit() {
    this.restaurant = this.restaurantsService.restaurant;
  }

  ngAfterViewInit() {
    this.restaurantsService.restaurantChange.subscribe((value: Restaurant) => {
      this.restaurant = value;

      if (value.location) {
        let mapProp = {
          center: new google.maps.LatLng(value.location.lat, value.location.lng),
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

        let marker = new google.maps.Marker({
          position: {
            lat: value.location.lat,
            lng: value.location.lng
          },
          map: this.map
        });

        marker.setMap(this.map);
      }
    });
  }
}
