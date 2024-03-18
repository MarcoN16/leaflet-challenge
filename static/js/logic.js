const url="https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Create a map object.
let myMap = L.map("map", {
    center: [37, -110],
    zoom: 6
  });

let streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

function colorID(depthInfo){
    if (depthInfo>= -10 && depthInfo< 10) {
              color = "#42F907";
    }
    if (depthInfo >= 10 && depthInfo< 30) {
              color = "#B7F907";
    }
    if (depthInfo >= 30 && depthInfo< 50) {
              color = "#F9E707";
    }
    if (depthInfo >= 50 && depthInfo< 60) {
              color = "#F9C907";
    }
    if (depthInfo >= 70 && depthInfo< 90) {
              color = "#F99607";
    }
    if (depthInfo >= 90) {
              color = "#F90707";
    }
    return color;
};

data = d3.json(url).then(function(data) {
    console.log(data);
    earthquakesInfo(data)
});
    
function earthquakesInfo(infoData){    
    let features = infoData.features;
    // // Loop through the earthquake array, and create one marker for each event object.
    for (let i = 0; i < features.length; i++) {
        let time = features[i].properties.time;
        let depth = features[i].geometry.coordinates[2];
        let lat = features[i].geometry.coordinates[0];
        let long = features[i].geometry.coordinates[1];
        let magnitude = features[i].properties.mag;
        L.circle([long, lat], {
                  fillOpacity: 0.75,
                  color: "black",
                  fillColor: colorID(depth),
                  // Adjust the radius.
                  radius: (magnitude) * 10000
                }).bindPopup(`<h3>Earthquake epicenter: ${features[i].properties.place}</h3> <hr> <h4>time: ${moment.unix(time).format("h:mm:ss A")}</h4>
                <h4>Magnitude: ${magnitude}</h4>`).addTo(myMap);
        
    }
};

// Create a legend to display information about our map.
let info = L.control({
    position: "bottomright"
});

// When the layer control is added, insert a div with the class of "legend".
info.onAdd = function() {
    let div = L.DomUtil.create("div", "legend");
    depth = [-10, 10, 30, 50, 70, 90];

    // Add CSS styling to the legend container div
    div.style.backgroundColor = "#ffffff"; // White background
    div.style.padding = "10px";
    div.style.border = "2px solid #000000"; // Black border
    div.style.borderRadius = "5px"; // Rounded corners

    div.innerHTML += "<h3 style='text-align: center'>Depth</h3>";

    for (var i = 0; i < depth.length; i++) {
        div.innerHTML +=
            '<i style="background:' + colorID(depth[i] + 1) + '"></i> ' + depth[i] + (depth[i + 1] ? '&ndash;' + depth[i + 1] + '<br>' : '+');
    }

    // Add CSS styling to the legend color swatches
    let legendItems = div.getElementsByTagName("i");
    for (let j = 0; j < legendItems.length; j++) {
        legendItems[j].style.width = "20px";
        legendItems[j].style.height = "10px";
        legendItems[j].style.display = "inline-block";
        legendItems[j].style.marginRight = "5px";
    }

    return div;
};

// Add the info legend to the map.
info.addTo(myMap);
