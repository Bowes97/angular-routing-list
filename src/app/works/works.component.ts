import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  cenzorTrue: boolean = true;
  userlistTrue: boolean = false;
  usertaskTrue: boolean = false;
  phoneTrue: boolean = false;
  public href: string = "";
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.href = this.router.url;
    console.log(this.href);
    if (this.href === "/works/phonebook") {
      this.cenzorTrue = false;
      this.userlistTrue = false;
      this.usertaskTrue = false;
      this.phoneTrue = true;
    } else if (this.href === "/works/cenzor") {
      this.cenzorTrue = true;
      this.userlistTrue = false;
      this.usertaskTrue = false;
      this.phoneTrue = false;
    } else if (this.href === "/works/userslist") {
      this.cenzorTrue = false;
      this.userlistTrue = true;
      this.usertaskTrue = false;
      this.phoneTrue = false;
    } else if (this.href === "/works/userstask") {
      this.cenzorTrue = false;
      this.userlistTrue = false;
      this.usertaskTrue = true;
      this.phoneTrue = false;
    }
  }
  cenzor(): void {
    this.cenzorTrue = true;
    this.userlistTrue = false;
    this.usertaskTrue = false;
    this.phoneTrue = false;
  }
  userlist(): void {
    this.cenzorTrue = false;
    this.userlistTrue = true;
    this.usertaskTrue = false;
    this.phoneTrue = false;
  }
  phone(): void {
    this.cenzorTrue = false;
    this.userlistTrue = false;
    this.usertaskTrue = false;
    this.phoneTrue = true;
  }
  usertask(): void {
    this.cenzorTrue = false;
    this.userlistTrue = false;
    this.usertaskTrue = true;
    this.phoneTrue = false;
  }
}
