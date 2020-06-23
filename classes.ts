abstract class UserAccount {
    readonly name: string
    private age: number
    private login: string

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    get getDetails(): void {
        return console.log(`Hi, my name is ${this.name} and i'm ${this.age} years old and amy login is ${this.login}`)
    }

    set setLogin(login: string) {
        this.login = login
    }

}

class AdminAccount extends UserAccount {
    id: number
    nickname: string

    constructor(id: number, name: string, nickname: string, age: number) {
        super(name, age)
        this.nickname = nickname
        this.id = id
    }
}

// A normal user (if user class is not abstracted)
// const will = new UserAccount('William', 30)

// An administrator
const smith = new AdminAccount(2, 'Smith', 'Joe', 30)
smith.setLogin = 'genios'
console.log(smith.getDetails)
