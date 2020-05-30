import { Component, OnInit } from '@angular/core';
import {InfoEmployeesService} from '../info-employees.service'
import {HttpClientModule} from '@angular/common/http'
import {Router,NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-table-employees',
  templateUrl: './table-employees.component.html',
  styleUrls: ['./table-employees.component.css']
})
export class TableEmployeesComponent implements OnInit {

  datosEmpleados=null;
  loaded=false;

  constructor(private apiEmployees:InfoEmployeesService, private http: HttpClientModule,
    private router: Router) { }

  ngOnInit() {
    this.obtenerDatosEmpleados();
  }

  obtenerDatosEmpleados(){
    this.apiEmployees.getAllEmployees().subscribe(
      (res)=>{
      this.datosEmpleados=res;
      this.loaded=true;
    });
  }

  rutaRegistrar(){
    this.router.navigate(['empleados/registrar']);
  }

  rutaEditar(empleado){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          id:empleado.id,
          name: empleado.name,
          last_name: empleado.last_name,
          job_title: empleado.job_title
      }
    }
    this.router.navigate(['empleados/editar_empleado'],navigationExtras);
  }

  eliminarEmpleado(id:Number){
    let confirmReq=confirm("¿Seguro que desea eliminar los datos de este empleado?"+ 
    "\nSe eliminará toda información con relación a este.")

    if(confirmReq){
      this.apiEmployees.deleteEmployee(id).subscribe((res:any)=>{
        if(res.ok){ alert(res.body.message)}
        window.location.reload();
      })
    }
  }

}
