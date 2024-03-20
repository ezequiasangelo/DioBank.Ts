// interface Pessoa {
//     nome: string
//     idade: number
//     profissao?: string //Caso queira utilizar opcional 
// }
// const pessoa: Pessoa = {
//     nome: "ezequias", 
//     idade: 23
// }

// const num: number = 13

// if (num < 13){
//     console.log('Seu número é menor')
// }
// else{
//     console.log('Maior')
// }

abstract class Account {
    name: string
    accountNumber: number
    balance: number = 0

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }
    deposit = () => {
        console.log('Voce  depositou ')
    }
    withdraw = () => {
        console.log('Voce sacou')
    }

    getBalance = () => {
        console.log(this.balance)
    }
}

class PeopleAccount extends Account {
    doc_id: number

    constructor(doc_id: number, name: string, accountNumber: number){
        super(name, accountNumber)
        this.doc_id = doc_id 
    }
}

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'ezequias', 10)
console.log(peopleAccount)