/**
 * const mapStyle = [{"elementType":"geometry","stylers":[{"color":"#ebe3cd"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#523735"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f1e6"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#c9b2a6"}]},{"featureType":"administrative.land_parcel","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"geometry.stroke","stylers":[{"color":"#f4efd9"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#ae9e90"}]},{"featureType":"administrative.neighborhood","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#f0ebc6"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#dfd2ae"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#93817c"}]},{"featureType":"poi.attraction","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","stylers":[{"visibility":"off"}]},{"featureType":"poi.government","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#aed9bd"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#447530"}]},{"featureType":"poi.school","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#f5f1e6"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"weight":0.5}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#fdfcf8"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#f8c967"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#f0d399"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry","stylers":[{"color":"#e98d58"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.stroke","stylers":[{"color":"#db8555"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#806b63"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#dfd2ae"}]},{"featureType":"transit.line","elementType":"labels.text.fill","stylers":[{"color":"#8f7d77"}]},{"featureType":"transit.line","elementType":"labels.text.stroke","stylers":[{"color":"#ebe3cd"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#dfd2ae"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#79adc6"}]},{"featureType":"water","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#1f4969"}]}];
 map = new google.maps.Map(document.getElementById('map'), {
	 center: {lat: -1.41, lng: -48.42},
	 zoom: 8,
	 styles: mapStyle,
	 disableDefaultUI: true,
	 zoomControl: true,
	 streetViewControl: true,
	 controlSize: 28
 });
 
 const gisData = new GisData();
 (async () => {
	 const gisResults = await gisData.loadAll();
	 console.log(gisResults);
	 map.data.addGeoJson(gisResults[0]);
 })();
 */

import {tablesKeys} from './../models/Data'

let map;
let layerControl;

const baseMaps = {
	"Esquematico": schemathic,
	"Satélite": satellite
};

const schemathic = L.tileLayer('https://api.mapbox.com/styles/v1/rafaeel/cjz8tael002on1dqclsqt84ik/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicmFmYWVlbCIsImEiOiJjano4dDh1OHMwM2xtM2JwbG9jcWFmaXhzIn0.SihsXFXEW54INSxYcZ6_BQ', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 30,
	id: 'mapbox.streets',
	});
const satellite = L.gridLayer.googleMutant({
		type: 'satellite'	// valid values are 'roadmap', 'satellite', 'terrain' and 'hybrid'
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

function initMap(tables, clickPointListerner) {
	map = L.map('map', {
		zoomControl: false,
		center: [-1.5, -48.0],
		zoom: 9
	});

	schemathic.addTo(map);

	layerControl = L.control.layers().addTo(map);
	layerControl.position = 'topright';
	layerControl.collapse = false;
	layerControl.addBaseLayer(schemathic, "Esquemático");
	layerControl.addBaseLayer(satellite, "Satélite");

	L.control.zoom({
		position: 'bottomright'
	}).addTo(map);

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
			return L.circleMarker(latlng).bindTooltip(label, {permanent: false, opacity: 0.9, className: "labels"}).openTooltip();
		},
		style: stylePoços,
		onEachFeature: clickPointListerner
	}).addTo(map);

	poçosLayer.addData(tables[tablesKeys.poços]);
	superfLayer.addData(tables[tablesKeys.capSuperf]);
	setoresLayer.addData(tables[tablesKeys.setoresSedes]);
	
	map.addLayer(setoresLayer);
	map.addLayer(poçosLayer);
	map.addLayer(superfLayer);

	layerControl.addOverlay(poçosLayer, "Poços");
	layerControl.addOverlay(superfLayer, "Cap. Superficial");
	layerControl.addOverlay(setoresLayer, "Setores");

	map.invalidateSize();
}


export {
	map,
	initMap,
	stylePoços
}; 
