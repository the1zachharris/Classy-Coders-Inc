const Employees = require("./Employees");

class SalesPerson extends Employees {
    #totalSales
    constructor(name,title,salary,clients) {
        super(name,title,salary)
        this.clients = clients
        this.#totalSales = 0
    }
    getSalesNumbers
}

module.exports = SalesPerson