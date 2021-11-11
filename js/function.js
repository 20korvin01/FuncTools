var osmUrl = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    osm = L.tileLayer(osmUrl, {
        maxZoom: 18,
        attribution: '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a>'
    });

var map = L.map('map').setView([53.540309, 10.004968], 12).addLayer(osm);

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
}

map.on('click', onMapClick);