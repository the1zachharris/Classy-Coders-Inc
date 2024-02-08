class Employees {
    #salary
    #isHired
    static #allEmployees = []
    constructor(name,title,salary) {
        this.name = name
        this.title = title
        this.#salary = salary
        this.#isHired = true
    }
    getSalary() {
        return this.#salary
    }
    setSalary(salary) {
        this.#salary = salary
    }
    getStatus() {
        return this.#isHired
    }
    setStatus(status) {
        if (status === 'hire') this.#isHired = true
        if (status === 'fire') this.#isHired = false
    }
    static getEmployees() {
        return Employees.#allEmployees
    }
    static getTotalPayroll() {
        let total = 0
        Employees.#allEmployees.forEach((employee) => {
            total += employee.#salary
        })
        return total
    }
}

module.exports = Employees