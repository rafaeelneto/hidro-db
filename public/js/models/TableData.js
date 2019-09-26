import * as requests from './../requests';
import {getKeyValues} from './Data';

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

    getFeaturesProperties(layer){
      
      const tableFeatures = this.tables[layer].features;

      const layerFeatures = []
      for (let i = 0; i < tableFeatures.length; i++) {
        layerFeatures.push(tableFeatures[i].properties);
      }
      return layerFeatures;
    }

    search(query, table, tableNameQuery, tableLabelQuery, labelColumn){
        //MAKE THE QUERY IN ALL THE TABLES AND RETURN THE VALUES OF KEYS AND NAMES
        let queryLower = query.toLowerCase();
        
        //FILTER VALUES TO THE MATCH ARRAY
	      let match = table.filter((value) => {
          if(value[labelColumn] === undefined){
            return false;
          }

          const valueLower = value[labelColumn].toLowerCase();
          
          if(valueLower.includes(queryLower)){
            return value;
          }else {
            return false;
          }
        });
        
        //RETURN THE LI ELEMENTS
        let elements = [];
        for (let i = 0; i < match.length; i++) {
          let val = getKeyValues(match[i]).values;
          elements.push({
            tableName: tableNameQuery,
            tableLabel: tableLabelQuery,
            id: val[0],
            label: val[1]
          });
        }
        return elements;
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