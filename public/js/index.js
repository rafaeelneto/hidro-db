document.querySelector('#sidebarCollapse').addEventListener('click', function(){
	document.querySelector('#sidebar').classList.toggle('active');
	document.querySelector('.content').classList.toggle('active');
	document.querySelector('.omnibox').classList.toggle('active');
	document.querySelector('#sidebarCollapse').classList.toggle('actived');
});

//-1.41501/-48.42868

/*
const map = L.map('map').setView([-1.41, -48.42], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/rafaeel/cjz8tael002on1dqclsqt84ik/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicmFmYWVlbCIsImEiOiJjano4dDh1OHMwM2xtM2JwbG9jcWFmaXhzIn0.SihsXFXEW54INSxYcZ6_BQ', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.light',
	accessToken: 'pk.eyJ1IjoicmFmYWVlbCIsImEiOiJjano4dDh1OHMwM2xtM2JwbG9jcWFmaXhzIn0.SihsXFXEW54INSxYcZ6_BQ'
}).addTo(map);

map.zoomControl.setPosition('bottomright');*/

mapboxgl.accessToken = 'pk.eyJ1IjoicmFmYWVlbCIsImEiOiJjano4dDh1OHMwM2xtM2JwbG9jcWFmaXhzIn0.SihsXFXEW54INSxYcZ6_BQ';
const map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/rafaeel/cjz8tael002on1dqclsqt84ik'
});