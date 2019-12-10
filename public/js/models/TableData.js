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

      return {
        latLng: latLng,
        key: key,
        valueID: valueID
      }
    }

    search(query, table, tableNameQuery, tableLabelQuery, labelColumn, auxColumn){
        //MAKE THE QUERY IN ALL THE TABLES AND RETURN THE VALUES OF KEYS AND NAMES

        console.log(table);

        let queryLower = query.toLowerCase();
        
        //FILTER VALUES TO THE MATCH ARRAY
	      let match = table.filter((value) => {
          if(value[labelColumn] === undefined){
            return false;
          }

          let valueLower = '';

          if(value[labelColumn] !== null){
            valueLower = value[labelColumn].toLowerCase();
          }
          
          if(valueLower.includes(queryLower)){
            return value;
          }else {
            return false;
          }
        });
        
        //RETURN THE LI ELEMENTS
        let elements = [];
        for (let i = 0; i < match.length; i++) {
          const id = (getKeyValues(match[i]).values)[0];
          const label = match[i][labelColumn];
          const auxLabel = match[i][auxColumn];
          elements.push({
            tableName: tableNameQuery,
            tableLabel: tableLabelQuery,
            id: id,
            label: label,
            auxLabel: auxLabel
          });
        }
        return elements;
    }

    //console.log(tableData.searchByID(tablesKeys.uns, 'un_id', 2, 'nome'));
    searchByID(table, key, queryID, property){
        let s = this.tables[table];
        if(s.features){
            s = this.getFeaturesProperties(table);
        }
        for(let i in s) {
            let id = s[i][key];
            if (id == queryID){
                return s[i][property];
            }
        }
    }
}