// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

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
  console.log(potato);
  for (let i = 0; i < potato.features.length; i ++) {
    if (potato.features[i].properties.mag >= 4.0) {
      $('#info').append(`<p>${potato.features[i].properties.title}</p>`);
    };
  };
}

// .features["0"].properties.title
//.features["0"].properties.mag








//closers for $(document).ready
});
//
