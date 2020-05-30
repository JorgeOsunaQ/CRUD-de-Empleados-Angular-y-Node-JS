import { Component, OnInit } from '@angular/core';
import {InfoEmployeesService} from '../info-employees.service'
import {HttpClientModule} from '@angular/common/http'
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-registro-employees',
  templateUrl: './registro-employees.component.html',
  styleUrls: ['./registro-employees.component.css']
})
export class RegistroEmployeesComponent implements OnInit {

  subRoute:any;
  empleadoEdit:any;
  operacion:String;

  constructor(private http: HttpClientModule,private apiEmployees:InfoEmployeesService,
    private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.empleadoEdit={name:'',last_name:'',job_title:''};
    this.obtenerDatosRuta();
  }

  obtenerDatosRuta(){
    this.subRoute=this.route.data.subscribe(data=>{
      this.operacion=data.data;
     })

     if(this.operacion=='E'){

      this.route.queryParams.subscribe(params=>{
        this.empleadoEdit=params;
        this.cargarSelect();
      })
     }
  }

  cargarSelect(){
    let job_title=this.empleadoEdit.job_title;
    let select=(<HTMLInputElement>document.getElementById("selectJobTitle"));
    if(job_title!='Administrativo' && job_title!='Operativo'){
      select.value='Otro';
    }
    else{
      select.value=job_title
    }
  }

  enviarDatos(name,lastName,job_title){
    let id=this.empleadoEdit.id;
    this.empleadoEdit={
      name:name,
      last_name:lastName,
      job_title: job_title
    }
    
    //let confirmReq=confirm("¿Estás seguro de querer enviar esta información?")
    let confirmReq=true;
    if(confirmReq){
      if(this.operacion=='E'){
        this.empleadoEdit['id']=id;
        this.editarEmpleado();
        console.log(this.empleadoEdit)
        return
      }
      this.crearEmpleado();
    }
  }

  editarEmpleado(){
    this.apiEmployees.updateEmployee(this.empleadoEdit).subscribe((res:any)=>{
      if(res.ok) alert(res.body.message)
      this.router.navigate(['/empleados/'])
    })
  }

  crearEmpleado(){
    this.apiEmployees.createEmployee(this.empleadoEdit).subscribe((res:any)=>{
      if(res.ok){ alert(res.body.message)}
      window.location.reload();
    })
  }

}
