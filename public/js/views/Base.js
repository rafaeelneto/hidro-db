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
    closeInfobarID: document.querySelector('#close-info-btn'),
    infoSideClass: document.querySelector('.info-sidebar'),

    //Info element
    infoForm: document.querySelector('#info-form'),

    //map
    mapViewClass: document.querySelector('.map-view'),
    mapID: document.getElementById('map')
}

export const elementSelectors = {
    infoList: '.info-list'
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
