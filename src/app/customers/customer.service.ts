import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer.model';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customersUrl = "http://localhost:3000/customers";
  constructor(private http: HttpClient) { }


  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customersUrl);
  }
}
