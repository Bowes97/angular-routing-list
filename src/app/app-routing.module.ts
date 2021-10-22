import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { CenzorComponent } from './works/cenzor/cenzor.component';
import { UserslistComponent } from './works/userslist/userslist.component';
import { UserstaskComponent } from './works/userstask/userstask.component';
import { PhonebookComponent } from './works/phonebook/phonebook.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "works", component: WorksComponent, children: [
    { path: "cenzor", component: CenzorComponent },
    { path: "userslist", component: UserslistComponent },
    { path: "userstask", component: UserstaskComponent },
    { path: "phonebook", component: PhonebookComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
