


// var google;

// function init() {
//     // Basic options for a simple Google Map
//     // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
//     // var myLatlng = new google.maps.LatLng(40.71751, -73.990922);
//     var myLatlng = new google.maps.LatLng(20.773394, -105.520312);
//     // 39.399872
//     // -8.224454
    
//     var mapOptions = {
//         // How zoomed in you want the map to start at (always required)
//         zoom: 7,

//         // The latitude and longitude to center the map (always required)
//         center: myLatlng,

//         // How you would like to style the map. 
//         scrollwheel: false,
//         styles: [
// 				  {
// 				    "elementType": "geometry",
// 				    "stylers": [
// 				      {
// 				        "color": "#f5f5f5"
// 				      }
// 				    ]
// 				  },
// 				  {
// 				    "elementType": "labels.icon",
// 				    "stylers": [
// 				      {
// 				        "visibility": "off"
// 				      }
// 				    ]
// 				  },
// 				  {
// 				    "elementType": "labels.text.fill",
// 				    "stylers": [
// 				      {
// 				        "color": "#616161"
// 				      }
// 				    ]
// 				  },
// 				  {
// 				    "elementType": "labels.text.stroke",
// 				    "stylers": [
// 				      {
// 				        "color": "#f5f5f5"
// 				      }
// 				    ]
// 				  },
// 				  {
// 				    "featureType": "administrative.land_parcel",
// 				    "elementType": "labels.text.fill",
// 				    "stylers": [
// 				      {
// 				        "color": "#bdbdbd"
// 				      }
// 				    ]
// 				  },
// 				  {
// 				    "featureType": "poi",
// 				    "elementType": "geometry",
// 				    "stylers": [
// 				      {
// 				        "color": "#eeeeee"
// 				      }
// 				    ]
// 				  },
// 				  {
// 				    "featureType": "poi",
// 				    "elementType": "labels.text.fill",
// 				    "stylers": [
// 				      {
// 				        "color": "#757575"
// 				      }
// 				    ]
// 				  },
// 				  {
// 				    "featureType": "poi.park",
// 				    "elementType": "geometry",
// 				    "stylers": [
// 				      {
// 				        "color": "#e5e5e5"
// 				      }
// 				    ]
// 				  },
// 				  {
// 				    "featureType": "poi.park",
// 				    "elementType": "labels.text.fill",
// 				    "stylers": [
// 				      {
// 				        "color": "#9e9e9e"
// 				      }
// 				    ]
// 				  },
// 				  {
// 				    "featureType": "road",
// 				    "elementType": "geometry",
// 				    "stylers": [
// 				      {
// 				        "color": "#ffffff"
// 				      }
// 				    ]
// 				  },
// 				  {
// 				    "featureType": "road.arterial",
// 				    "elementType": "labels.text.fill",
// 				    "stylers": [
// 				      {
// 				        "color": "#757575"
// 				      }
// 				    ]
// 				  },
// 				  {
// 				    "featureType": "road.highway",
// 				    "elementType": "geometry",
// 				    "stylers": [
// 				      {
// 				        "color": "#dadada"
// 				      }
// 				    ]
// 				  },
// 				  {
// 				    "featureType": "road.highway",
// 				    "elementType": "labels.text.fill",
// 				    "stylers": [
// 				      {
// 				        "color": "#616161"
// 				      }
// 				    ]
// 				  },
// 				  {
// 				    "featureType": "road.local",
// 				    "elementType": "labels.text.fill",
// 				    "stylers": [
// 				      {
// 				        "color": "#9e9e9e"
// 				      }
// 				    ]
// 				  },
// 				  {
// 				    "featureType": "transit.line",
// 				    "elementType": "geometry",
// 				    "stylers": [
// 				      {
// 				        "color": "#e5e5e5"
// 				      }
// 				    ]
// 				  },
// 				  {
// 				    "featureType": "transit.station",
// 				    "elementType": "geometry",
// 				    "stylers": [
// 				      {
// 				        "color": "#eeeeee"
// 				      }
// 				    ]
// 				  },
// 				  {
// 				    "featureType": "water",
// 				    "elementType": "geometry",
// 				    "stylers": [
// 				      {
// 				        "color": "#c9c9c9"
// 				      }
// 				    ]
// 				  },
// 				  {
// 				    "featureType": "water",
// 				    "elementType": "labels.text.fill",
// 				    "stylers": [
// 				      {
// 				        "color": "#9e9e9e"
// 				      }
// 				    ]
// 				  }
// 				]
//     };

    

//     // Get the HTML DOM element that will contain your map 
//     // We are using a div with id="map" seen below in the <body>
//     var mapElement = document.getElementById('map');

//     // Create the Google Map using out element and options defined above
//     var map = new google.maps.Map(mapElement, mapOptions);
    
//     var addresses = ['Tepic'];

//     // for (var x = 0; x < addresses.length; x++) {
//     //     $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+addresses[x]+'&sensor=false', null, function (data) {
// 		// 				var p = data.results[0].geometry.location
// 		// 				console.log(p);
//     //         var latlng = new google.maps.LatLng(p.lat, p.lng);
//     //         new google.maps.Marker({
//     //             position: latlng,
//     //             map: map,
//     //             icon: 'images/loc.png'
//     //         });

//     //     });
// 		// }
// 		// var latlng = new google.maps.LatLng(p.lat, p.lng);
//             // new google.maps.Marker({
//             //     position: myLatlng,
//             //     map: map,
//             //     icon: 'images/loc.png'
//             // });
    
// }
// google.maps.event.addDomListener(window, 'load', init);


$('#map-src').attr('src','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3730.2480530361618!2d-105.520312!3d20.773394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842113464f764851%3A0x1469078236ddc249!2sCalle+Robalo+51%2C+Punta+de+Mita%2C+Nay.!5e0!3m2!1ses!2smx!4v1556940175732!5m2!1ses!2smx');