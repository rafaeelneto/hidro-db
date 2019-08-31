import * as requests from './../requests';
import getKeysValues from './Data';

export default class TableData {
    
    constructor(){
    }

    async loadAll(){
        const tables = await requests.makeSimpleGetRequest(requests.dashboardBase, `/all` );
        this.tables = tables;
    }

    async update(){
        //UPDATE A FEATURE AND RELOAD INFOS
    }

    async searchAll(query){
        //CREATE A ARRAY TO BOND ALL RESULTS

        //MAKE THE QUERY IN ALL THE TABLES AND RETURN THE VALUES OF KEYS AND NAMES

        //SEARCH GEOCODER AND PUT RESULTS ON THE WEB

        //RETURN THE ARRAY
    }

    //console.log(tableData.searchByID(tablesKeys.uns, 'un_id', 2, 'nome'));
    searchByID(table, key, queryID, property){
        let s = this.tables[table];
        if(s.properties){
            s = s.properties;
        }
        for(let i in s) {
            let id = s[i][key];
            if (id === queryID){
                return s[i][property];
            }
        }
    }
}