import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "customers",
    loadChildren:()=> import('../app/customers/customers.module').then(m => m.CustomersModule)
  }
];
@NgModule({
  imports: [CommonModule,RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
