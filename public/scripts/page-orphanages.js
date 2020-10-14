//	Create Map
const map = L.map("mapid").setView([-18.9194386,-48.2569037], 15);

//	Create and add TileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//	Create Icon
const icon = L.icon({iconUrl:"./public/images/map-marker.svg", iconSize:[58,68], iconAnchor:[29,68], popupAnchor:[170,2]});

//	Create Pop-Up Overlay
const popup = L.popup({closeButton:false, className:"map-popup", minWidth:240, minHeight:240}).setContent('Lar das Meninas <a href="orphanage.html?id=1 class="chose-orphanage"><img src="./public/images/arrow-white.svg"></a>');

//	Create and Add Marker
L.marker([-18.91943,-48.25690], {icon}).addTo(map).bindPopup(popup);