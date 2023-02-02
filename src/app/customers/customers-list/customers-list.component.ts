import { Component, OnInit } from '@angular/core';
import { Store,select } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { Customer } from '../customer.model';
import * as customerActions from "../state/customer.action";
import * as fromCustomer from "../state/customer.reducer"


@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  customers$: Observable<Customer[]>;
  constructor(private store: Store<fromCustomer.AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(new customerActions.LoadCustomers());
    this.customers$ = this.store.pipe(select(fromCustomer.getCustomers));
  }

}
