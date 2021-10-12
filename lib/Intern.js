const employee = require('./Employee');

class intern extends employee {
    constructor(school){
        this.school = school
    }
    getSchool(){
        return this.school
    }
    getRole(){
        return this.intern
    }
};

module.exports = intern;