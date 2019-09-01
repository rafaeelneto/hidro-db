import style from './../scss/custom.scss';
import {elements} from './views/Base';
import User from './models/User';
import {getKeyValues, tablesKeys} from './models/Data';

import Info from './models/Info';

import * as mapView from './views/mapView';
import {loadPoçoView, loadSuperfView, loadInfoForm, clearInfoForm, loadSetores} from './views/infoView';

import TableData from './models/TableData';
import * as requests from './requests';

/**
 * ------------------------
 * Event Listeners
 * ------------------------
*/

//Set Sidebar-right Event Listeners
elements.sidebarBtnID.addEventListener('click', function(){
	elements.sidebarID.classList.toggle('active');
	elements.contentClass.classList.toggle('active');
	elements.omniboxClass.classList.toggle('active');
	elements.sidebarBtnID.classList.toggle('actived');
});

//Set Infobar Event Listeners

function toggleInfobar(active){
	if (active){
		elements.infoSideClass.classList.add('active');
		elements.contentClass.classList.add('info-active');
	}else{
		elements.infoSideClass.classList.remove('active');
		elements.contentClass.classList.remove('info-active');
	}
}

elements.closeInfobarID.addEventListener('click', () => {
	toggleInfobar(false);
	clearInfoForm(elements.infoList);
});


//Initialize the user and load table and init map
const user = new User();
const tableData = new TableData();
(async () => {
	const name = await user.getUser();
	elements.userNameID.innerHTML = name;
	if(name === 'visitante'){
		elements.logoutBtnID.innerHTML = 'Entrar';
	}
	await tableData.loadAll();
	loadMap();
	console.log(tableData.tables);
	loadSetores(2, tableData.tables[tablesKeys.setoresSedes]);
})();


async function loadInfo(type, id){
	let infoRes = await requests.loadInfoQuery(requests.dashboardBase, requests.infoURL, `?id=${id}&type=${type}`);
	const info = new Info(infoRes.table, infoRes.joinTables);
	let html;
	switch (infoRes.type){
		case 'poço_id':
			html = loadPoçoView(info, tableData.tables);
			break;
		case 'super_id':
			html = loadSuperfView(info);
			break;
		case 'outorga_id':
			html = loadSuperfView(info); //fix it
			break;
		default:
			break;
	}
	loadInfoForm(elements.infoForm, html);
}

/**
 * ------------------------
 * Map settings
 * ------------------------
*/

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
			toggleInfobar(true);
			loadInfo(keys[0], values[0]);
		}
	});
}

function loadMap(){
	elements.mapViewClass.classList.toggle('show');
	mapView.initMap(tableData.tables, clickPointListener);
}