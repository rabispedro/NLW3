const options = {dragging: false, touchZoom: false, doubleClickZoom: false, scrollWheelZoom: false, zoomControl: false};

//	Get values from HTML 
const spanLat = document.querySelector("span[data-lat]");
const spanLng = document.querySelector("span[data-lng]");

//	Create Map
const map = L.map("mapid", options).setView([spanLat.dataset.lat,spanLng.dataset.lng], 15);

//	Create and add TileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//	Create Icon
const icon = L.icon({iconUrl:"/images/map-marker.svg", iconSize:[58,68], iconAnchor:[29,68], popupAnchor:[170,2]});

//	Create and Add Marker
L.marker([spanLat.dataset.lat,spanLng.dataset.lng], {icon}).addTo(map);

//	Image Gallery
function selectImage(event){
	const button = event.currentTarget;
	
	//	Remover todas as classes .active
	const buttons = document.querySelectorAll(".images button");
	buttons.forEach((button) => {button.classList.remove("active");});

	//	Selecionar a imagem clicada
	const image = button.children[0];
	const imageContainer = document.querySelector(".orphanage-details > img");

	//	Atualizar o container da imagem
	imageContainer.src = image.src

	//	Adicionar a classe .active para o botão clicado
	button.classList.add("active");
}