import {loadPoçoView, loadSuperfView, loadOutorView, loadInfoForm, clearInfoForm} from './../views/infoView';
import {elements, elementSelectors} from './../views/Base';

function showPanel(tableTitle, values, identifHash, id){
    //Change tittle name
    elements.panelTitle.innerHTML = tableTitle;
    //Fill the list
    let listItems = '';
    for (let i = 0; i < values.length; i++) {
        const element = values[i];
        let classIdentf = '';
        if(id == element[0]){
            classIdentf = `class="active"`;
        }
        const newItem = `
        <li ${classIdentf}>
            <a href="#${identifHash}=${element[0]}">${element[1]}</a>
        </li>`;

        listItems = listItems + newItem;
    }

    const list = `
    <ul class="list-unstyled list-reg">
        ${listItems}
    </ul>
    `;

    clearList();

    elements.panel.classList.add('active');
    
    elements.sectionContainer.insertAdjacentHTML('afterbegin', list);
}

function clearList(){
    const list = document.querySelector(elementSelectors.listRegisters);
    if (list){
        (elements.sectionContainer).removeChild(list);
    }
}

function removePanel(){
    clearInfoForm(elements.panelForm);
    clearList();
    elements.panel.classList.remove('active');
}

export {
    showPanel,
    removePanel
}