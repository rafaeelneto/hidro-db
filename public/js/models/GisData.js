import * as requests from './../requests';

export default class GisData {
    
    constructor(){
    }

    async loadAll(query){
        const gisRes = await requests.makeSimpleGetRequest(requests.dashboardBase, `/gis/${query}` );
        return gisRes;
    }
}