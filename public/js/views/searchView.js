import {loadPoçoView, loadSuperfView, loadOutorView, loadInfoForm, clearInfoForm} from './../views/infoView';
import {elements, elementSelectors, breakLineOnSpace} from './../views/Base';

function showResults(list){
    clearList();
    elements.resultDiv.classList.add('active');

    let listItems = '';
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        
        element.label = breakLineOnSpace(element.label, 25);
        
        let label = `
        <div class="d-block">
            ${element.label}
        </div>
        `;

        if (element.auxLabel !== undefined || element.auxLabel == ''){
            element.auxLabel = breakLineOnSpace(element.auxLabel, 30);
            label = `
            <div class="d-block">
                ${element.label}
                <div class="aux-label">${element.auxLabel}</div>
            </div>
            `
        }

        const newItem = `
        <li class = 'result-item i${i}'>
            <a class="d-flex justify-content-between align-items-center" href="#${element.tableName}=${element.id}">
                ${label}
                <small>${element.tableLabel}</small>
            </a>
        </li>`;

        listItems = listItems + newItem;
    }

    if(list.length === 0){
        listItems = `
            <li>
                <a class="d-flex justify-content-between align-items-center">
                    SEM RESULTADOS
                </a>
            </li>
        `;
    }

    const listHTML = `
    <ul class="result-list list-unstyled flex-grow-1">
        ${listItems}
    </ul>
    `;
    
    elements.resultDiv.insertAdjacentHTML('afterbegin', listHTML);
}

function clearList(){
    const list = document.querySelector(elementSelectors.listResults);
    if (list){
        (elements.resultDiv).removeChild(list);
    }
}


function removeResults(){
     elements.resultDiv.classList.remove('active');
     elements.cleanSearchBox.classList.remove('active');
<<<<<<< HEAD
<<<<<<< HEAD
     elements.searchInput.value = '';
=======
>>>>>>> development
=======
>>>>>>> 04e4454e0a058e7e70fd60aa3f096e550d062653
}

export {
    showResults,
    removeResults
}