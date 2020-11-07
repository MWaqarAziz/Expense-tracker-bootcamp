import React, { useContext, useReducer, useState } from 'react';
import './App.css';
import {TransitionContext} from './Context'

function Child() {
   let {transactions, addTransaction} = useContext(TransitionContext);
   let[newDisc, setDisc] = useState("")
   let [newAmount, setAmount] = useState(0)
  
   const handleAddition = (event) =>{
      event.preventDefault();
      if (Number(newAmount) === 0)
      {
          alert("Please Enter Correct Value");
          return false;
      }
      
      addTransaction({
          amount : Number(newAmount),
          disc  : newDisc

      })
      setDisc('');
      setAmount(0);
      

   }
   const getIncome = () => {
       let income = 0;
       for(var i = 0; i < transactions.length ; i++ ){
           if (transactions[i].amount > 0)
           income = transactions[i].amount ;
           console.log(income);
       }
       return income;
   }
    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0)
                expense += transactions[i].amount
        }
        return expense;
    }
    
    return (
        <div className="container">
         <h1>Expense Tracker</h1>
        <h3>Your Balance <br/> {getIncome() + getExpense()}</h3>
        <div className="expense-container">
        <h3>Income <br/>{getIncome()}</h3>
        <h3>Expense <br/>{getExpense()}</h3>

        </div>
        <h3>History</h3>
        <hr/>
        <ul className="transaction-list">
            {transactions.map((transObj, ind)=>{
               
                return(
                    <li key={ind}>
                        <span>{transObj.disc}</span>
                        <span>{transObj.amount}</span>
                    </li>
                )}
            )}
        </ul>
        <h3>Add new transaction</h3>
        <hr/>
        <form className="transaction-form " onSubmit={handleAddition}>
            <label> 
                Enter Description<hr/>
                <input placeholder="Enter Value" value = {newDisc} type="text" required onChange={(ev)=>setDisc(ev.target.value)}/>
            </label>
            <br/>
                <label>
                    Enter Amount<hr />
                    <input placeholder="Enter Amount" value={newAmount} type="number" required onChange={(ev) => setAmount(ev.target.value)} />
                </label><br/>
                <input type="submit" value="Add Item"/>
        </form>
        </div>
    );
}

export default Child;
