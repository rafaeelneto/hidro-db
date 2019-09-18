import {loadPoçoView, loadSuperfView, loadOutorView, loadInfoForm, clearInfoForm} from './../views/infoView';
import {elements} from './../views/Base';

function showPanel(tableTitle, keys, values, identifHash){
    addPanel();
    //Change tittle name
    elements.panelTitle.innerHTML = tableTitle;
    //Fill the list
}

function removePanel(){
    clearInfoForm(elements.infobarSection);
    elements.panel.classList.remove('active');
}
function addPanel(){
    elements.panel.classList.add('active');
}

export {
    showPanel,
    removePanel,
    addPanel
}