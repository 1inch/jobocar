import {Component, EventEmitter, OnInit} from '@angular/core';
import {AgmMarker} from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat = 0.0;
  lng = 0.0;

  cars = [];

  selectedCar = null;

  styles = [
    {
      'featureType': 'all',
      'elementType': 'labels',
      'stylers': [
        {
          'visibility': 'on'
        }
      ]
    },
    {
      'featureType': 'all',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'saturation': 36
        },
        {
          'color': '#000000'
        },
        {
          'lightness': 40
        }
      ]
    },
    {
      'featureType': 'all',
      'elementType': 'labels.text.stroke',
      'stylers': [
        {
          'visibility': 'on'
        },
        {
          'color': '#000000'
        },
        {
          'lightness': 16
        }
      ]
    },
    {
      'featureType': 'all',
      'elementType': 'labels.icon',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'administrative',
      'elementType': 'geometry.fill',
      'stylers': [
        {
          'color': '#000000'
        },
        {
          'lightness': 20
        }
      ]
    },
    {
      'featureType': 'administrative',
      'elementType': 'geometry.stroke',
      'stylers': [
        {
          'color': '#000000'
        },
        {
          'lightness': 17
        },
        {
          'weight': 1.2
        }
      ]
    },
    {
      'featureType': 'administrative.country',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#e5c163'
        }
      ]
    },
    {
      'featureType': 'administrative.locality',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#c4c4c4'
        }
      ]
    },
    {
      'featureType': 'administrative.neighborhood',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#e5c163'
        }
      ]
    },
    {
      'featureType': 'landscape',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#000000'
        },
        {
          'lightness': 20
        }
      ]
    },
    {
      'featureType': 'poi',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#000000'
        },
        {
          'lightness': 21
        },
        {
          'visibility': 'on'
        }
      ]
    },
    {
      'featureType': 'poi.business',
      'elementType': 'geometry',
      'stylers': [
        {
          'visibility': 'on'
        }
      ]
    },
    {
      'featureType': 'road.highway',
      'elementType': 'geometry.fill',
      'stylers': [
        {
          'color': '#e5c163'
        },
        {
          'lightness': '0'
        }
      ]
    },
    {
      'featureType': 'road.highway',
      'elementType': 'geometry.stroke',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'road.highway',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#ffffff'
        }
      ]
    },
    {
      'featureType': 'road.highway',
      'elementType': 'labels.text.stroke',
      'stylers': [
        {
          'color': '#e5c163'
        }
      ]
    },
    {
      'featureType': 'road.arterial',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#000000'
        },
        {
          'lightness': 18
        }
      ]
    },
    {
      'featureType': 'road.arterial',
      'elementType': 'geometry.fill',
      'stylers': [
        {
          'color': '#575757'
        }
      ]
    },
    {
      'featureType': 'road.arterial',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#ffffff'
        }
      ]
    },
    {
      'featureType': 'road.arterial',
      'elementType': 'labels.text.stroke',
      'stylers': [
        {
          'color': '#2c2c2c'
        }
      ]
    },
    {
      'featureType': 'road.local',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#000000'
        },
        {
          'lightness': 16
        }
      ]
    },
    {
      'featureType': 'road.local',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#999999'
        }
      ]
    },
    {
      'featureType': 'transit',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#000000'
        },
        {
          'lightness': 19
        }
      ]
    },
    {
      'featureType': 'water',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#000000'
        },
        {
          'lightness': 17
        }
      ]
    }
  ];

  constructor() {
  }

  ngOnInit() {

    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(position => {

        console.log('Geo location:', position);

        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;

        for (let i = 0; i < 5; i++) {

          this.cars.push({
            title: 'Car ' + i,
            subTitle: 'Mercedes Benz E200',
            price: 0.35,
            minPurchase: 5,
            fuel: 100,
            lat: this.lat + (
              (i % 2 ? -1 : 1) *
              this.lat * 10000000 / 100 * (
                Math.floor(Math.random() * 10) + 1
              ) / 100
              / 10000000
            ),
            lng: this.lng + (
              (i % 2 ? -1 : 1) *
              this.lat * 10000000 / 100 * (
                Math.floor(Math.random() * 10) + 1
              ) / 100
              / 10000000
            ),
            icon: 'assets/car.png'
          });
        }

        // console.log(this.cars);
      });
    } else {
      alert('Please allow geo location.');
    }
  }

  markerClick($event: EventEmitter<AgmMarker>, car) {

    console.log('Event', $event);
    console.log('Selected car:', car);

    for (let i = 0; i < this.cars.length; i++) {
      this.cars[i].icon = 'assets/car.png';
    }

    car.icon = 'assets/car-selected.png';
    this.selectedCar = car;
  }

}
