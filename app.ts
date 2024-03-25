import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'



const peopleAccount: PeopleAccount = new PeopleAccount(1, 'ezequias', 10)
peopleAccount.deposit()

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount.deposit())