import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'any',
})
export class EmployeeService {

    constructor(private http: HttpClient){}

    getEmployee():Observable<Employee>{
        let configUrl = "https://angularapitest.azurewebsites.net/api/employee";

        return this.http.get<Employee>(configUrl);
    }


    postEmployee(employee:Employee){
        let configUrl = "https://angularapitest.azurewebsites.net/api/employee";

        return this.http.post(configUrl, employee).subscribe();
    }
}