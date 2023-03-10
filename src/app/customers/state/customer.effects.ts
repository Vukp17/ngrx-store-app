import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import { CustomerService } from "../customer.service";
import * as customerActions from "../state/customer.action";
import { Customer } from "../customer.model";

@Injectable()
export class CustomerEffect {
  constructor(private actions$: Actions, private customerService: CustomerService) { }




  loadCustomers$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType<customerActions.LoadCustomers>(
      customerActions.CustomerActionTypes.LOAD_CUSTOMERS
    ),
    mergeMap((actions: customerActions.LoadCustomers) =>
      this.customerService.getCustomers().pipe(
        map(
          (customers: Customer[]) =>
            new customerActions.LoadCustomersSuccess(customers)
        ),
        catchError(err => of(new customerActions.LoadCustomersFail(err)))
      )
    )
  )
  )

  loadCustomer$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType<customerActions.LoadCustomer>(
      customerActions.CustomerActionTypes.LOAD_CUSTOMERS
    ),
    mergeMap((action: customerActions.LoadCustomer) =>
      this.customerService.getCustomerById(action.payload).pipe(
        map(
          (customer: Customer) =>
            new customerActions.LoadCustomerSuccess(customer)
        ),
        catchError(err => of(new customerActions.LoadCustomerFail(err)))
      )
    )
  )
  )


  updateCustomer$ = createEffect(() => 
    this.actions$.pipe(
      ofType<customerActions.UpdateCustomer>(
        customerActions.CustomerActionTypes.UPDATE_CUSTOMER
      ),
      map((action: customerActions.UpdateCustomer) => action.payload),
      mergeMap((customer: Customer) =>
        this.customerService.updateCustomer(customer).pipe(
          map(
            (updateCustomer: Customer) =>
              new customerActions.UpdateCustomerSuccess({
                id: updateCustomer.id,
                changes: updateCustomer
              })
          ),
          catchError(err => of(new customerActions.CreateCustomerFail(err)))
        )
      )
    )
  );








}