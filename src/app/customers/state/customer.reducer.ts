import * as customerActions from "../state/customer.action";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

import { Customer } from "../customer.model";
import * as fromRoot from "../../state/app-state";

export interface CustomerState extends EntityState<Customer> {
  selectedCustomerId: number | null;
  loading: boolean;
  loaded: boolean;
  error: string;
}
export interface AppState extends fromRoot.AppState {
  customers:CustomerState
}

export const customerAdapter: EntityAdapter<Customer> = createEntityAdapter<
  Customer
>();
export const defaultCustomer: CustomerState = {
  ids:  [],
  entities: {},
  selectedCustomerId: null,
  loading: false,
  loaded: false,
  error: ""
};
export const initialState = customerAdapter.getInitialState(defaultCustomer);


export function customReducer(state = initialState,action:customerActions.Actions):CustomerState{
    switch (action.type) {
        case customerActions.CustomerActionTypes.LOAD_CUSTOMER: {
          return  {
            ...state,
            loading: true,
           
          };
        }
        case customerActions.CustomerActionTypes.LOAD_CUSTOMERS_SUCCESS: {
          return customerAdapter.setAll(action.payload, {
            ...state,
            loading: false,
            loaded: true
          });
        }
    
        case customerActions.CustomerActionTypes.LOAD_CUSTOMER_FAIL: {
          return {
            ...state,
            entities: {},
            loading: false,
            loaded: false,
            error: action.payload
          };
        }
        default:{
            return state
        }
    }

} 
const getCustomerFetaureState = createFeatureSelector<CustomerState>("customers")

export const getCustomers = createSelector(
  getCustomerFetaureState,
  customerAdapter.getSelectors().selectAll
)
export const getCustomersLoading = createSelector(
  getCustomerFetaureState,
  (state: CustomerState) =>state.loading
)
export const getCustomersLoaded = createSelector(
  getCustomerFetaureState,
  (state: CustomerState) =>state.loaded
)
export const getError = createSelector(
  getCustomerFetaureState,
  (state: CustomerState) =>state.error
)