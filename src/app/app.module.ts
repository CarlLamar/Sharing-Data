import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EmployeeComponent } from './Midterm/employee/employee.component';
import { ProductComponent } from './Midterm/product/product.component';
import { EmployeeService } from './Midterm/employee.service';
import { ProductService } from './Midterm/product.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    EmployeeComponent,
    ProductComponent,
  ],
  providers: [EmployeeService, ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
