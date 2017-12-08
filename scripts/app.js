// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

var gMaps = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg";

$(document).ready(function() {
  console.log("Let's get coding!");
  // CODE IN HERE!

$.ajax({
  method: "GET",
  url: weekly_quakes_endpoint,
  dataType: "json",
  success: onSuccess,
  error: function onError () {
    console.log("Error");
  }
});

function onSuccess (potato) {
  // debugger; 
  // using the word "debugger" will pause the js execution and let you interact with the variables that occurred at that time
  console.log(potato);
  for (let i = 0; i < potato.features.length; i ++) {
    if (potato.features[i].properties.mag >= 4.0) {
      let time = (Math.round((Date.now() - potato.features[i].properties.time) / 60 / 60 / 1000));
      $("#info").append(`<p>${potato.features[i].properties.title} / ${time} hours ago</p>`);
    };
  };
}

function initMap() {

map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 37.78, lng: -122.44},
  zoom: 5
});



}


// $.ajax({
//   method: "GET",
//   url: gMaps,
//   dataType: "json",
//   success: mapsSuccess,
//   error: function googleError() {
//     console.log("maps not working. boo.");
//   }
// });

// function mapSuccess(mapper) {
//   console.log(mapper);

// };

// .features["0"].properties.title
//.features["0"].properties.mag
//new Date(1512756200*1000).toString()
//"Fri Dec 08 2017 10:03:20 GMT-0800 (PST)"

// let time = (Date.now() - (potato.features[i].properties.time) / 60 / 60 / 1000






//closers for $(document).ready
});
//
