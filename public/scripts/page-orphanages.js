//	Create Map
const map = L.map("mapid").setView([-18.9194386,-48.2569037], 15);

//	Create and add TileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//	Create Icon
const icon = L.icon({iconUrl:"/images/map-marker.svg", iconSize:[58,68], iconAnchor:[29,68], popupAnchor:[170,2]});

function addMarker({id, name, lat, lng}){

	//	Create Pop-Up Overlay
	const popup = L.popup({closeButton:false, className:"map-popup", minWidth:240, minHeight:240}).setContent(`${name} <a href="/orphanage?id=${id} class="chose-orphanage"><img src="/images/arrow-white.svg"></a>`);

	//	Create and Add Marker
	L.marker([lat,lng], {icon}).addTo(map).bindPopup(popup);
}

const ophanagesSpan = document.querySelectorAll(".orphanages span");
ophanagesSpan.forEach( span => {const orphanage = {id:span.dataset.id, name:span.dataset.name, lat:span.dataset.lat, lng:span.dataset.lng}; addMarker(orphanage)});