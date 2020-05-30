import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RoutesModule} from './routes/routes.module'
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TableEmployeesComponent } from './table-employees/table-employees.component';
import { InfoAppComponent } from './info-app/info-app.component';
import { RegistroEmployeesComponent } from './registro-employees/registro-employees.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TableEmployeesComponent,
    InfoAppComponent,
    RegistroEmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
