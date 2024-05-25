import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Router } from '@angular/router';


@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrl: './emp-list.component.css'
})
export class EmpListComponent {
  displayedColumns = ['id', 'name', 'status', 'role'];
  @ViewChild(MatSort) sort: MatSort;

  EmpData: UserData[] = [
    {
      id: 1,
      name: 'Mellie Gabbott',
      status: 'Approver',
      role: 'user'
    },
    {
      id: 2,
      name: 'Yehudi Ainsby',
      status: 'Active',
      role: 'user'
    },
    {
      id: 3,
      name: 'Yehudi Ainsby3',
      status: 'Active',
      role: 'user'
    },
    {
      id: 4,
      name: 'Test Test',
      status: 'Active',
      role: 'user'
    },
  ];

  dataSource = new MatTableDataSource(this.EmpData);
  constructor(private router: Router) { }

 

  editContact(userData: UserData) {
    let route = '../emp';
    this.router.navigate([route], { queryParams: { id: userData.id } });
  }
  
 

}




export interface UserData {
  id: number;
  name: string;
  status: string;
  role: string;
}



