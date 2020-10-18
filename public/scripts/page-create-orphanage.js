//	Create Map
const map = L.map("mapid").setView([-18.9194386,-48.2569037], 15);

//	Create and add TileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//	Create Icon
const icon = L.icon({iconUrl:"/images/map-marker.svg", iconSize:[58,68], iconAnchor:[29,68]});

let marker;

//	Create and add Marker
map.on("click", (event) => {const lat = event.latlng.lat; const lng = event.latlng.lng; document.querySelector("[name=lat]").value = lat; document.querySelector("[name=lng]").value = lng; marker && map.removeLayer(marker); marker = L.marker([lat, lng], {icon}).addTo(map)});

//	Add Image Field
function addImageField(){
	// Get Image Container (#images)
	const container = document.querySelector("#images");

	//	Get Container to duplicate (.new-upload)
	const fieldContainer = document.querySelectorAll(".new-upload");

	//	Clone Image
	const newFieldContainer = fieldContainer[fieldContainer.length-1].cloneNode(true);

	//	Verify if name is empty
	const input = newFieldContainer.children[0];

	if(input.value == ""){
		return;
	}

	//	Clear the Name Field
	input.value = "";

	//	Add Clone to Image Container
	container.appendChild(newFieldContainer);
}

function deleteField(event){
	const span = event.currentTarget;
	const fieldContainer = document.querySelectorAll(".new-upload");
	
	if(fieldContainer.length <= 1){
		//	Clean field
		span.parentNode.children[0].value = "";

		return;
	}

	//	Delete the field
	span.parentNode.remove();
}

//	Toggle selected Weekend Activity
function toggleSelect(event){
	//	Remove .active
	document.querySelectorAll(".button-select button").forEach((button) => {button.classList.remove("active")});
	
	//	Add .active
	const button = event.currentTarget;
	button.classList.add("active");

	//	Actualize hidden input with value
	const input = document.querySelector("[name=open_on_weekends]");

	input.value = button.dataset.value;
}