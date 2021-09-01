import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
    center: google.maps.LatLngLiteral = {
        lat: 51.461112,
        lng: -2.602336
    }
    options: google.maps.MapOptions = {
        mapTypeId: 'roadmap'
    }
    zoom: 17

    constructor() { }

    ngOnInit(): void {
    }

}
