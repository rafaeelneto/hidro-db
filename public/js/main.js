import style from './../scss/custom.scss';
import {elements, elementSelectors} from './views/Base';
import User from './models/User';
import {getKeyValues, tablesKeys} from './models/Data';

import Info from './models/Info';

import * as mapView from './views/mapView';
import {loadPoçoView, loadSuperfView, loadOutorView, loadInfoForm, clearInfoForm} from './views/infoView';

import TableData from './models/TableData';
import * as requests from './requests';

import {showPanel, removePanel, addPanel} from './views/panelView';

/**
 * ------------------------
 * Event Listeners
 * ------------------------
*/


//Set Sidebar-right Event Listeners
function toggleSidebar(){
	elements.sidebarID.classList.toggle('active');
	elements.contentClass.classList.toggle('active');
	elements.omniboxClass.classList.toggle('active');
	elements.sidebarBtnID.classList.toggle('actived');
}

elements.sidebarBtnID.addEventListener('click', toggleSidebar);

//Set Side infobar to show
function toggleInfobar(active){
	if (active){
		elements.infoSideClass.classList.add('active');
		elements.contentClass.classList.add('info-active');
	}else{
		elements.infoSideClass.classList.remove('active');
		elements.contentClass.classList.remove('info-active');
	}
}
//Set event listener to the close button on side infobar
elements.closeInfobarID.addEventListener('click', () => {
	toggleInfobar(false);
	clearInfoForm(elements.infoList);
	map.invalidateSize();
});

//Initialize the user, load tables and init map
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
	tableController();
})();

async function loadInfo(parent, type, id){
	console.log("Did you call me?", type, id);
	let infoRes = await requests.loadInfoQuery(requests.dashboardBase, requests.infoURL, `?id=${id}&type=${type}`);
	console.log(infoRes);
	const info = new Info(infoRes.table, infoRes.joinTables);
	let htmlList;
	switch (infoRes.type){
		case 'poço_id':
			htmlList = loadPoçoView(info, tableData.tables);
			break;
		case 'super_id':
			htmlList = loadSuperfView(info, tableData.tables);
			break;
		case 'outorga_id':
			htmlList = loadOutorView(info, tableData.tables); 
			break;
		default:
			break;
	}
	loadInfoForm(parent, htmlList);
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

			const keysArrays = getKeyValues(feature.properties);
			toggleInfobar(true);
			loadInfo(elements.infobarSection, keysArrays.keys[0], keysArrays.values[0]);
		}
	});
}

function loadMap(){
	elements.mapViewClass.classList.toggle('show');
	mapView.initMap(tableData.tables, clickPointListener);
}

/**
 * ------------------------
 * set table listeners
 * ------------------------
*/

function tableController(){
	const hash = window.location.hash.replace('#', '').replace('%C3%A7', 'ç');
	const id = hash.split('=')[1];

	let tableTitle;
	let s;
	switch (true) {
		case hash.includes('notificaçoes'):
			tableTitle = 'Notificações';
			s = tableData.tables[tablesKeys.notificaçoes]
			break;
		case hash.includes('processos'):
			tableTitle = 'Processos';
			s = tableData.tables[tablesKeys.processos]
			break;
		case hash.includes('outorgas'):
			tableTitle = 'Outorgas';
			s = tableData.tables[tablesKeys.outorgas]
			break;
		case hash.includes('licenças'):
			tableTitle = 'Licenças';
			s = tableData.tables[tablesKeys.licenças];
			break;
		case hash.includes('autosinfra'):
			tableTitle = 'Autos de infração';
			s = tableData.tables[tablesKeys.autosInfraçao]
			break;
		case hash.includes('sobre'):
			//SHOW THE CREDITS PAGE
			break;
		default:
			//DO SOMETHING BEFORE COME BACK TO MAP
			return null;
	}

	let objArrays = {
		keys: [],
		values: []
	};

	for (let i = 0; i < s.length; i++) {
		let keyValues = getKeyValues(s[i]);
		objArrays.keys = keyValues.keys;
		objArrays.values.push(keyValues.values);
	}
	
	console.log(objArrays);

	let identifHash;
	if(id !== undefined){
		identifHash = hash.split('=')[0];
		//CALL THE INFO LOADING PASSING THE ID
		loadInfo(elements.panelForm, objArrays.keys[0], id);
	}else{
		identifHash = hash;
	}

	showPanel(tableTitle, objArrays.keys, objArrays.values, identifHash);
}

elements.closePanelBtn.addEventListener('click', removePanel);
window.addEventListener('hashchange', tableController);