(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["owner-owner-module"],{

/***/ "./src/app/owner/main/main.component.css":
/*!***********************************************!*\
  !*** ./src/app/owner/main/main.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL293bmVyL21haW4vbWFpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/owner/main/main.component.html":
/*!************************************************!*\
  !*** ./src/app/owner/main/main.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n\n    <button (click)=\"goBack()\" [hidden]=\"!navigationService.showBackButton\"\n            class=\"btn btn-link my-2 my-sm-0 text-success\" type=\"submit\">\n        <fa-icon [icon]=\"backIcon\" style=\"font-size: 30px;\"></fa-icon>\n    </button>\n\n    <button [hidden]=\"navigationService.showBackButton\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\"\n            aria-label=\"Toggle navigation\" class=\"navbar-toggler text-success\" data-target=\"#navbarSupportedContent\"\n            data-toggle=\"collapse\" style=\"display: block;\" type=\"button\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse show navbar-collapse\" id=\"navbarSupportedContent\"\n         style=\"display: flex!important;flex-basis: auto;\">\n        <a class=\"ml-auto mr-auto\">\n            <img alt=\"Jobocar\" height=\"50\" src=\"assets/logo-small.svg\" style=\"display: block;\">\n        </a>\n        <div class=\"my-2 my-lg-0\">\n            <img [src]=\"gravatarUrl\" [hidden]=\"!uPortService.uport.state.email\" width=\"32\">\n            {{uPortService.uport.state.name}}\n            <button class=\"btn btn-link my-2 my-sm-0 text-success\" routerLink=\"/owner/settings\" type=\"submit\">\n                <fa-icon [icon]=\"settingsIcon\" style=\"font-size: 30px;\"></fa-icon>\n            </button>\n        </div>\n    </div>\n</nav>\n\n<div class=\"container-fluid\" [hidden]=\"!loading\" style=\"height: 100%;\">\n    <div class=\"row align-items-center\" style=\"min-height: 100%\">\n        <div class=\"col\" style=\"text-align: center;\">\n            <h2><strong>uPort.me</strong> Authentication! Please wait...</h2>\n        </div>\n    </div>\n</div>\n\n<div [hidden]=\"loading\">\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/owner/main/main.component.ts":
/*!**********************************************!*\
  !*** ./src/app/owner/main/main.component.ts ***!
  \**********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation.service */ "./src/app/owner/main/navigation.service.ts");
/* harmony import */ var _uport_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./uport.service */ "./src/app/owner/main/uport.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var gravatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gravatar */ "./node_modules/gravatar/index.js");
/* harmony import */ var gravatar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(gravatar__WEBPACK_IMPORTED_MODULE_7__);








var MainComponent = /** @class */ (function () {
    function MainComponent(location, navigationService, uPortService, route, router) {
        this.location = location;
        this.navigationService = navigationService;
        this.uPortService = uPortService;
        this.route = route;
        this.router = router;
        this.settingsIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCog"];
        this.backIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faArrowLeft"];
        this.gravatarUrl = '';
        this.loading = true;
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navigationService.showBackButton = true;
        if (this.uPortService.isConnected()) {
            this.gravatarUrl = gravatar__WEBPACK_IMPORTED_MODULE_7___default.a.url(this.uPortService.uport.state.email);
            this.loading = false;
            console.log('Existing state', this.uPortService.uport.state);
        }
        else {
            this.uPortService.requestDisclosure()
                .subscribe(function (state) {
                _this.gravatarUrl = gravatar__WEBPACK_IMPORTED_MODULE_7___default.a.url(state.email);
                _this.loading = false;
                console.log('State', state);
                _this.router.navigate(['/owner']);
            });
        }
    };
    MainComponent.prototype.goBack = function () {
        this.router.navigate(['../']);
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/owner/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/owner/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
            _navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"],
            _uport_service__WEBPACK_IMPORTED_MODULE_4__["UPortService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/owner/main/navigation.service.ts":
/*!**************************************************!*\
  !*** ./src/app/owner/main/navigation.service.ts ***!
  \**************************************************/
/*! exports provided: NavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavigationService = /** @class */ (function () {
    function NavigationService() {
        this.showBackButton = false;
    }
    NavigationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavigationService);
    return NavigationService;
}());



/***/ }),

/***/ "./src/app/owner/main/uport.service.ts":
/*!*********************************************!*\
  !*** ./src/app/owner/main/uport.service.ts ***!
  \*********************************************/
/*! exports provided: UPortService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPortService", function() { return UPortService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var uport_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uport-connect */ "./node_modules/uport-connect/lib/index.js");
/* harmony import */ var uport_connect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uport_connect__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var NULL_STATE = {
    did: null,
    mnid: null,
    address: null,
    doc: null,
    pushToken: null,
    publicEncKey: null
};
var UPortService = /** @class */ (function () {
    function UPortService() {
        this.uport = new uport_connect__WEBPACK_IMPORTED_MODULE_2__["Connect"]('Jobocar', { network: 'mainnet' });
    }
    UPortService.prototype.requestDisclosure = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            var reqObj = {
                requested: ['name', 'country', 'image', 'email'],
                notifications: true
            };
            _this.uport.requestDisclosure(reqObj);
            _this.uport.onResponse('disclosureReq')
                .then(function (res) {
                var did = res.payload.did;
                var payload = res.payload;
                console.log('DID', did);
                console.log('Payload', payload);
                observer.next(payload);
                observer.complete();
            })
                .catch(function (e) {
                alert('An error with uPort is occurred. Please try again.');
            });
        });
    };
    UPortService.prototype.isConnected = function () {
        if (this.uport.did) {
            return true;
        }
        else {
            return false;
        }
    };
    UPortService.prototype.logout = function () {
        this.uport.setState(function (currentState) {
            return NULL_STATE;
        });
        console.log(this.uport.state);
        localStorage.removeItem('connectState');
    };
    UPortService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UPortService);
    return UPortService;
}());



/***/ }),

/***/ "./src/app/owner/map/map.component.css":
/*!*********************************************!*\
  !*** ./src/app/owner/map/map.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  min-height: 500px;\n  width: 100%;\n\n  position: fixed;\n  height: 100%;\n}\n\n#info-window {\n  background: white;\n  height: 230px;\n  width: 100%;\n  position: fixed;\n  bottom: 0;\n  padding: 20px;\n}\n\n#info-window img {\n  border-radius: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duZXIvbWFwL21hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7O0VBRVgsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsV0FBVztFQUNYLGVBQWU7RUFDZixTQUFTO0VBQ1QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvb3duZXIvbWFwL21hcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcblxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuI2luZm8td2luZG93IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogMjMwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuI2luZm8td2luZG93IGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/owner/map/map.component.html":
/*!**********************************************!*\
  !*** ./src/app/owner/map/map.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<agm-map (mapClick)=\"mapClick($event)\" [latitude]=\"lat\" [longitude]=\"lng\" [styles]=\"styles\" [zoom]=\"12\">\n    <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n\n    <agm-marker\n        (markerClick)=\"markerClick($event, car)\"\n        *ngFor=\"let car of cars\"\n        [agmFitBounds]=\"true\"\n        [iconUrl]=\"car.icon\"\n        [latitude]=\"car.lat\"\n        [longitude]=\"car.lng\"\n    ></agm-marker>\n\n    <agm-polygon *ngIf=\"0\" [paths]=\"paths\" fillColor=\"#0000FF\" fillOpacity=\"0.6\" strokeColor=\"#FF0000\"\n                 strokeOpacity=\"0.8\" strokeWeight=\"2\">\n    </agm-polygon>\n\n    <agm-circle\n        *ngIf=\"selectedCar\"\n        [latitude]=\"selectedCar.goalDestination.lat\"\n        [longitude]=\"selectedCar.goalDestination.lng\"\n        [radius]=\"selectedCar.goalDestination.radius\"\n        [visible]=\"!!selectedCar\"\n        fillColor=\"#d28500\"\n        fillOpacity=\"0.2\"\n        strokeColor=\"#008aff\"\n        strokeOpacity=\"0.4\"\n        strokeWeight=\"2\"\n    >\n    </agm-circle>\n</agm-map>\n\n<div id=\"info-window\" *ngIf=\"selectedCar\">\n    <div class=\"media\">\n        <div class=\"mr-3\">\n            <img src=\"assets/eq.jpg\" [title]=\"selectedCar.title\" height=\"100\">\n            <p style=\"padding: 10px; font-size: 18px;\">\n                $ <input class=\"form-control\" style=\"width: 70px; display: inline-block;\" [(ngModel)]=\"settingsService.store.cars[selectedCar.id].price\" type=\"text\" placeholder=\"Price / Minute\"> / Min.<br>\n                (min. $ <input class=\"form-control\" style=\"width: 70px; display: inline-block;\" [(ngModel)]=\"settingsService.store.cars[selectedCar.id].minPurchase\" type=\"text\" placeholder=\"Price / Minute\">)\n            </p>\n        </div>\n        <div class=\"media-body\" style=\"font-size: 18px;\">\n            <h5 class=\"mt-0\" style=\"font-size: 24px;\">{{selectedCar.title}} <span class=\"badge badge-warning\">DRIVING</span></h5>\n            {{selectedCar.subTitle}}\n            <hr>\n            Fuel for {{selectedCar.fuel}} km\n            <div style=\"padding-top: 10px;\">\n                <button type=\"button\" class=\"btn btn-danger btn-lg float-right ml-1\">CALL IT BACK</button>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/owner/map/map.component.ts":
/*!********************************************!*\
  !*** ./src/app/owner/map/map.component.ts ***!
  \********************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var locutus_php_math_rand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! locutus/php/math/rand */ "./node_modules/locutus/php/math/rand.js");
/* harmony import */ var locutus_php_math_rand__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(locutus_php_math_rand__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _settings_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../settings/settings.service */ "./src/app/owner/settings/settings.service.ts");




var MapComponent = /** @class */ (function () {
    function MapComponent(settingsService) {
        this.settingsService = settingsService;
        this.lat = 0.0;
        this.lng = 0.0;
        this.cars = [];
        this.selectedCar = null;
        this.styles = [
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
        this.paths = [
            { lat: 48.784330, lng: 9.150545 },
            { lat: 48.835880, lng: 9.202730 },
            { lat: 48.862087, lng: 9.264528 },
            { lat: 48.853955, lng: 9.315340 },
            { lat: 48.829552, lng: 9.337312 },
            { lat: 48.805137, lng: 9.315340 },
            { lat: 48.791568, lng: 9.289247 },
            { lat: 48.781615, lng: 9.234315 },
            { lat: 48.777090, lng: 9.187624 }
        ];
    }
    MapComponent.prototype.clicked = function (clickEvent) {
        console.log(clickEvent);
    };
    MapComponent.prototype.styleFunc = function (feature) {
        return ({
            clickable: false,
            fillColor: feature.getProperty('color'),
            strokeWeight: 1
        });
    };
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log('Geo location:', position);
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
                for (var i = 0; i < 1; i++) {
                    var car = {
                        id: i,
                        title: 'S-N293E' + i,
                        subTitle: 'Mercedes Benz EQC',
                        goalDestination: {
                            lat: 0.0,
                            lng: 0.0,
                            radius: (Math.floor(Math.random() * 10) + 1) * 1000
                        },
                        price: locutus_php_math_rand__WEBPACK_IMPORTED_MODULE_2___default()(0.15 * 100, 0.35 * 100) / 100,
                        minPurchase: locutus_php_math_rand__WEBPACK_IMPORTED_MODULE_2___default()(5, 20),
                        fuel: locutus_php_math_rand__WEBPACK_IMPORTED_MODULE_2___default()(10, 400),
                        lat: _this.lat + ((i % 2 ? -1 : 1) *
                            _this.lat * 10000000 / 100 * (Math.floor(Math.random() * 10) + 1) / 100
                            / 10000000),
                        lng: _this.lng + ((i % 2 ? -1 : 1) *
                            _this.lat * 10000000 / 100 * (Math.floor(Math.random() * 10) + 1) / 100
                            / 10000000),
                        icon: 'assets/car.png'
                    };
                    car.goalDestination.lat = car.lat + ((i % 2 ? -1 : 1) *
                        _this.lat * 10000000 / 100 * (Math.floor(Math.random() * 10) + 1) / 100
                        / 10000000);
                    car.goalDestination.lng = car.lng + ((i % 2 ? -1 : 1) *
                        _this.lng * 10000000 / 100 * (Math.floor(Math.random() * 10) + 1) / 100
                        / 10000000);
                    _this.settingsService.store['cars'][i].price = car.price;
                    _this.settingsService.store['cars'][i].minPurchase = car.minPurchase;
                    _this.cars.push(car);
                }
                // console.log(this.cars);
            });
        }
        else {
            alert('Please allow geo location.');
        }
    };
    MapComponent.prototype.markerClick = function ($event, car) {
        console.log('Cars', this.settingsService.store);
        console.log('Event', $event);
        console.log('Selected car:', car);
        for (var i = 0; i < this.cars.length; i++) {
            this.cars[i].icon = 'assets/car.png';
        }
        car.icon = 'assets/car-selected.png';
        this.selectedCar = car;
    };
    MapComponent.prototype.mapClick = function ($event) {
        this.selectedCar = null;
        for (var i = 0; i < this.cars.length; i++) {
            this.cars[i].icon = 'assets/car.png';
        }
    };
    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/owner/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/owner/map/map.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/owner/owner.module.ts":
/*!***************************************!*\
  !*** ./src/app/owner/owner.module.ts ***!
  \***************************************/
/*! exports provided: OwnerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerModule", function() { return OwnerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map/map.component */ "./src/app/owner/map/map.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/menubar */ "./node_modules/primeng/menubar.js");
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_menubar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.component */ "./src/app/owner/main/main.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/owner/settings/settings.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");











var routes = [
    {
        path: '',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
        children: [
            {
                path: '',
                component: _map_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"]
            },
            {
                path: 'settings',
                component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_9__["SettingsComponent"]
            }
        ]
    }
];
var OwnerModule = /** @class */ (function () {
    function OwnerModule() {
    }
    OwnerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _map_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_9__["SettingsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                primeng_menubar__WEBPACK_IMPORTED_MODULE_5__["MenubarModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyCMQs50MwDO5NamST3QgdkbS6mnYO-Z4GE'
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes)
            ],
            exports: []
        })
    ], OwnerModule);
    return OwnerModule;
}());



/***/ }),

/***/ "./src/app/owner/settings/settings.component.css":
/*!*******************************************************!*\
  !*** ./src/app/owner/settings/settings.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n    padding: 50px;\n    background: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duZXIvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9vd25lci9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XG4gICAgcGFkZGluZzogNTBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/owner/settings/settings.component.html":
/*!********************************************************!*\
  !*** ./src/app/owner/settings/settings.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n    <div class=\"form-group row\">\n        <label for=\"paymentCurrency\" class=\"col-sm-2 col-form-label\">Payment currency</label>\n        <div class=\"col-sm-10\">\n            <select class=\"form-control\" id=\"paymentCurrency\" name=\"paymentCurrency\" [(ngModel)]=\"settingsService.store.paymentCurrency\">\n                <option value=\"DAI\">DAI</option>\n                <option value=\"USDC\">USDC</option>\n                <option value=\"TUSD\">TUSD</option>\n                <option value=\"USDS\">USDS</option>\n                <option value=\"WBTC\">WBTC</option>\n                <option value=\"ETH\">ETH</option>\n            </select>\n        </div>\n    </div>\n    <div class=\"form-group row\">\n        <label for=\"certCenter\" class=\"col-sm-2 col-form-label\">Certification Center</label>\n        <div class=\"col-sm-10\">\n            <select class=\"form-control\" id=\"certCenter\" name=\"certCenter\" [(ngModel)]=\"settingsService.store.certCenter\">\n                <option value=\"lbbw\">LB☰BW Certification Institute</option>\n                <option value=\"daimler\">Daimler Bank Certification Center</option>\n                <option value=\"columbia\">Columbia Certified Inc.</option>\n            </select>\n        </div>\n    </div>\n    <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Terms of Use</label>\n        <div class=\"col-sm-10\">\n            Website Terms of Use: <fa-icon [icon]=\"pdfIcon\" style=\"font-size: 30px; cursor: pointer;\"></fa-icon><br>\n            Trip Terms and Conditions: <fa-icon [icon]=\"pdfIcon\" style=\"font-size: 30px; cursor: pointer;\"></fa-icon><br>\n            Trip Privacy Policy: <fa-icon [icon]=\"pdfIcon\" style=\"font-size: 30px; cursor: pointer;\"></fa-icon><br>\n        </div>\n    </div>\n    <div class=\"form-group row\">\n        <button type=\"button\" (click)=\"logout()\" class=\"btn btn-danger btn-lg\">Logout</button>\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/owner/settings/settings.component.ts":
/*!******************************************************!*\
  !*** ./src/app/owner/settings/settings.component.ts ***!
  \******************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main/navigation.service */ "./src/app/owner/main/navigation.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings.service */ "./src/app/owner/settings/settings.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(navigationService, settingsService, router) {
        this.navigationService = navigationService;
        this.settingsService = settingsService;
        this.router = router;
        this.pdfIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFilePdf"];
        this.storeState = true;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.navigationService.showBackButton = true;
        this.storeState = true;
    };
    SettingsComponent.prototype.ngOnDestroy = function () {
        this.navigationService.showBackButton = false;
        !this.storeState || this.settingsService.storeInLocalStorage();
    };
    SettingsComponent.prototype.logout = function () {
        this.settingsService.logout();
        this.router.navigate(['/']);
        this.storeState = false;
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/owner/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/owner/settings/settings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_main_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"],
            _settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/owner/settings/settings.service.ts":
/*!****************************************************!*\
  !*** ./src/app/owner/settings/settings.service.ts ***!
  \****************************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_uport_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main/uport.service */ "./src/app/owner/main/uport.service.ts");



var SettingsService = /** @class */ (function () {
    function SettingsService(uPortService) {
        this.uPortService = uPortService;
        this.store = {
            paymentCurrency: 'DAI',
            certCenter: 'lbbw',
            cars: {
                0: {
                    price: 0,
                    minPurchase: 0
                }
            }
        };
        var settingsStore = localStorage.getItem('settingsStore');
        if (settingsStore) {
            this.store = JSON.parse(settingsStore);
        }
    }
    SettingsService.prototype.storeInLocalStorage = function () {
        localStorage.setItem('settingsStore', JSON.stringify(this.store));
    };
    SettingsService.prototype.logout = function () {
        localStorage.removeItem('settingsStore');
        this.uPortService.logout();
    };
    SettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_main_uport_service__WEBPACK_IMPORTED_MODULE_2__["UPortService"]])
    ], SettingsService);
    return SettingsService;
}());



/***/ })

}]);
//# sourceMappingURL=owner-owner-module.js.map