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
}










//closers for $(document).ready
});
//
