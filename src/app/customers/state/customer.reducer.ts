export const initialState = {
    customers: [
        {
          name: "John Doe",
          phone: "910928392098",
          address: "123 Sun Street",
          membership: "Platinum",
          id: 1
        },
    ],
    loading:false,
    loaded:true
}

export function customReducer(state=initialState, action){
  switch(action.type){
     case "LOAD_CUSTOMER":{
        return{
            ...state,
            loding:true,
            loaded:false

        }
     }
     default:{
        return state;
     }
  }
}