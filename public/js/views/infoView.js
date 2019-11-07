import {elementSelectors, nullVeryfier, elements, formatData2Form, formatDateText, formatDate} from './Base';
import Info from './../models/Info';
import {tablesKeys, getKeyValues} from './../models/Data';

const situaçoesValues = ['Ativo', 'Inativo', 'Em construção', 'A construir'];
const licenciamentoValues = ['Outorgado', 'Em processo', 'Sem outorga'];

let tableData;

function dataLoader(key, date){
    console.log(date);
    if (date == '-' || date === null || date === undefined){
        return `<input class="form-control" type="text" name="${key}" value="-" disabled required/>`
    }else{
        return `<input class="form-control" type="date" name="${key}" value="${formatDate(date)}" disabled required/>`
    }
}

function linkLoader(link){
    if(link !== '-'){
        return `
        <a href="${link}" target="_blank">
            Link do arquivo
        </a>
        `;
    }else{
        return `
        <h6>
            Não disponível
        </h6>
        `;
    }
    
}

function loadSetores(selectID, table){
    const setores = table.features;

    let features = []

    for (let i = 0; i < setores.length; i++) {
        features.push(setores[i].properties);
    }
    return composeDropDownList('setor_id', features, selectID);
}

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
    <select class = "browser-default custom-select" name="${type}" disabled>
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
        let selectString = '';
        if (id == selectID){
            selectString = 'selected'
        }
        optionsList = optionsList + (`<option value="${id}" ${selectString}>${value}</option>`);
    }

    let dropList = `
    <select class = "browser-default custom-select" name="${type}" disabled>
        ${optionsList}
    </select>
    `;

    return dropList;
}

function composeMMJoinList(keys, tableName, keyColumn, propertyColumn){

    let listItems = '';
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i][keyColumn];

        const newItem = `
        <li>
            <a class="d-flex justify-content-between align-items-center" href="#${tableName}=${key}">
                ${tableData.searchByID(tableName, keyColumn, key, propertyColumn)}
            </a>
        </li>`;

        listItems = listItems + newItem;
    }

    /*
    if(keys.length === 0){
        listItems = `
            <li>
                <a class="d-flex justify-content-between align-items-center">
                    -
                </a>
            </li>
        `;
    }
    */

    return `
        <ul class="list-unstyled join-list">
            ${listItems}
        </ul>
    `;
}

function composeM1JoinList(key, tableName, keyColumn, propertyColumn){
    const table = tableData.tables[tableName];

    if(table === undefined){
        return `
            <ul class="list-unstyled join-list">
            </ul>
        `;
    }

    let link = ''
    
    for (let i = 0; i < table.length; i++) {
        let id = table[i][keyColumn];
        let value = table[i][propertyColumn];
        if(id == key){
            link = `
            <a class="d-flex justify-content-between align-items-center" href="#${tableName}=${key}">
                ${value}
            </a>`;
        }
    }
    
    return link;
}

function compose1MJoinList(key, tableName, keyColumn, propertyColumn, fKeyColumn){
    const table = tableData.tables[tableName];

    if(table === undefined){
        return `
            <ul class="list-unstyled join-list">
            </ul>
        `;
    }

    let listItems = '';
    for (let i = 0; i < table.length; i++) {
        let id = table[i][keyColumn];
        let fId = table[i][fKeyColumn];
        let value = table[i][propertyColumn];
        if(fId == key){
            const newItem = `
            <li>
                <a class="d-flex justify-content-between align-items-center" href="#${tableName}=${id}">
                    ${value}
                </a>
            </li>`;
            listItems = listItems + newItem;
        }

    }

    return `
        <ul class="list-unstyled join-list">
            ${listItems}
        </ul>
    `;
}

function composeVazoesList(tableVazoes){
    let listItems = '';
    if (tableVazoes.length !== 0){
        for (let i = tableVazoes.length - 1; i > (tableVazoes.length - 6); i--) {
            const vazao = tableVazoes[i];
    
            const newItem = `
            <li>
                <h6 class="d-flex justify-content-start align-items-center">
                    ${vazao['vazao']} m³/h em ${(formatDateText(vazao['data_medida']))}
                </h6>
            </li>`;
    
            listItems = listItems + newItem;
            if(i === 0){
                break;
            }
        }
    }
    return `
        <ul class="list-unstyled join-list">
            ${listItems}
        </ul>
    `;
}

function loadPoçoView(info, tableDat){
    const tables = tableDat.tables;
    let keys = info.keys;
    let s = info.s;
    tableData = tableDat;
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
                    <span class="label">VAZÕES</span>
                    ${composeVazoesList(info.joins[2])}
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
                    ${dataLoader(keys[15], s[keys[15]])}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">DATA PERFURAÇÃO</span>
                    ${dataLoader(keys[16], s[keys[16]])}
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
                    ${linkLoader(s[keys[19]])}
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
                    <span class="label">OUTORGAS</span>
                    ${composeMMJoinList(info.joins[0], tablesKeys.outorgas, 'outorga_id', 'num_outorga')}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">PROCESSOS</span>
                    ${composeMMJoinList(info.joins[1], tablesKeys.processos, 'processo_id', 'num_processo')}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">OBS</span>
                    <textarea class="form-control" name="${keys[21]}" disabled>${s[keys[21]]}</textarea>
                </div>
            </li>
        </ul>
    `;
    return poçoInfoHTML;
}

function loadSuperfView(info, tableDat){
    const tables = tableDat.tables;
    let keys = info.keys;
    let s = info.s;
    tableData = tableDat;
    let superfInfoHTML = `
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
                    ${dataLoader(keys[12], s[keys[12]])}
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
                    ${linkLoader(s[keys[15]])}
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
                    <span class="label">OUTORGAS</span>
                    ${composeMMJoinList(info.joins[0], tablesKeys.outorgas, 'outorga_id', 'num_outorga')}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">PROCESSOS</span>
                    ${composeMMJoinList(info.joins[1], tablesKeys.processos, 'processo_id', 'num_processo')}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">OBSERVAÇÃO</span>
                    <textarea class="form-control" name="${keys[17]}" disabled>${s[keys[17]]}</textarea>
                </div>
            </li>
        </ul>
    `;
    return superfInfoHTML;
}

function loadOutorView(info, tableDat){
    const tables = tableDat.tables;
    let keys = info.keys;
    let s = info.s;
    tableData = tableDat;
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
                    ${dataLoader(keys[3], s[keys[3]])}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">VALIDADE</span>
                    ${dataLoader(keys[4], s[keys[4]])}
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
                    ${linkLoader(s[keys[7]])}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">ORGÃO</span>
                    ${composeDropDownList(keys[8], tables[tablesKeys.orgaos], s[keys[8]])}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">OBSERVAÇÃO</span>
                    <textarea class="form-control" name="${keys[9]}" disabled>${s[keys[9]]}</textarea>
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">UNID. DE NEGÓCIOS</span>
                    ${composeDropDownList(keys[10], tables[tablesKeys.uns], s[keys[10]])}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">MUNICÍPIO</span>
                    ${composeDropDownList(keys[11], tables[tablesKeys.municipios], s[keys[11]])}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">PONTOS OUTORGADOS</span>
                    ${composeMMJoinList(info.joins[0], tablesKeys.capSuperf, 'super_id', 'nome')}
                    ${composeMMJoinList(info.joins[1], tablesKeys.poços, 'poço_id', 'nome')}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">PROCESSOS</span>
                    ${compose1MJoinList(s[keys[0]], tablesKeys.notificaçoes, 'processo_id', 'num_processo', 'outorga_id')}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">LICENÇAS</span>
                    ${composeM1JoinList(s[keys[12]], tablesKeys.processos, 'licen_id', 'num_licen')}
                </div>
            </li>
        </ul>
    `;
    return outrInfoHTML;
}

function loadProcessoView(info, tableDat){
    const tables = tableDat.tables;
    let keys = info.keys;
    let s = info.s;
    tableData = tableDat;
    let processoInfoHTML = `
        <ul class="list-unstyled components info-list">
            <li>
                <input class="form-control" type="text" id="nomeField" name="${keys[1]}" value="${s[keys[1]]}" disabled required/>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">OBJETO DO PROCESSO</span>
                    <input class="form-control" type="text" name="${keys[2]}" value="${s[keys[2]]}" disabled required/>
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">DESCRIÇÃO</span>
                    <input class="form-control" type="text" name="${keys[3]}" value="${s[keys[3]]}" disabled required/>
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">DATA DE ENTRADA</span>
                    ${dataLoader(keys[4], s[keys[4]])}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">ORGÃO</span>
                    ${composeDropDownList(keys[5], tables[tablesKeys.orgaos], s[keys[5]])}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">SITUAÇÃO</span>
                    <input class="form-control" type="text" name="${keys[6]}" value="${s[keys[6]]}" disabled required/>
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">UNID. DE NEGÓCIOS</span>
                    ${composeDropDownList(keys[7], tables[tablesKeys.uns], s[keys[7]])}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">MUNICÍPIO</span>
                    ${composeDropDownList(keys[8], tables[tablesKeys.municipios], s[keys[8]])}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">PONTOS SOB PROCESSO</span>
                    ${composeMMJoinList(info.joins[0], tablesKeys.capSuperf, 'super_id', 'nome')}
                    ${composeMMJoinList(info.joins[1], tablesKeys.poços, 'poço_id', 'nome')}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">NOTIFICAÇÕES</span>
                    ${compose1MJoinList(s[keys[0]], tablesKeys.notificaçoes, 'notif_id', 'num_notif', 'processo_id')}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">OUTORGAS</span>
                    ${composeM1JoinList(keys[9], tablesKeys.outorgas, 'outorga_id', 'num_outorga')}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">LICENÇAS</span>
                    ${composeM1JoinList(keys[10], tablesKeys.licenças, 'licen_id', 'num_licen')}
                </div>
            </li>
        </ul>
    `;
    return processoInfoHTML;
}

function loadNotifView(info, tableDat){
    const tables = tableDat.tables;
    tableData = tableDat;

    let keys = info.keys;
    let s = info.s;
    let processoInfoHTML = `
        <ul class="list-unstyled components info-list">
            <li>
                <input class="form-control" type="text" id="nomeField" name="${keys[1]}" value="${s[keys[1]]}" disabled required/>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">TIPO DE NOTA</span>
                    <input class="form-control" type="text" name="${keys[2]}" value="${s[keys[2]]}" disabled required/>
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">PRAZO</span>
                    ${dataLoader(keys[3], s[keys[3]])}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">DATA DE EMISSÃO</span>
                    ${dataLoader(keys[4], s[keys[4]])}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">DATA DE RECEBIMENTO</span>
                    ${dataLoader(keys[5], s[keys[5]])}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">DATA DA RESPOSTA</span>
                    ${dataLoader(keys[6], s[keys[6]])}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">VIA DE RECEBIMENTO</span>
                    <input class="form-control" type="text" name="${keys[7]}" value="${s[keys[7]]}" disabled required/>
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">CONDICIONANTES</span>
                    <textarea class="form-control" name="${keys[8]}">${s[keys[8]]}</textarea>
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">SITUAÇÃO</span>
                    ${composeDropDownList(keys[9], tables[tablesKeys.situaçoes], s[keys[9]])}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">OFÍCIO</span>
                    ${composeM1JoinList(s[keys[10]], tablesKeys.oficios, 'oficio_id', 'num_oficio')}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">OBSERVAÇÕES</span>
                    <textarea class="form-control" name="${keys[11]}" disabled>${s[keys[11]]}</textarea>
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">PROCESSOS</span>
                    ${composeM1JoinList(s[keys[12]], tablesKeys.processos, 'processo_id', 'num_processo')}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">ORGÃO</span>
                    ${composeDropDownList(keys[13], tables[tablesKeys.orgaos], s[keys[13]])}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">LICENÇAS</span>
                    ${composeM1JoinList(s[keys[14]], tablesKeys.licenças, 'licen_id', 'num_licen')}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">AUTOS DE INFRAÇÃO</span>
                    ${compose1MJoinList(s[keys[0]], tablesKeys.autosInfraçao, 'autoifr_id', 'num_infra', 'notificaçao_id')}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">SETOR</span>
                    ${composeM1JoinList(s[keys[15]], tablesKeys.setoresSedes, 'setor_id', 'nome')}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">MUNICÍPIO</span>
                    ${composeDropDownList(keys[16], tables[tablesKeys.municipios], s[keys[16]])}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">UNID. DE NEGÓCIOS</span>
                    ${composeDropDownList(keys[17], tables[tablesKeys.uns], s[keys[17]])}
                </div>
            </li>
        </ul>
    `;
    return processoInfoHTML;
}

function loadLicenView(info, tableDat){
    const tables = tableDat.tables;
    tableData = tableDat;

    let keys = info.keys;
    let s = info.s;
    let processoInfoHTML = `
        <ul class="list-unstyled components info-list">
            <li>
                <input class="form-control" type="text" id="nomeField" name="${keys[1]}" value="${s[keys[1]]}" disabled required/>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">TIPOLOGIA</span>
                    <input class="form-control" type="text" name="${keys[2]}" value="${s[keys[2]]}" disabled required/>
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">DATA DE ENTRADA</span>
                    ${dataLoader(keys[3], s[keys[3]])}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">VALIDADE</span>
                    ${dataLoader(keys[4], s[keys[4]])}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">ATIVIDADE</span>
                    <input class="form-control" type="text" name="${keys[5]}" value="${s[keys[5]]}" disabled required/>
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">ARQUIVO DA LICENÇA</span>
                    ${linkLoader(s[keys[6]])}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">ORGÃO</span>
                    ${composeDropDownList(keys[7], tables[tablesKeys.orgaos], s[keys[7]])}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">NOTIFICAÇÕES</span>
                    ${compose1MJoinList(s[keys[0]], tablesKeys.notificaçoes, 'notif_id', 'num_notif', 'licen_id')}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">OUTORGAS</span>
                    ${compose1MJoinList(s[keys[0]], tablesKeys.outorgas, 'outorga_id', 'num_outorga', 'licen_id')}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">PROCESSOS</span>
                    ${compose1MJoinList(s[keys[0]], tablesKeys.processos, 'processo_id', 'num_processo', 'licen_id')}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">AUTOS DE INFRAÇÃO</span>
                    ${compose1MJoinList(s[keys[0]], tablesKeys.autosInfraçao, 'autoifr_id', 'num_infra', 'licen_id')}
                </div>
            </li>
        </ul>
    `;
    return processoInfoHTML;
}

function loadAutoView(info, tableDat){
    const tables = tableDat.tables;
    tableData = tableDat;

    let keys = info.keys;
    console.log(keys);
    let s = info.s;
    let processoInfoHTML = `
        <ul class="list-unstyled components info-list">
            <li>
                <input class="form-control" type="text" id="nomeField" name="${keys[1]}" value="${s[keys[1]]}" disabled required/>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">OBJETO AUTOADO</span>
                    <input class="form-control" type="text" name="${keys[2]}" value="${s[keys[2]]}" disabled required/>
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">PROCESSO</span>
                    ${composeM1JoinList(s[keys[3]], tablesKeys.processos, 'processo_id', 'num_processo')}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">NOTIFICAÇÕES</span>
                    ${composeM1JoinList(s[keys[4]], tablesKeys.notificaçoes, 'notif_id', 'num_notif')}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">SITUAÇÃO</span>
                    ${dataLoader(keys[5], s[keys[5]])}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">DATA DE EMISSÃO</span>
                    ${dataLoader(keys[6], s[keys[6]])}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">DATA DE DEFESA</span>
                    ${dataLoader(keys[7], s[keys[7]])}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">PRAZO</span>
                    ${dataLoader(keys[8], s[keys[8]])}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">ORGÃO</span>
                    ${composeDropDownList(keys[9], tables[tablesKeys.orgaos], s[keys[9]])}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">SETOR RESPONSÁVEL</span>
                    <input class="form-control" type="text" name="${keys[10]}" value="${s[keys[10]]}" disabled required/>
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">OFÍCIOS</span>
                    ${composeM1JoinList(s[keys[11]], tablesKeys.oficios, 'oficio_id', 'num_oficio')}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">LICENÇAS</span>
                    ${composeM1JoinList(s[keys[12]], tablesKeys.licenças, 'licen_id', 'num_licen')}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">MUNICÍPIO</span>
                    ${composeDropDownList(keys[13], tables[tablesKeys.municipios], s[keys[13]])}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">UNID. DE NEGÓCIOS</span>
                    ${composeDropDownList(keys[14], tables[tablesKeys.uns], s[keys[14]])}
                </div>
            </li>
            <li>
                <div class="form-group">
                    <span class="label">SETOR</span>
                    ${loadSetores(s[keys[15]], tables[tablesKeys.setoresSedes])}
                </div>
            </li>
        </ul>
    `;
    return processoInfoHTML;
}

function loadInfoForm(identif, parent, htmlList, tableName, key){

    const htmlForm = `
    <div class="info-group${identif}">
        <div class="d-flex justify-content-start align-items-center info-form-group">
            <form id="info-form" onsubmit="return submitInfo()">
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
    loadLicenView,
    loadAutoView,
    loadProcessoView,
    loadNotifView,
    clearInfoForm,
    loadInfoForm,
    loadSetores,
}