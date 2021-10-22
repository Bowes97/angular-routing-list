import { Component, OnInit } from '@angular/core';
import { IPerson } from './phonebook.interface';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.scss']
})
export class PhonebookComponent implements OnInit {
  public person: string = '';
  public firstname!: string;
  public lastname!: string;
  public number!: string;
  public numberEdit!: string;
  public lastnameEdit!: string;
  public firstnameEdit!: string;
  editIndex!: number;
  displayStyle = "none";
  displayStyleEdit = "none";
  caretDown1 = false;
  caretDown2 = false;
  caretDown3 = false;

  public arrPerson: Array<IPerson> = [
    {
      firstname: "Petya",
      lastname: "Zhuk",
      number: "098232492",
    },
    {
      firstname: "Petro",
      lastname: "Bober",
      number: "095232492",
    },
    {
      firstname: "Masha",
      lastname: "Cauitins",
      number: "097232492",
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }
  deletePerson(i: number): void {
    this.arrPerson.splice(i, 1)
  }
  editPerson(i: number) {
    this.editIndex = i;
    console.log(this.arrPerson);
  }
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
    if (this.firstname && this.lastname && this.number) {
      class NewPerson {
        firstname: string;
        lastname: string;
        number: string;
        constructor(firstname: string, lastname: string, number: string) {
          this.firstname = firstname;
          this.lastname = lastname;
          this.number = number;
        }
      }
      let newperson = new NewPerson(this.firstname, this.lastname, this.number)
      this.arrPerson.push(newperson);
      this.firstname = "";
      this.lastname = "";
      this.number = "";
    }
  }
  openEdit(): void {
    this.displayStyleEdit = "block";
  }
  closeEdit(): void {
    if (this.firstnameEdit && this.lastnameEdit && this.numberEdit) {
      class EditPerson {
        firstname: string;
        lastname: string;
        number: string;
        constructor(firstname: string, lastname: string, number: string) {
          this.firstname = firstname;
          this.lastname = lastname;
          this.number = number;
        }
      }
      let editperson = new EditPerson(this.firstnameEdit, this.lastnameEdit, this.numberEdit)
      this.arrPerson[this.editIndex] = editperson;
      this.firstnameEdit = "";
      this.lastnameEdit = "";
      this.numberEdit = "";
    }
    this.displayStyleEdit = "none";
  }
  numbers(): void {
    this.arrPerson.sort(function (a: any, b: any) {
      return a.number - b.number;
    });
    this.caretDown3 = true;
    this.caretDown2 = false;
    this.caretDown1 = false;
  }
  last(): void {
    this.arrPerson.sort(function (a, b) {
      var nameA = a.lastname.toUpperCase();
      var nameB = b.lastname.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    })
    this.caretDown3 = false;
    this.caretDown2 = true;
    this.caretDown1 = false;
  }
  first(): void {
    this.arrPerson.sort(function (a, b) {
      var nameA = a.firstname.toUpperCase();
      var nameB = b.firstname.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    })
    this.caretDown3 = false;
    this.caretDown2 = false;
    this.caretDown1 = true;
  }
}
