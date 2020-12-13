// Aggregation

class Bank {
    constructor() {
        this.nib = 10
    }
    getEmployee = () => ['Employee 1', 'Employee 2', 'Employee 3']
}

// -----------------

class Employee {
    constructor() {
        this.nik = 1010
    }
    getCustomer = () => ['Customre 1', 'Customre 2', 'Customre 3']
}

// -----------------

class Customer {
    constructor() {
        this.nip = 101010
    }
    createRekening = () => "Rekening Employee"
}

// Composition

class Heart {
    constructor() {
        this.heartRatio = '99%'
    }

    breathe = () => this.heartRatio
}

class Human extends Heart {
    // some property ...
}

const objHuman = new Human()

// console.log(objHuman.breathe())