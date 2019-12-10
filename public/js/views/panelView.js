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
            classIdentf = `active`;
        }
        const newItem = `
        <li class="panel-item i${i} ${classIdentf}">
            <a href="#${identifHash}=${element[0]}">${element[1]}</a>
        </li>`;

        listItems = listItems + newItem;
    }

    const formFilter = `<input type="text" id="filterInput" placeholder="Filtrar resultados">`

    const list = `
    <ul class="list-unstyled list-reg">
        ${listItems}
    </ul>
    `;

    clearList();

    elements.panel.classList.add('active');
    
    elements.sectionContainer.insertAdjacentHTML('beforebegin', formFilter);
    elements.sectionContainer.insertAdjacentHTML('afterbegin', list);

    document.getElementById(elementSelectors.filterInput).addEventListener('input', filterList);
}

function clearList(){
    const list = document.querySelector(elementSelectors.listRegisters);
    const filterInput = document.getElementById(elementSelectors.filterInput);
    if (list){
        (elements.sectionContainer).removeChild(list);
        (elements.sectionContainer).parentElement.removeChild(filterInput);
    }
}

//FILTER FUNCTION

function filterList() {
	// Declare variables
	const filter = document.getElementById(elementSelectors.filterInput).value.toLowerCase();
	
	let a, i, txtValue;

	const ul = document.querySelector(elementSelectors.listRegisters);

	const li = ul.querySelectorAll(elementSelectors.panelListItem);
  
	// Loop through all list items, and hide those who don't match the search query
	for (i = 0; i < li.length; i++) {
	  a = li[i].getElementsByTagName("a")[0];
	  txtValue = a.textContent || a.innerText;
	  if (txtValue.toLowerCase().indexOf(filter) > -1) {
		li[i].style.display = "";
	  } else {
		li[i].style.display = "none";
	  }
	}
}

function removePanel(){
    clearList();
    clearInfoForm(elements.panelForm);
    elements.panel.classList.remove('active');
    elements.aboutPanel.classList.remove('active');
}

export {
    showPanel,
    removePanel,
    filterList
}