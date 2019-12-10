//IMPORTANT TO WEBPACK COMPILER
import style from './../scss/custom.scss';

import {elements} from './views/Base';
import User from './models/User';
import {getKeyValues, tablesKeys} from './models/Data';

import Info from './models/Info';

import * as mapView from './views/mapView';
import {loadPoçoView, loadSuperfView, loadOutorView, loadLicenView, loadAutoView, loadInfoForm, clearInfoForm, loadProcessoView, loadNotifView} from './views/infoView';

import TableData from './models/TableData';
import * as requests from './requests';

import {showPanel, removePanel} from './views/panelView';

import {showResults, removeResults} from './views/searchView';
import {getAPIKeys} from './requests';

/**
 * ------------------------
 * Global State Variables
 * ------------------------
*/

let formActive, oldFormActive, tableName, selectedID, info;

/**
 * ------------------------
 * GENERAL EVENT LISTENERS
 * ------------------------
*/


//Set Sidebar-right Event Listeners
function toggleSidebar(){
	elements.sidebarID.classList.toggle('active');
	elements.contentClass.classList.toggle('active');
	elements.omniboxClass.classList.toggle('active');
	elements.sidebarBtnID.classList.toggle('actived');
	mapView.map.invalidateSize();
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
	mapView.map.invalidateSize();
}

//Set event listener to the close button on side infobar
elements.closeInfobarID.addEventListener('click', () => {
	toggleInfobar(false);
	clearInfoForm(elements.infobarSection, '-spatial');
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

/**
 * ------------------------
 * INFO FORM CONTROLLER
 * ------------------------
*/

//Load info from the server
async function loadInfo(parent, type, id){
	let infoRes = await requests.loadInfoQuery(requests.dashboardBase, requests.infoURL, `?id=${id}&type=${type}`);
	info = new Info(infoRes.table, infoRes.joinTables);

	console.log(info.s);

	let htmlList;
	let identif = '';
	switch (infoRes.type){
		case 'poço_id':
			tableName = tablesKeys.poços;
			selectedID = id;
			htmlList = loadPoçoView(info, tableData);
			identif = '-spatial';
			break;
		case 'super_id':
			tableName = tablesKeys.capSuperf;
			selectedID = id;
			htmlList = loadSuperfView(info, tableData);
			identif = '-spatial';
			break;
		case 'outorga_id':
			htmlList = loadOutorView(info, tableData);
			break;
		case 'processo_id':
			htmlList = loadProcessoView(info, tableData);
			break;
		case 'notif_id':
			htmlList = loadNotifView(info, tableData);
			break;
		case 'licen_id':
			htmlList = loadLicenView(info, tableData);
			break;
		case 'autoifr_id':
			htmlList = loadAutoView(info, tableData);
			break;
		default:
			break;
	}
	
	loadInfoForm(identif, parent, htmlList, tableName, selectedID);

	formActive = document.getElementById(`info-form-${tableName}-${selectedID}`);
}

/**
 * ------------------------
 * MAP SETTINGS
 * ------------------------
*/

function clickPointListener (feature, layer) {
	layer.on({
		click: (e) => {
			const latLngs = [e.target.getLatLng()];
			const keysArrays = getKeyValues(feature.properties);
			spatialInfo(keysArrays.keys[0], keysArrays.values[0], latLngs);
		}
	});
}

function spatialInfo(key, valueID, latLngs){
	const markerBounds = L.latLngBounds(latLngs);
	mapView.map.fitBounds(markerBounds, {maxZoom: 18});

	toggleInfobar(true);

	loadInfo(elements.infobarSection, key, valueID);
}

function hoverListenner(ev){
	const lat = ev.latlng.lat;
	const lng = ev.latlng.lng;

	elements.coordinates.innerHTML = convertDMS(lat, lng);
}

function convertDMS(lat, lng) {
	const convertLat = Math.abs(lat);
	const LatDeg = Math.floor(convertLat);
	const latMinDecimal = ((convertLat - LatDeg) * 60);
	const LatMin = (Math.floor(latMinDecimal));
	const LatSec = ((latMinDecimal-LatMin) * 60).toFixed(2);
	const LatCardinal = ((lat > 0) ? "N" : "S");

	var convertLng = Math.abs(lng);
	var LngDeg = Math.floor(convertLng);
	var lngMinDecimal = ((convertLng - LngDeg) * 60);
	var LngMin = Math.floor(lngMinDecimal);
	const LngSec = ((lngMinDecimal-LngMin) * 60).toFixed(2);
	var LngCardinal = ((lng > 0) ? "E" : "W");

	return LatDeg + '° ' + LatMin + '\' ' + LatSec  + '\" ' + LatCardinal + " | " + LngDeg + '° ' + LngMin + '\' ' + LngSec  + '\" ' + LngCardinal
}

function loadMap(){
	elements.mapViewClass.classList.toggle('show');
	mapView.initMap(tableData.tables, clickPointListener, hoverListenner);
}

/**
 * ------------------------
 * SET THE SHOW TABLE LISTENER
 * ------------------------
*/



for (const i in elements.closePanelBtn) {
	if (elements.closePanelBtn.hasOwnProperty(i)) {
		const element = elements.closePanelBtn[i];
		element.addEventListener('click', () => {
			clearInfoForm(elements.panelForm, '');
			removePanel();
		});
	}
}
window.addEventListener('hashchange', tableController);

function tableController(){

	removeResults();

	const hash = window.location.hash.replace('#', '').replace('%C3%A7', 'ç');
	const id = hash.split('=')[1];

	let tableTitle;
	let s;

	switch (true) {
		case hash.includes(tablesKeys.poços):
			const poço = tableData.getSpatialProperties(tablesKeys.poços, id);
			tableName = tablesKeys.poços;
			selectedID = id;
			spatialInfo(poço.key, poço.valueID, poço.latLng);
			removePanel();
			return null;
		case hash.includes(tablesKeys.capSuperf):
			const cap = tableData.getSpatialProperties(tablesKeys.capSuperf, id);
			tableName = tablesKeys.capSuperf;
			selectedID = id;
			spatialInfo(cap.key, cap.valueID, cap.latLng);
			removePanel();
			return null;
		case hash.includes(tablesKeys.setoresSedes):
			const setor = tableData.getSpatialProperties(tablesKeys.setoresSedes, id);
			tableName = tablesKeys.setoresSedes;
			selectedID = id;
			spatialInfo(setor.key, setor.valueID, setor.latLng);
			removePanel();
			return null;
		case hash.includes(tablesKeys.processos):
			tableTitle = 'Processos';
			s = tableData.tables[tablesKeys.processos];
			tableName = tablesKeys.processos;
			break;
		case hash.includes(tablesKeys.outorgas):
			tableTitle = 'Outorgas';
			s = tableData.tables[tablesKeys.outorgas];
			tableName = tablesKeys.outorgas;
			break;
		case hash.includes(tablesKeys.licenças):
			tableTitle = 'Licenças';
			s = tableData.tables[tablesKeys.licenças];
			tableName = tablesKeys.licenças;
			break;
		case hash.includes(tablesKeys.autosInfraçao):
			tableTitle = 'Autos de infração';
			s = tableData.tables[tablesKeys.autosInfraçao];
			tableName = tablesKeys.autosInfraçao;
			break;
		case hash.includes(tablesKeys.notificaçoes):
			tableTitle = 'Notificações';
			s = tableData.tables[tablesKeys.notificaçoes];
			tableName = tablesKeys.notificaçoes;
			break;
		case hash.includes('sobre'):
			elements.aboutPanel.classList.add('active');
			return null;
		default:
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

	let identifHash;
	if(id >= 0){
		identifHash = hash.split('=')[0];
		selectedID = id;
		loadInfo(elements.panelForm, objArrays.keys[0], id);
	}else{
		identifHash = hash;
	}

	
	showPanel(tableTitle, objArrays.values, identifHash, id);

	document.querySelector('.panel-item.active').scrollIntoView({behavior: "smooth", block: "nearest", inline: "nearest"});

	document.getElementById('myInput').addEventListener('input', filterList);
}

/**
 * ------------------------
 * EARLY IMPLEMENTATION OF SUBMITION DATA TO THE SERVER
 * ------------------------
*/

function submitInfo(){
	for (let i = 1; i < info.keys.length; i++) {
		if(!((info.keys[i] === 'usr_modif') || (info.keys[i] === 'data_modif') || (info.keys[i] === 'latitude') || (info.keys[i] === 'longitude'))){
			const value = formActive.elements[info.keys[i]].value;
		}
	}
}

for (let i = 0; i < elements.uploadButton.length; i++) {
	elements.uploadButton[i].addEventListener('click', function(){
		submitInfo();
	});
}

/**
 * ------------------------
 * SEARCH CONTROLLER
 * ------------------------
*/

function search(){
	let list = [];
	const query = elements.searchInput.value;
	elements.cleanSearchBox.classList.add('active');

	list.push(...tableData.search(query, tableData.getFeaturesProperties(tablesKeys.poços), tablesKeys.poços, 'Poço', 'nome'));
	list.push(...tableData.search(query, tableData.getFeaturesProperties(tablesKeys.capSuperf), tablesKeys.capSuperf, 'Cap. Superf.', 'nome'));
	list.push(...tableData.search(query, tableData.getFeaturesProperties(tablesKeys.setoresSedes), tablesKeys.setoresSedes, 'Setor', 'nome'));
	list.push(...tableData.search(query, tableData.tables[tablesKeys.outorgas], tablesKeys.outorgas, 'Outorga', 'num_outorga'));
	list.push(...tableData.search(query, tableData.tables[tablesKeys.processos], tablesKeys.processos, 'Processo', 'num_processo', 'obj_processo'));
	list.push(...tableData.search(query, tableData.tables[tablesKeys.processos], tablesKeys.processos, 'Processo', 'obj_processo', 'num_processo'));
	list.push(...tableData.search(query, tableData.tables[tablesKeys.licenças], tablesKeys.licenças, 'Licença', 'num_licen'));
	list.push(...tableData.search(query, tableData.tables[tablesKeys.autosInfraçao], tablesKeys.autosInfraçao, 'Auto de Infração', 'num_infra'));
	list.push(...tableData.search(query, tableData.tables[tablesKeys.notificaçoes], tablesKeys.notificaçoes, 'Notificação', 'num_notif'));

	showResults(list);

	if(query === ''){
		removeResults();
	}
}

document.addEventListener('keydown', e => {
	if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
		let columnMenuItems = document.querySelectorAll('.result-item');
		let index;
		for (let i = 0; i < columnMenuItems.length; i++) {
			if (columnMenuItems[i].classList.contains('active') === true) {
				index = i;
			}
		}

		if(index !== undefined){
			document.querySelector(`.result-item.i${index}`).classList.remove('active');
			let item;
			if (e.key === 'ArrowDown'){
				item = document.querySelector(`.result-item.i${index+1}`);
			}else if (e.key === 'ArrowUp'){
				item = document.querySelector(`.result-item.i${index-1}`);
			}
			item.classList.add('active');
		}else{
			let item;
			if (e.key === 'ArrowDown'){
				item = document.querySelector(`.result-item.i0`);
			}else if (e.key === 'ArrowUp'){
				item = document.querySelector(`.result-item.i${columnMenuItems.length-1}`);
			}
			item.classList.add('active');
		}

		document.querySelector('.result-item.active').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
	}
});

document.addEventListener('keypress', e => {
	if (event.which == 13 || event.keyCode == 13){
		document.querySelector('.result-item.active a').click();
	}
});


elements.cleanSearchBox.addEventListener('click', ()=>{
	removeResults();
})

elements.searchInput.addEventListener('input', search);