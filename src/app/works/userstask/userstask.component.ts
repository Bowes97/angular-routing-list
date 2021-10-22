import { Component, OnInit } from '@angular/core';
import { ITask } from './task.interface';

@Component({
  selector: 'app-userstask',
  templateUrl: './userstask.component.html',
  styleUrls: ['./userstask.component.scss']
})
export class UserstaskComponent implements OnInit {
  newText!: string;
  status!: boolean;
  newObj!: object;
  public arrtask: Array<any> = [
    {
      newTask: "HTML",
      status: false,
    },
    {
      newTask: "CSS3",
      status: false,
    },
    {
      newTask: "SCSS",
      status: false,
    },
    {
      newTask: "JavaScript",
      status: false,
    },
    {
      newTask: "Jquery",
      status: false,
    },
    {
      newTask: "Angular",
      status: false,
    },
  ]
  isEdit = false;
  editIndex!: number;
  rewrite!: string;
  constructor() { }

  ngOnInit(): void {
  }
  changeStatus(task: ITask): void {
    task.status = !task.status;
  }
  deleteTask(i: number): void {
    this.arrtask.splice(i, 1)
  }
  editTask(i: number): void {
    this.isEdit = !this.isEdit
    this.editIndex = i;
    this.rewrite = this.arrtask[i].newTask;
  }
  saveName(): void {
    this.isEdit = false;
    class NewTask {
      newTask: string;
      status: boolean;
      constructor(newTask: string, status: boolean) {
        this.newTask = newTask;
        this.status = status;
      }
    }
    let newTask = new NewTask(this.rewrite, false)
    this.arrtask[this.editIndex] = newTask;
  }
  addNewOBJ(): void {
    if (this.newText) {
      this.newObj = { newTask: this.newText = this.newText, status: false };
      this.newText = "";
      this.arrtask.push(this.newObj)
    }
  }
}
