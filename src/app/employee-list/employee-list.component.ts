import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {
  public employees = [
    {"id": 1, "name": "Andrew", "age": 30},
    {"id": 2, "name": "Hans", "age": 39},
    {"id": 3, "name": "Johanna", "age": 35},
    {"id": 4, "name": "Anas", "age": 31},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
