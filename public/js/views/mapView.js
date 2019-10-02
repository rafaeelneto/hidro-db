import {tablesKeys} from './../models/Data'

let map;
let layerControl;

const baseMaps = {
	"Mapa": schemathic,
	"Satélite": satellite,
	'Satélite com Nomes': hybrid
};

//FIX THE API KEYS TO THE ROUTE
const schemathic = L.tileLayer('https://api.mapbox.com/styles/v1/rafaeel/cjz8tael002on1dqclsqt84ik/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicmFmYWVlbCIsImEiOiJjano4dDh1OHMwM2xtM2JwbG9jcWFmaXhzIn0.SihsXFXEW54INSxYcZ6_BQ', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 30,
	id: 'mapbox.streets',
	});

//Google Mutante API used || valid values are 'roadmap', 'satellite', 'terrain' and 'hybrid'
const satellite = L.gridLayer.googleMutant({
		type: 'satellite'
	});
const hybrid = L.gridLayer.googleMutant({
		type: 'hybrid'
	});


function getColor(s) {
	switch (s) {
		case 'Ativo':
			return '#0ead63';
		case 'Inativo':
			return '#F67280';
		case 'Em construção':
			return '#C23AE8';
		default:
			return '#4e4e4e';
	}
}

function getIcon(s){
	let url = '';
	switch (s) {
		case 'Ativo':
			url = './../../images/simbology/triangulos-01.png';
			break;
		case 'Inativo':
			url = './../../images/simbology/triangulos-02.png';
			break;
		case 'Em construção':
			url = './../../images/simbology/triangulos-03.png';
			break;
		default:
			url = './../../images/simbology/triangulos-04.png';
			break;
	}
	const myIcon = L.icon({
		iconUrl: url,
		iconSize: [20, 20]
	});	
	return myIcon;
}

function stylePoços(feature){
	return {
		fillColor: getColor(feature.properties.situaçao),
		radius: 7,
		weight: 2,
		opacity: 1,
		color: 'white',
		fillOpacity: 0.9
	};
};

function styleSetores(){
	return {
		fillColor: '#FF6331',
		radius: 3,
		weight: 1,
		opacity: 1,
		color: 'black',
		fillOpacity: 0.7
	};
};

function initMap(tables, clickPointListerner, hoverListerner) {
	map = L.map('map', {
		zoomControl: false,
		center: [-4.0, -52.0],
		zoom: 6
	});

	map.addEventListener('mousemove', hoverListerner);
	
	L.control.scale({
		maxWidth: 300,
		metric: true,
		imperial: false,
		position: 'bottomleft'
	}).addTo(map);

	schemathic.addTo(map);

	layerControl = L.control.layers().addTo(map);
	layerControl.position = 'topright';
	layerControl.collapse = false;
	layerControl.addBaseLayer(schemathic, "Mapa");
	layerControl.addBaseLayer(satellite, "Satélite");
	layerControl.addBaseLayer(hybrid, "Satélite com nomes");

	L.control.zoom({
		position: 'bottomright'
	}).addTo(map);
	
	document.querySelector('.leaflet-control-layers-toggle').insertAdjacentHTML('afterbegin', '<h6 id="mapBaseTitle">CAMADAS</h6>');

	const setoresLayer = L.geoJSON(null, {
		pointToLayer: (feature, latlng) => {
			let label = String(feature.properties.nome);
			return L.circleMarker(latlng).bindTooltip(label, {permanent: false, opacity: 0.9, className: "labels-setores"}).openTooltip();
		},
		style: styleSetores,
		onEachFeature: clickPointListerner
	}).addTo(map);

	const superfLayer = L.geoJSON(null, {
		pointToLayer: (feature, latlng) => {
			let label = String(feature.properties.nome);
			return new L.Marker(latlng, {icon: getIcon(feature.properties.situaçao)}).bindTooltip(label, {permanent: false, opacity: 0.9, className: "labels"}).openTooltip();
		},
		style: stylePoços,
		onEachFeature: clickPointListerner
	}).addTo(map);

	const poçosLayer = L.geoJSON(null, {
		pointToLayer: (feature, latlng) => {
			let label = String(feature.properties.nome);
			return L.circleMarker(latlng).bindTooltip(label, {permanent: false, opacity: 0.9, className: "labels", maxZoom: 3}).openTooltip();
		},
		style: stylePoços,
		onEachFeature: clickPointListerner
	}).addTo(map);

	poçosLayer.addData(tables[tablesKeys.poços]);
	superfLayer.addData(tables[tablesKeys.capSuperf]);
	setoresLayer.addData(tables[tablesKeys.setoresSedes]);

	const points = L.layerGroup();
	
	points.addLayer(setoresLayer);
	points.addLayer(poçosLayer);
	points.addLayer(superfLayer);

	layerControl.addOverlay(poçosLayer, "Poços");
	layerControl.addOverlay(superfLayer, "Cap. Superficial");
	layerControl.addOverlay(setoresLayer, "Setores");

	map.invalidateSize();

	document.querySelector('.leaflet-control-layers-base').insertAdjacentHTML('afterbegin', '<h6 id="mapBaseTitle">Mapas base</h6>');
	document.querySelector('.leaflet-control-layers-overlays').insertAdjacentHTML('afterbegin', '<h6 id="mapOverlayTitle">Camadas</h6>');
}


export {
	map,
	initMap,
	stylePoços
}; 
