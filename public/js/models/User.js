import * as requests from './../requests';

export default class User{
    constructor(){
    }
    async getUser(){
        if (this.username === undefined) {
            const data = await requests.makeSimpleGetRequest(requests.dashboardBase, '/usr');
            this.username = data.username;
            return this.username;
        } else {
            return this.username;
        }
    }
    async getValidate(){
        if (this.isValid === undefined) {
            const data = await requests.makeSimpleGetRequest(requests.dashboardBase, '/usr');
            this.valid = data.valid;
            return this.valid;
        } else {
            return this.valid;
        }
    }
}