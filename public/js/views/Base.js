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

    //Panel elements
    panelTitle: document.querySelector('#panel-title'),
    panel: document.querySelector('.table-panel'),
    sectionContainer: document.querySelector('.section-container'),
    closePanelBtn: document.querySelector('#close-panel-btn'),
    panelForm: document.querySelector('.table-info-section'),

    //map
    mapViewClass: document.querySelector('.map-view'),
    mapID: document.getElementById('map'),

    //search
    searchInput: document.getElementById('search-input'),
    resultDiv: document.querySelector('.results-search')
}

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
