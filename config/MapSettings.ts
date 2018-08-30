declare var google;

export let MapSettings = {

    mapCenter: {
        lat: 14.807841,
        lng: 120.303372
    },

    // The Bounds of SBMA to limit the Nearby Places Results
    areaBounds: {
        ne: {
            lat: 14.824138,
            lng: 120.332986
        },
        sw: {
            lat: 14.727079,
            lng: 120.215969
        }
    },

    mapOptions: {
        center: new google.maps.LatLng(14.807841, 120.303372),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true, 
        styles:  [
            {
                "featureType": "landscape.natural",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#e0efef"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "hue": "#1900ff"
                    },
                    {
                        "color": "#c0e8e8"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "lightness": 100
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "lightness": 700
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#7dcdcd"
                    }
                ]
            }
        ]     
        // styles: [
        //     {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
        //     {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        //     {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
        //     {
        //         featureType: 'administrative.locality',
        //         elementType: 'labels.text.fill',
        //         stylers: [{color: '#d59563'}]
        //     },
        //     {
        //         featureType: 'poi',
        //         elementType: 'labels.text.fill',
        //         stylers: [{color: '#d59563'}]
        //     },
        //     {
        //         featureType: 'poi.park',
        //         elementType: 'geometry',
        //         stylers: [{color: '#263c3f'}]
        //     },
        //     {
        //         featureType: 'poi.park',
        //         elementType: 'labels.text.fill',
        //         stylers: [{color: '#6b9a76'}]
        //     },
        //     {
        //         featureType: 'road',
        //         elementType: 'geometry',
        //         stylers: [{color: '#38414e'}]
        //     },
        //     {
        //         featureType: 'road',
        //         elementType: 'geometry.stroke',
        //         stylers: [{color: '#212a37'}]
        //     },
        //     {
        //         featureType: 'road',
        //         elementType: 'labels.text.fill',
        //         stylers: [{color: '#9ca5b3'}]
        //     },
        //     {
        //         featureType: 'road.highway',
        //         elementType: 'geometry',
        //         stylers: [{color: '#746855'}]
        //     },
        //     {
        //         featureType: 'road.highway',
        //         elementType: 'geometry.stroke',
        //         stylers: [{color: '#1f2835'}]
        //     },
        //     {
        //         featureType: 'road.highway',
        //         elementType: 'labels.text.fill',
        //         stylers: [{color: '#f3d19c'}]
        //     },
        //     {
        //         featureType: 'transit',
        //         elementType: 'geometry',
        //         stylers: [{color: '#2f3948'}]
        //     },
        //     {
        //         featureType: 'transit.station',
        //         elementType: 'labels.text.fill',
        //         stylers: [{color: '#d59563'}]
        //     },
        //     {
        //         featureType: 'water',
        //         elementType: 'geometry',
        //         stylers: [{color: '#17263c'}]
        //     },
        //     {
        //         featureType: 'water',
        //         elementType: 'labels.text.fill',
        //         stylers: [{color: '#515c6d'}]
        //     },
        //     {
        //         featureType: 'water',
        //         elementType: 'labels.text.stroke',
        //         stylers: [{color: '#17263c'}]
        //     }
        // ]
    }


}