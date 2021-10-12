const employee = require('./Employee');

class engineer extends employee {
    constructor(github){
        this.github = github
    }
    getGithub(){
        return this.github
    }
    getRole(){
        return this.engineer
    }
};

module.exports = engineer;