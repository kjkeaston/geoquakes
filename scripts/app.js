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
  // debugger; 
  // using the word "debugger" will pause the js execution and let you interact with the variables that occurred at that time
  console.log(potato);
  for (let i = 0; i < potato.features.length; i ++) {
    if (potato.features[i].properties.mag >= 4.0) {
      let time = (Math.round((Date.now() - potato.features[i].properties.time) / 60 / 60 / 1000));
        // Math.round(time);
      $("#info").append(`<p>${potato.features[i].properties.title} / ${time} hours ago</p>`);
    };
  };
}

// .features["0"].properties.title
//.features["0"].properties.mag
//new Date(1512756200*1000).toString()
//"Fri Dec 08 2017 10:03:20 GMT-0800 (PST)"

// let time = (Date.now() - (potato.features[i].properties.time) / 60 / 60 / 1000






//closers for $(document).ready
});
//
