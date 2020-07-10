// Contoh Class Sederhana
export class User {
    public name: string

    constructor(name: string) {
        this.name = name
    }

}


let user = new User("Rizky")
console.log(user);


// Contoh Class 2
export class Users {

    constructor(public name: string, private last?: string) {
        this.name = name + " " + last
    }

}

let users = new Users("Rizky")
console.log(users)