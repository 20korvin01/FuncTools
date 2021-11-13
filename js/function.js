// Leaflet stuff
var osmUrl = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    osm = L.tileLayer(osmUrl, {
        maxZoom: 18,
        attribution: '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a>'
    });

var map = L.map('map').setView([53.540309, 10.004968], 12).addLayer(osm);
var locations = [];

function onMapClick(e) {
    var marker = L.marker(e.latlng, {
        draggable: true,
        title: "Resource location",
        alt: "Resource Location",
        riseOnHover: true
    }).addTo(map)
        .bindPopup(e.latlng.toString()).openPopup();

    marker.on("dragend", function (ev) {

        var chagedPos = ev.target.getLatLng();
        this.bindPopup(chagedPos.toString()).openPopup();
    });

    // appending coordinates
    var coors = [e.latlng.lat, e.latlng.lng];
    locations.push(coors);
}

map.on('click', onMapClick);


// getting distances between markers
function orthodrome() {
    var radius = 6378.137;
    var distance = 0;
    var rho = Math.PI / 180;
    for (let i = 0; i < locations.length - 1; i++) {
        latA = locations[i][0] * rho;
        lngA = locations[i][1] * rho;
        latB = locations[i+1][0] * rho;
        lngB = locations[i+1][1] * rho;
        distance += radius * Math.acos(Math.sin(latA) * Math.sin(latB) + Math.cos(latA) * Math.cos(latB) * Math.cos(lngB - lngA));
    }
    document.getElementById("distance").value = distance;
}