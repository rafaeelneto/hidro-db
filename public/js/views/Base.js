export const elements = {
    //home
    contentClass: document.querySelector('.content'),
    omniboxClass: document.querySelector('.omnibox'),

    //Sidebar nav
    sidebarID: document.querySelector('#sidebar'),
    sidebarBtnID: document.querySelector('#sidebarCollapse'),
    userNameID: document.querySelector('#user-name'),
    logoutBtnID: document.querySelector('#btn-logout'),

    //Sidebar info
    closeInfobarID: document.querySelector('#close-infoside-btn'),
    infoSideClass: document.querySelector('.info-sidebar'),

    //Info element
    infoForm: document.querySelector('#info-form'),
    infobarSection: document.querySelector('.infobar-section'),
    infoTableSection: document.querySelector('.table-info-section'),

    uploadButton: document.querySelectorAll('#upload-info-btn'),

    //Panel elements
    panelTitle: document.querySelector('#panel-title'),
    panel: document.querySelector('.table-panel'),
    sectionContainer: document.querySelector('.section-container'),
    closePanelBtn: document.querySelectorAll('.close-panel-btn'),
    panelForm: document.querySelector('.table-info-section'),

    //map
    mapViewClass: document.querySelector('.map-view'),
    mapID: document.getElementById('map'),
    coordinates: document.querySelector('.coordinates'),

    homeBtn: document.querySelector('#homeBtn.leaflet-control-home'),
    labelBtn: document.querySelector('#labelBtn.leaflet-control-label'),

    //search
    cleanSearchBox: document.getElementById('button-close-search'),
    searchInput: document.getElementById('search-input'),
    resultDiv: document.querySelector('.results-search'),

    aboutPanel: document.querySelector('.about-panel')
}

//Selectors used by the clean list functions
export const elementSelectors = {
    infoGroup: '.info-group',
    listRegisters: '.list-reg',
    listResults: '.result-list'
}

export const nullVeryfier = (v)=> {
    if(v === null){
        return '-';
    }else{
        return v;
    }
}
export const nullReplace = (v)=> {
    if(v === '-' || v === null){
        return null;
    }else{
        return v;
    }
}

export const formatDate = (date) => {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(date)
    return [d.getFullYear(), pad(d.getMonth()+1), pad(d.getDate())].join('-')
}

export const formatDateText = (date) => {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(date)
    return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/')
}
