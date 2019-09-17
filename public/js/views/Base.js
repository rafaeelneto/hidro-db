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
    closePanelBtn: document.querySelector('#close-panel-btn'),
    panelForm: document.querySelector('.table-info-section'),

    //map
    mapViewClass: document.querySelector('.map-view'),
    mapID: document.getElementById('map')
}

export const elementSelectors = {
    infoGroup: 'info-group'
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
