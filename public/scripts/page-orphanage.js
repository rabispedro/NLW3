const options = {dragging: false, touchZoom: false, doubleClickZoom: false, scrollWheelZoom: false, zoomControl: false};

//	Create Map
const map = L.map("mapid", options).setView([-18.9194386,-48.2569037], 15);

//	Create and add TileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//	Create Icon
const icon = L.icon({iconUrl:"/images/map-marker.svg", iconSize:[58,68], iconAnchor:[29,68], popupAnchor:[170,2]});

//	Create and Add Marker
L.marker([-18.91943,-48.25690], {icon}).addTo(map);

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