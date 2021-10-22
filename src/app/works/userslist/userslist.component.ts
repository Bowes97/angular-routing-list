import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.scss']
})
export class UserslistComponent implements OnInit {
  login!: string;
  password!: string;
  email!: string;
  arrPerson: Array<any> = [];
  isEdit = true;
  editIndex!: number;
  constructor() { }

  ngOnInit(): void {
  }
  click(): void {
    if (this.login && this.password && this.email) {
      class Registr {
        login: string;
        password: string;
        email: string;
        constructor(login: string, password: string, email: string,) {
          this.login = login;
          this.password = password;
          this.email = email;
        }
      }
      let person = new Registr(this.login, this.password, this.email);
      this.arrPerson.push(person);
      this.email = "";
      this.login = "";
      this.password = "";
      console.log(this.arrPerson);
    }
  }
  deletePerson(index: number): void {
    this.arrPerson.splice(index, 1)
  }
  editPerson(index: number): void {
    this.login = this.arrPerson[index].login;
    this.password = this.arrPerson[index].password;
    this.email = this.arrPerson[index].email;
    this.editIndex = index;
    this.isEdit = false;
  }
  saveName(): void {
    class NewRegistr {
      login: string;
      password: string;
      email: string;
      constructor(login: string, password: string, email: string,) {
        this.login = login;
        this.password = password;
        this.email = email;
      }
    }
    let newPerson = new NewRegistr(this.login, this.password, this.email);
    this.arrPerson[this.editIndex] = newPerson;
    this.isEdit = true;
    this.email = "";
    this.login = "";
    this.password = "";
  }
}
