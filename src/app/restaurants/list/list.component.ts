import { Component, Input, OnInit } from '@angular/core';
import { Restaurants } from "../restaurants";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() restaurants: Restaurants;

  constructor() { }

  ngOnInit() {
  }

}
