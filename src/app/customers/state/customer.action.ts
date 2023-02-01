import { Action} from "@ngrx/store";
import { Customer } from "../customer.model";
import { CustomersModule} from "../customers.module";

export enum CustomerActionTypes {
    LOAD_CUSTOMERS = "[Customer] Load Customers",
    LOAD_CUSTOMERS_SUCCESS = "[Customer] Load Customers Success",
    LOAD_CUSTOMERS_FAIL = "[Customer] Load Customers Fail"
}


export class LoadCustomer implements Action {
    readonly type: CustomerActionTypes.LOAD_CUSTOMERS
}

export class LoadCustomerSuccess implements Action {
    readonly type: CustomerActionTypes.LOAD_CUSTOMERS_SUCCESS

    constructor(public payload: Customer[]){}
}

export class LoadCustomerFail implements Action {
    readonly type: CustomerActionTypes.LOAD_CUSTOMERS_FAIL

    constructor(public payload:string){}
}
export type Actions = LoadCustomer | LoadCustomerFail | LoadCustomerSuccess
