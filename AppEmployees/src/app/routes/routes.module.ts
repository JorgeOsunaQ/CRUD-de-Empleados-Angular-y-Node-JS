import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {TableEmployeesComponent} from '../table-employees/table-employees.component';
import {InfoAppComponent} from '../info-app/info-app.component';
import {RegistroEmployeesComponent } from '../registro-employees/registro-employees.component';

const routes=[
  {path:'empleados',component:TableEmployeesComponent},
  {path: 'empleados/registrar',component: RegistroEmployeesComponent,data:{data:'R'}},
  {path: 'empleados/editar_empleado',component: RegistroEmployeesComponent,data:{data:'E'}},
  {path: 'about', component:InfoAppComponent},
  {path: '',redirectTo: '/empleados', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class RoutesModule { }