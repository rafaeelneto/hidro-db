import {elementSelectors, nullVeryfier, elements} from './Base';
import Info from './../models/Info';
import {tablesKeys, getKeyValues} from './../models/Data';

function loadSetores(selectID, table){
    const setores = table.features;

    let features = []

    for (let i = 0; i < setores.length; i++) {
        features.push(setores[i].properties);
    }
    return composeDropDownList('setor_id', features, selectID);
}

const situaçoesValues = ['Ativo', 'Inativo', 'Em construção'];
const licenciamentoValues = ['Outorgado', 'Em processo', 'Sem outorga'];


function loadSitus(type, list, selected){
    let optionsList = '<option value="-" disabled selected value></option>';
    for (let i = 0; i < list.length; i++) {
        let situ = list[i];
        let selectString = ''
        if (situ === selected){
            selectString = 'selected'
        }
        optionsList = optionsList + (`<option value="${situ}" ${selectString}>${situ}</option>`);
    }

    let dropList = `
    <select class = "browser-default custom-select" name="${type}">
        ${optionsList}
    </select>
    `;
    return dropList;
}

function composeDropDownList (type, features, selectID){
    const idColumns = getKeyValues(features[0]).keys[0];
    const uiColumns = getKeyValues(features[0]).keys[1];

    let optionsList = '<option value="-" disabled selected value></option>';
    for (let i = 0; i < features.length; i++) {
        let id = features[i][idColumns];
        let value = features[i][uiColumns];
        let selectString = ''
        if (id === selectID){
            selectString = 'selected'
        }
        optionsList = optionsList + (`<option value="${id}" ${selectString}>${value}</option>`);
    }

    let dropList = `
    <select class = "browser-default custom-select" name="${type}">
        ${optionsList}
    </select>
    `;

    return dropList;
}

function loadPoçoView(info, tables){
    let keys = info.keys;
    let s = info.s;
    console.log(keys);
    let poçoInfoHTML = `
        <ul class="list-unstyled components info-list">
            <li>
                <input class="form-control" type="text" id="nomeField" name="${keys[1]}" value="${s[keys[1]]}" disabled required/>
                <p id="last-modif">Última modificação em ${s[keys[2]]} por ${s[keys[3]]}</p>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">SETOR</span>
                    ${loadSetores(s[keys[4]], tables[tablesKeys.setoresSedes])}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">UNID. DE NEGÓCIOS</span>
                    ${composeDropDownList(keys[5], tables[tablesKeys.uns], s[keys[5]])}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">MUNICÍPIO</span>
                    ${composeDropDownList(keys[6], tables[tablesKeys.municipios], s[keys[6]])}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">COORDENADAS</span>
                    <input class="form-control-nomodif" type="text" value="${s[keys[7]]}, ${s[keys[8]]}" name="coords" disabled/>
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">SITUAÇÃO</span>
                    ${loadSitus(keys[9], situaçoesValues, s[keys[9]])}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">PROFUNDIDADE (m)</span>
                    <input class="form-control" type="text" name="${keys[10]}" value="${s[keys[10]]}" disabled required/>
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">NÍVEL ESTÁTICO</span>
                    <input class="form-control" type="text" name="${keys[11]}" value="${s[keys[11]]}" disabled required/>
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">NÍVEL DINÂMICO</span>
                    <input class="form-control" type="text" name="${keys[12]}" value="${s[keys[12]]}" disabled required/>
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">REVESTIMENTO</span>
                    <input class="form-control" type="text" name="${keys[13]}" value="${s[keys[13]]}" disabled required/>
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">VAZÃO MÁXIMA (m³/h)</span>
                    <input class="form-control" type="text" name="${keys[14]}" value="${s[keys[14]]}" disabled required/>
                </div>
            </li>
            <li>
                <div class=form-groupt">
                    <span class="label">DATA OPERAÇÃO</span>
                    <input class="form-control" type="date" name="${keys[15]}" value="${s[keys[15]]}" disabled required/>
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">DATA PERFURAÇÃO</span>
                    <input class="form-control" type="date" name="${keys[16]}" value="${s[keys[16]]}" disabled required/>
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">BOMBA</span>
                    <input class="form-control" type="text" name="${keys[17]}" value="${s[keys[17]]}" disabled required/>
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">HORAS DE BOMBEAMENTO</span>
                    <input class="form-control" type="text" name="${keys[18]}" value="${s[keys[18]]}" disabled required/>
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">RELATÓRIO</span>
                    <textarea class="form-control" name="${keys[19]}">${s[keys[19]]}</textarea>
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">LICENCIAMENTO</span>
                    ${loadSitus(keys[20], licenciamentoValues, s[keys[20]])}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">OBS</span>
                    <textarea class="form-control" name="${keys[21]}">${s[keys[21]]}</textarea>
                </div>
            </li>
        </ul>
    `;
    return poçoInfoHTML;
}
function loadSuperfView(info, tables){
    let keys = info.keys;
    let s = info.s;
    let superfInfoHTML = `
        <ul class="list-unstyled components info-list">
            <li>
                <input class="form-control" type="text" id="nome" name="${keys[1]}" value="${s[keys[1]]}" disabled required/>
                <p id="last-modif">Última modificação em ${s[keys[2]]} por ${s[keys[3]]}</p>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">SETOR</span>
                    ${loadSetores(s[keys[4]], tables[tablesKeys.setoresSedes])}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">UNID. DE NEGÓCIOS</span>
                    ${composeDropDownList(keys[5], tables[tablesKeys.uns], s[keys[5]])}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">MUNICÍPIO</span>
                    ${composeDropDownList(keys[6], tables[tablesKeys.municipios], s[keys[6]])}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">COORDENADAS</span>
                    <input class="form-control-nomodif" type="text" value="${s[keys[7]]}, ${s[keys[8]]}" name="coords" disabled quired/>
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">CORPO HÍDRICO</span>
                    <input class="form-control" type="text" name="${keys[9]}" value="${s[keys[9]]}" name="coords" disabled quired/>
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">SITUAÇÃO</span>
                    ${loadSitus(keys[10], situaçoesValues, s[keys[10]])}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">VAZÃO MÁXIMA (m³/h)</span>
                    <input class="form-control" type="date" name="${keys[11]}" value="${s[keys[11]]}" disabled required/>
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">DATA OPERAÇÃO</span>
                    <input class="form-control" type="date" name="${keys[12]}" value="${s[keys[12]]}" disabled required/>
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">BOMBA</span>
                    <input class="form-control" type="text" name="${keys[13]}" value="${s[keys[13]]}" disabled required/>
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">HORAS DE BOMBEAMENTO</span>
                    <input class="form-control" type="text" name="${keys[14]}" value="${s[keys[14]]}" disabled required/>
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">RELATÓRIO</span>
                    <textarea class="form-control" name="${keys[15]}">${s[keys[15]]}</textarea>
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">LICENCIAMENTO</span>
                    ${loadSitus(keys[16], licenciamentoValues, s[keys[16]])}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">OBSERVAÇÃO</span>
                    <textarea class="form-control" name="${keys[17]}">${s[keys[17]]}</textarea>
                </div>
            </li>
        </ul>
    `;
    return superfInfoHTML;
}
function loadOutorView(info, tables){
    let keys = info.keys;
    let s = info.s;
    let outrInfoHTML = `
        <ul class="list-unstyled components info-list">
            <li>
                <input class="form-control" type="text" id="nomeField" name="${keys[1]}" value="${s[keys[1]]}" disabled required/>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">TIPO</span>
                    <input class="form-control" type="text" name="${keys[2]}" value="${s[keys[2]]}" name="coords" disabled quired/>
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">DATA DE ENTRADA</span>
                    <input class="form-control" type="text" name="${keys[3]}" value="${s[keys[3]]}" disabled required/>
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">VALIDADE</span>
                    <input class="form-control" type="text" name="${keys[4]}" value="${s[keys[4]]}" disabled required/>
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">RESPONSÁVEL</span>
                    <input class="form-control" type="text" name="${keys[5]}" value="${s[keys[5]]}" disabled required/>
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">TIPO DE CAPTAÇÃO</span>
                    <input class="form-control" type="text" name="${keys[6]}" value="${s[keys[6]]}" disabled required/>
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">LINK DA OUTORGA</span>
                    <textarea class="form-control" name="${keys[7]}">${s[keys[7]]}</textarea>
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">ORGÃO</span>
                    ${loadSitus(keys[8], situaçoesValues, s[keys[8]])}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">TIPO DE CAPTAÇÃO</span>
                    <input class="form-control" type="text" name="${keys[9]}" value="${s[keys[9]]}" disabled required/>
                </div>
            </li>

            <li>
                <div class="form-group">
                    <span class="label">OBSERVAÇÃO</span>
                    <textarea class="form-control" name="${keys[10]}">${s[keys[10]]}</textarea>
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">UNID. DE NEGÓCIOS</span>
                    ${composeDropDownList(keys[11], tables[tablesKeys.uns], s[keys[11]])}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">MUNICÍPIO</span>
                    ${composeDropDownList(keys[12], tables[tablesKeys.municipios], s[keys[12]])}
                </div>
            </li>
        </ul>
    `;
    return outrInfoHTML;
}

function loadInfoForm(identif, parent, htmlList, tableName, key){

    const htmlForm = `
    <div class="info-group${identif}">
        <div class="d-flex justify-content-start align-items-center info-form-group">
            <form id="info-form-${tableName}-${key}" onsubmit="return submitInfo()">
                ${htmlList}
            </form>
        </div>
    </div>
    `;

    clearInfoForm(parent, identif);
    
    parent.insertAdjacentHTML('afterbegin', htmlForm);

    if(parent === elements.infobarSection){
        const fieldName = document.querySelector('#nomeField');
        if (fieldName.value.length > 17){
            fieldName.style.fontSize = '20px';
        }
    }
}

function clearInfoForm(parent, identif){
    const infoElement = document.querySelector(elementSelectors.infoGroup + identif);
    if (infoElement){
        parent.removeChild(infoElement);
    }
}

export {
    loadPoçoView,
    loadSuperfView,
    loadOutorView,
    clearInfoForm,
    loadInfoForm,
    loadSetores,
}