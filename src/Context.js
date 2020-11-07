import React, { createContext, useReducer } from 'react';
import transactionReducer from './transReducer';

const  initialTransactions = [{
    amount: 500, disc: "cash",id : 0
},
{
    amount: 600, disc: "cash1", id: 1
},
{
        amount: -700, disc: "cash2", id: 2
    
},
{
    amount: 800, disc: "cash3", id: 3
}
]
export const TransitionContext = createContext(initialTransactions);
export const TransactionProvider =({children})=>{
let [state, dispatch] = useReducer(transactionReducer,initialTransactions)
  function addTransaction(initialTransactions){
      dispatch({
          type: "ADD_TRANSACTION",
          payload : {
              amount : initialTransactions.amount,
              disc   : initialTransactions.disc
          }
      })
  }
    
  return(
      <TransitionContext.Provider value = {{
      transactions: state,
      addTransaction,
      
      }}>{children}</TransitionContext.Provider>
  )
}