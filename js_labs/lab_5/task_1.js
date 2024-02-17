employees = [
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]


class Employee {
    constructor(name) {
        this.name = name;
        this.id = name.length;
    }

    toString() {
        return `Employee ${this.name} - Personal Number : ${this.id}`
    }
}

employees.forEach((element => {
    console.log(new Employee(element).toString())
}))
