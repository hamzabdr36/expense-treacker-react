import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer';

// initial state

const initialState = {
    transactions: []
    
}

// create context

export const GlobalContext = createContext(initialState);

//Provider component

 const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //action

    function Delete_Transaction(id){
        dispatch({
            type: "DELETE_TRANSACTION", payload: id
            
        });
    }

    function Add_Transaction(transaction){
        dispatch({
             type: "ADD_TRANSACTION", payload: transaction
                
        });    

    }


     return (<GlobalContext.Provider value = {{
         transactions: state.transactions,
         Delete_Transaction,
         Add_Transaction  }} >
         {children}
         </GlobalContext.Provider>);


}
 export default GlobalProvider;
 