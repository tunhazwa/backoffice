import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class Employee {
  constructor(
    public empId:string,
    public name:string,
    public designation:string,
    public salary:string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  constructor(
    private httpClient : HttpClient 
  ) { }
  getEmployees ()
    {
      console.log("test call");
      return this.httpClient.get<Employee[]>('http://localhost:8080/employees');
    }
  
}
