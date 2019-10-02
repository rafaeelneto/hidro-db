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

      const featuresProperties = [];

      for (let i = 0; i < tableFeatures.length; i++) {
        featuresProperties.push(tableFeatures[i].properties);
      }

      return featuresProperties;
    }
    
    getSpatialProperties(layer, valueID){
      const tableFeatures = this.tables[layer].features;
      const featuresProperties = this.getFeaturesProperties(layer);

      let key, latLng;

      for (let i = 0; i < featuresProperties.length; i++) {
        const element = featuresProperties[i];
        const keyValues = getKeyValues(element);
        key = keyValues.keys[0];
        if(keyValues.values[0] == valueID){
          const coord = tableFeatures[i].geometry.coordinates;
          latLng = [
            {
              lat: coord[1],
              lng: coord[0]
            }
          ]
        }
      }

      console.log(latLng);

      return {
        latLng: latLng,
        key: key,
        valueID: valueID
      }
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