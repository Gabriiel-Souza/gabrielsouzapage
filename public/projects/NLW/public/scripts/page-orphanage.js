const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

// Create Map
const map = L.map("mapid", options).setView([-27.222633, -49.6455874], 15);

// Create & Add layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(
  map
);

// Create marker icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// Create & add marker
L.marker([-27.222633, -49.6455874], { icon }).addTo(map);

// Image Gallery

function selectImage(event) {
  const button = event.currentTarget;

  // Remover todas as classes .active
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach(removeActiveClass);

  function removeActiveClass(button) {
    button.classList.remove("active");
  }
  // Selecionar imagem clicada
  const image = button.children[0]
  const imageContainer = document.querySelector(".orphanage-details > img")
  
  // Atualizar o container de image
  imageContainer.src = image.src;

  // Adicionar a classe .active para este botao
  button.classList.add("active");
}
