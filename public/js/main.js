import style from './../scss/custom.scss';
import * as base from './views/Base';
import User from './models/User';
import * as mapView from './views/mapView';
import GisData from './models/GisData';
import * as requests from './requests';

/**
 * ------------------------
 * Event Listeners
 * ------------------------
*/

//Set Sidebar-right Event Listeners
base.sidebarBtnID.addEventListener('click', function(){
	base.sidebarID.classList.toggle('active');
	base.contentClass.classList.toggle('active');
	base.omniboxClass.classList.toggle('active');
	base.sidebarBtnID.classList.toggle('actived');
});

//Initialize the user and set hello msg
const user = new User();
(async () => {
	const name = await user.getUser();
	base.userNameID.innerHTML = name;
	if(name === 'visitante'){
		base.logoutBtnClass.innerHTML = 'Entrar';
	}
})();

/**
 * ------------------------
 * Map settings
 * ------------------------
*/
const gisData = new GisData();
mapView.initMap();

async function getInfo(type, id){
	let infoRes = await requests.loadInfo(requests.dashboardBase, requests.gisURL + '/cap', `?id=${id}&type=${type}`);
	console.log(infoRes);
}

function clickPointListener (feature, layer) {
	layer.on({
		click: (e) => {
			const latLngs = [e.target.getLatLng()];
			const markerBounds = L.latLngBounds(latLngs);
			mapView.map.fitBounds(markerBounds, {maxZoom: 20});

			const s = feature.properties;
			let keys = [];
			let values = [];
			for(var i in s) {
				keys.push(i);
				values.push(s[i]);
			}
			getInfo(keys[0], values[0]);
		}
	});
}

(async () => {
	const gisResults = await gisData.loadAll('cap');
	console.log(gisResults);
	poçosLayer = mapView.loadPointLayer('poço', gisResults[0], clickPointListener, mapView.stylePoços);
	superfLayer = mapView.loadPointLayer('superf', gisResults[1], clickPointListener, mapView.stylePoços);
})();
