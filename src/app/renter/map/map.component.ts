import {Component, EventEmitter, OnInit} from '@angular/core';
import {AgmMarker, LatLngLiteral} from '@agm/core';

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

  paths: Array<LatLngLiteral> = [
    {lat: 48.784330, lng: 9.150545},
    {lat: 48.835880, lng: 9.202730},
    {lat: 48.862087, lng: 9.264528},
    {lat: 48.853955, lng: 9.315340},
    {lat: 48.829552, lng: 9.337312},
    {lat: 48.805137, lng: 9.315340},
    {lat: 48.791568, lng: 9.289247},
    {lat: 48.781615, lng: 9.234315},
    {lat: 48.777090, lng: 9.187624}
  ];

  constructor() {
  }

  clicked(clickEvent) {
    console.log(clickEvent);
  }

  styleFunc(feature) {
    return ({
      clickable: false,
      fillColor: feature.getProperty('color'),
      strokeWeight: 1
    });
  }

  ngOnInit() {

    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(position => {

        console.log('Geo location:', position);

        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;

        for (let i = 0; i < 5; i++) {

          const car = {
            title: 'S-N293E' + i,
            subTitle: 'Mercedes Benz EQC',
            goalDestination: {
              lat: 0.0,
              lng: 0.0,
              radius: (Math.floor(Math.random() * 10) + 1) * 1000
            },
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
          };

          car.goalDestination.lat = car.lat + (
            (i % 2 ? -1 : 1) *
            this.lat * 10000000 / 100 * (
              Math.floor(Math.random() * 10) + 1
            ) / 100
            / 10000000
          );

          car.goalDestination.lng = car.lng + (
            (i % 2 ? -1 : 1) *
            this.lng * 10000000 / 100 * (
              Math.floor(Math.random() * 10) + 1
            ) / 100
            / 10000000
          );

          this.cars.push(car);
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

  mapClick($event) {

    this.selectedCar = null;
    for (let i = 0; i < this.cars.length; i++) {
      this.cars[i].icon = 'assets/car.png';
    }

  }

}
