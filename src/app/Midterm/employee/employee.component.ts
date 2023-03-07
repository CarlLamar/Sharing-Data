import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../Midterm/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employee: any;
  constructor(private EmployeeService: EmployeeService) {}

  ngOnInit() {
    this.employee = this.EmployeeService.Employee();
  }
}
