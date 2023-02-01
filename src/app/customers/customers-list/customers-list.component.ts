import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  customers;
  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch({type:'LOAD_CUSTOMER'});
    this.store.subscribe(state=>(this.customers=state.customers.customers))
  }

}
