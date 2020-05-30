import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class InfoEmployeesService {

  baseUrl='http://localhost:3000/api'
  constructor(private http:HttpClient) { }

  //CREATE
  createEmployee(employee:{}): Observable<Object>{
    
    const options={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: "response" as 'body',
    }

    return this.http.post(`${this.baseUrl}/empleados/registrar`,employee,options);
  }

  //READ
  getAllEmployees(): Observable<Object>{
    return this.http.get(`${this.baseUrl}/empleados`)
  }

  //UPDATE
  updateEmployee(employee:{}): Observable<Object>{

    const options={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: "response" as 'body',
    }
    console.log(employee)
    return this.http.put(`${this.baseUrl}/empleados/modificar`,employee,options);
  }

  //DELETE
  deleteEmployee(idEmployee:Number): Observable<Object>{
    const options={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body:{
        id: idEmployee
      },
      observe: "response" as 'body',
    }
    return this.http.delete(`${this.baseUrl}/empleados/eliminar`,options);
  }

}
