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

function composeDropDownList (type, features, selectID){
    const idColumns = getKeyValues(features[0]).keys[0];
    const uiColumns = getKeyValues(features[0]).keys[1];
    console.log(idColumns, uiColumns);

    let optionsList = '<option value="null" disabled selected value></option>';
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
                    <input class="form-control" type="text" name="${keys[9]}" value="${s[keys[9]]}" disabled required/>
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
                <div class="vazao-list">
                    <span class="label">VAZÃO MÁXIMA (m³/h)</span>
                    <input class="form-control" type="text" name="${keys[14]}" value="${s[keys[14]]}" disabled required/>
                </div>
            </li>
            <li>
                <div class="vazao-list">
                    <span class="label">DATA OPERAÇÃO</span>
                    <input class="form-control" type="text" name="${keys[15]}" value="${s[keys[15]]}" disabled required/>
                </div>
            </li>
            <li>
                <div class="vazao-list">
                    <span class="label">DATA PERFURAÇÃO</span>
                    <input class="form-control" type="text" name="${keys[16]}" value="${s[keys[16]]}" disabled required/>
                </div>
            </li>
            <li>
                <div class="vazao-list">
                    <span class="label">BOMBA</span>
                    <input class="form-control" type="text" name="${keys[17]}" value="${s[keys[17]]}" disabled required/>
                </div>
            </li>
            <li>
                <div class="vazao-list">
                    <span class="label">HORAS DE BOMBEAMENTO</span>
                    <input class="form-control" type="text" name="${keys[18]}" value="${s[keys[18]]}" disabled required/>
                </div>
            </li>
            <li>
                <div class="vazao-list">
                    <span class="label">RELATÓRIO</span>
                    <input class="form-control" type="text" name="${keys[19]}" value="${s[keys[19]]}" required/>
                </div>
            </li>
            <li>
                <div class="vazao-list">
                    <span class="label">LICENCIAMENTO</span>
                    <input class="form-control" type="text" name="${keys[20]}" value="${s[keys[20]]}" disabled required/>
                </div>
            </li>
            <li>
                <div class="vazao-list">
                    <span class="label">OBS</span>
                    <input class="form-control" type="text" name="${keys[21]}" value="${s[keys[21]]}" disabled required/>
                </div>
            </li>
        </ul>
    `;
    return poçoInfoHTML;
}
function loadSuperfView(info){
    let keys = info.getKeys();
    let s = info.getObject();
    let superfInfoHTML = `
        <ul class="list-unstyled components info-list">
            <li>
                <input class="form-control" type="text" id="nome" name="${keys[0]}" value="${s[keys[0]]}" disabled required/>
                <p id="last-modif">Última modificação em ${s[keys[1]]} por ${s[keys[2]]}</p>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">SETOR **</span>
                    <input class="form-control" type="text" name="${keys[3]}" value="${s[keys[3]]}" disabled required/>
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">UNID. DE NEGÓCIOS **</span>
                    <input class="form-control" type="text" name="${keys[4]}" value="${s[keys[4]]}" disabled required/>
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">MUNICÍPIO **</span>
                    <input class="form-control" type="text" name="${keys[5]}" value="${s[keys[5]]}" disabled required/>
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">COORDENADAS</span>
                    <input class="form-control-nomodif" type="text" value="${s[keys[6]]}, ${s[keys[7]]}" name="coords" disabled quired/>
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">CORPO HÍDRICO</span>
                    <input class="form-control" type="text" name="${keys[8]}" value="${s[keys[8]]}" name="coords" disabled quired/>
                </div>
            </li>
            <li>
                <div class="vazao-list">
                    <span class="label">SITUAÇÃO</span>
                    <input class="form-control" type="text" name="${keys[9]}" value="${s[keys[9]]}" disabled required/>
                </div>
            </li>
            <li>
                <div class="vazao-list">
                    <span class="label">VAZÃO MÁXIMA (m³/h)</span>
                    <input class="form-control" type="text" name="${keys[10]}" value="${s[keys[10]]}" disabled required/>
                </div>
            </li>
            <li>
                <div class="vazao-list">
                    <span class="label">DATA OPERAÇÃO</span>
                    <input class="form-control" type="text" name="${keys[11]}" value="${s[keys[11]]}" disabled required/>
                </div>
            </li>
            <li>
                <div class="vazao-list">
                    <span class="label">BOMBA</span>
                    <input class="form-control" type="text" name="${keys[12]}" value="${s[keys[12]]}" disabled required/>
                </div>
            </li>
            <li>
                <div class="vazao-list">
                    <span class="label">HORAS DE BOMBEAMENTO</span>
                    <input class="form-control" type="text" name="${keys[13]}" value="${s[keys[13]]}" disabled required/>
                </div>
            </li>
            <li>
                <div class="vazao-list">
                    <span class="label">RELATÓRIO</span>
                    <input class="form-control" type="text" name="${keys[14]}" value="${s[keys[14]]}" disabled required/>
                </div>
            </li>
            <li>
                <div class="vazao-list">
                    <span class="label">LICENCIAMENTO</span>
                    <input class="form-control" type="text" name="${keys[15]}" value="${s[keys[15]]}" disabled required/>
                </div>
            </li>
            <li>
                <div class="vazao-list">
                    <span class="label">OBSERVAÇÃO</span>
                    <input class="form-control" type="text" name="${keys[16]}" value="${s[keys[16]]}" disabled required/>
                </div>
            </li>
        </ul>
    `;
    return superfInfoHTML;
}

function loadInfoForm(parent, html){
    clearInfoForm(parent);
    
    parent.insertAdjacentHTML('afterbegin', html);

    if(parent === elements.infoForm){
        const fieldName = document.querySelector('.info-list #nomeField');
        if (fieldName.value.length > 17){
            fieldName.style.fontSize = '20px';
        }
    }
}

function clearInfoForm(parent){
    const infoElement = document.querySelector(elementSelectors.infoList);
    if (infoElement){
        parent.removeChild(infoElement);
    }
}

export {
    loadPoçoView,
    loadSuperfView,
    clearInfoForm,
    loadInfoForm,
    loadSetores,
}