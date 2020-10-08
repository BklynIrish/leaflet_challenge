// Store our API endpoint inside queryUrl
var queryUrl =
    "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";

// Perform a GET request to the query URL
d3.json(queryUrl, function(data) {
    console.log("data", data);
    // Once we get a response, send the data.features object to the createFeatures function
    createFeatures(data.features);
    console.log("data.features", data.features);
});