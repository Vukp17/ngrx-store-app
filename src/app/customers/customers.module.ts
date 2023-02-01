import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers/customers.component';
import { CustomersAddComponent } from './customers-add/customers-add.component';
import { CustomersEditComponent } from './customers-edit/customers-edit.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {customReducer} from './state/customer.reducer'
import { CustomerEffect } from './state/customer.effects';
const customerRoutes: Routes = [{ path: "", component: CustomersComponent }]
@NgModule({
  declarations: [
    CustomersComponent,
    CustomersAddComponent,
    CustomersEditComponent,
    CustomersListComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(customerRoutes),StoreModule.forFeature("customers",customReducer),EffectsModule.forFeature(CustomerEffect)
  ]
})
export class CustomersModule { }
