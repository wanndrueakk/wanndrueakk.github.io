google.maps.event.addDomListener(window, 'load', init);

function init() {

    var mapOptions = {

        zoom: 16,

        center: new google.maps.LatLng(59.93878882565907, 30.323072571163948),

        styles: [{
            "featureType": "landscape",
            "stylers": [{
                "hue": "#FFBB00"
            }, {
                "saturation": 43.400000000000006
            }, {
                "lightness": 37.599999999999994
            }, {
                "gamma": 1
            }]
        }, {
            "featureType": "road.highway",
            "stylers": [{
                "hue": "#FFC200"
            }, {
                "saturation": -61.8
            }, {
                "lightness": 45.599999999999994
            }, {
                "gamma": 1
            }]
        }, {
            "featureType": "road.arterial",
            "stylers": [{
                "hue": "#FF0300"
            }, {
                "saturation": -100
            }, {
                "lightness": 51.19999999999999
            }, {
                "gamma": 1
            }]
        }, {
            "featureType": "road.local",
            "stylers": [{
                "hue": "#FF0300"
            }, {
                "saturation": -100
            }, {
                "lightness": 52
            }, {
                "gamma": 1
            }]
        }, {
            "featureType": "water",
            "stylers": [{
                "hue": "#0078FF"
            }, {
                "saturation": -13.200000000000003
            }, {
                "lightness": 2.4000000000000057
            }, {
                "gamma": 1
            }]
        }, {
            "featureType": "poi",
            "stylers": [{
                "hue": "#00FF6A"
            }, {
                "saturation": -1.0989010989011234
            }, {
                "lightness": 11.200000000000017
            }, {
                "gamma": 1
            }]
        }]
    };

    var mapElement = document.getElementById('map');

    var image1 = new google.maps.MarkerImage(
        'img/icons/icon-map-pin.svg',
        new google.maps.Size(200, 200),
        new google.maps.Point(0, 0),
        new google.maps.Point(75, 150)
    );


    var map = new google.maps.Map(mapElement, mapOptions);

    var marker1 = new google.maps.Marker({
        draggable: true,
        raiseOnDrag: false,
        position: new google.maps.LatLng(59.9387942, 30.323083300000008),
        icon: image1,
        map: map,
        title: 'Мороженки!'
    });
}