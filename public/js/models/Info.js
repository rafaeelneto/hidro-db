import {nullVeryfier} from './../views/Base';

export default class Info{
    constructor(s, joinTables){
        let keys = [];
		let values = [];
		for(let i in s) {
            keys.push(i);
            s[i] = nullVeryfier(s[i]);
			values.push(s[i]);
        }
        this.keys = keys;
        this.values = values;
        this.s = s;
        this.joins = joinTables;
    }

    storeInputs(s){
        this.s = s;
    }
}