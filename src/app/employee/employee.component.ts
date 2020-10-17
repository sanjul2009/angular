import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';
import {EmployeeService} from './employe.service';

@Component({
    selector:'employee',
    templateUrl:'./employee.component.html',
    providers:[EmployeeService]
})
export class EmployeeComponent implements OnInit {
    myCurrenntEmployee : Employee;

    constructor(private _employeeService:EmployeeService){
        console.log('in employee contrcutor');

    }

    ngOnInit(){
        console.log('in employee ngOnInit');
        this._employeeService.getEmployee().subscribe(
            (success)=>{ 
                console.log("Employee response" + JSON.stringify(success)); 
                this.myCurrenntEmployee = success;
            },
            (error)=>{console.log("Employee response" + JSON.stringify(error));}

        );
    }

    postEmployeeSubmit(){
        debugger;
        this._employeeService.postEmployee(this.myCurrenntEmployee);
    }

}