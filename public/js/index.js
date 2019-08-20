document.querySelector('#sidebarCollapse').addEventListener('click', function(){
    console.log('miaaaaaaau')
    document.querySelector('#sidebar').classList.toggle('active');
});

//-1.41501/-48.42868
const map = L.map('map').setView([-1.41, -48.42], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.light',
	accessToken: 'pk.eyJ1IjoicmFmYWVlbCIsImEiOiJjano4dDh1OHMwM2xtM2JwbG9jcWFmaXhzIn0.SihsXFXEW54INSxYcZ6_BQ'
}).addTo(map);