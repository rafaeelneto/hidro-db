import {loadPoçoView, loadSuperfView, loadOutorView, loadInfoForm, clearInfoForm} from './../views/infoView';
import {elements, elementSelectors, breakLineOnSpace, formatDateText, nullVeryfier} from './../views/Base';
import {linkLoader} from './infoView';


/*
manuten_id: "1"
data_previsao: null
data_realizada: "2019-10-01T03:00:00.000Z"
serviço_realiz: "Limpeza do poço"
obs: "Poço produzindo areia fina a muito fina no arranque da bomba (instalada a 18m de profundidade) dimunuindo após 5 min"
link: null
executor: "Carlos Oliveira/Tatu Perfurações"
orçamento: null
*/

let listManuten = null;

function showCronograma(list){
    removeCronogramaPanel();
    listManuten = list;
    let listItems = '';
    if(list !== undefined){
        for (let i = 0; i < list.length; i++) {
            const element = list[i];
            
            element.serviço_realiz = breakLineOnSpace(element.serviço_realiz, 25);
            
            let label = `
            <h6>
                ${element.serviço_realiz}
            </h6>
            `;
    
            let situaçao;
    
            if (element.data_realizada){
                situaçao = 'Finalizado';
            }else if (new Date(element.data_previsao) > new Date()){
                situaçao = 'Previsto';
            }else{
                situaçao = 'Atrasado'
            }
    
            const datas = `
                <p><strong>Realizado em:</strong> ${formatDateText(element.data_realizada)}</p>
                <p><strong>Previsto para:</strong> ${formatDateText(element.data_previsao)}</p>
            `;
    
            const newItem = `
            <li id="manutenID${element.manuten_id}" class = '${situaçao.toLowerCase()}'>
                ${label}
                <small>${situaçao}</small>
                ${datas}
            </li>`;
    
            listItems = listItems + newItem;
        }
    }

    if(list.length === 0 || list === undefined){
        listItems = `
            <li>
                <h6>SEM CRONOGRAMA</h6>
            </li>
        `;
    }

    const listHTML = `
        <ul class="list-unstyled list-manutençao">
            ${listItems}
        </ul>
    `;

    const panelHTML = `
        <div class="manutençao-poços active shadow">
            <h5>Cronograma de manutenção</h5>
            ${listHTML}
        </div>
    `;

    elements.infoSideClass.insertAdjacentHTML('afterend', panelHTML);
    elements.manutençãoBtn.classList.add('pressed');

    const listItens = document.querySelectorAll(`${elementSelectors.manutençaoList} li`);
    listItens.forEach((element, index) => {
        element.addEventListener('click', () => {
            if ((manutenAtivo === element.id)){
                collapseManuten(manutenAtivo);
            }else{
                collapseManuten(manutenAtivo);
                expandManuten(element.id, index);
            }
        });
    });
}

let manutenAtivo;
let manutenAtivoIndex;

function expandManuten(elementID, index){
    const item = document.getElementById(`${elementID}`);
    manutenAtivo = elementID;
    manutenAtivoIndex = index;

    let element = listManuten[manutenAtivoIndex];

    const info = `
    <div class="${elementSelectors.manutençaoInfo} collapse">
        <p><strong>Executor:</strong> ${nullVeryfier(element.executor)}</p>
        <p><strong>Obs:</strong> ${nullVeryfier(element.obs)}</p>
        <p><strong>Relatório:</strong>${linkLoader(element.link)}</p>
    </div>
    `;

    item.insertAdjacentHTML('beforeend', info);
    $('.collapse').collapse('show');
}

function collapseManuten(elementID){
    const item = document.getElementById(`${elementID}`);
    const infoDiv = document.querySelector(`.${elementSelectors.manutençaoInfo}`);

    if(infoDiv){
        $('.collapse').collapse('hide');
        item.removeChild(infoDiv);
        manutenAtivo = null;
        manutenAtivoIndex = null;
    }
}

function removeCronogramaPanel(){
    const manutençaoDiv = document.querySelector(elementSelectors.manutençaoPanel);
    if (manutençaoDiv){
        (document.querySelector('.wrapper')).removeChild(manutençaoDiv);
    }
    elements.manutençãoBtn.classList.remove('pressed');
}

export {
    showCronograma,
    removeCronogramaPanel
}