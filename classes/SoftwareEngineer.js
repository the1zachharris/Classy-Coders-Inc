const Employees = require("./Employees")

class SoftwareEngineer extends Employees {
    #programmingLanguages
    constructor(name,title,salary,lan) {
        super(name,title,salary)
        this.#programmingLanguages = lan
    }
    getProgrammingLanguages() {
        return this.#programmingLanguages
    }
    setProgrammingLanguages(lan) {
        this.#programmingLanguages.push(lan)
    }
}

module.exports = SoftwareEngineer