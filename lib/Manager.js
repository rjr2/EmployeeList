const employee = require('./Employee');

class manager extends employee {
    constructor(officeNumber){
        this.officeNumber = officeNumber
    }
    getOfficeNumber(){
        return this.officeNumber
    }
    getRole(){
        return this.manager
    }
};

module.exports = manager;