import React from 'react'
// import {MdSend} from "react-icons/md"

const ExpenseForm = ({charge,amount,handleCharge,handleAmount,handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} >
           <div className="form-center">
           <div className="form-group">
           <label htmlFor="expense">Charges</label>  
           <input type="text" className="form-control" id="charge" name="charge" value={charge} onChange={handleCharge}  />
           </div>
           <div className="form-group">
           <label htmlFor="expense">Amount</label>  

           <input type="text" className="form-control" id="amount" name="amount" value={amount} onChange={handleAmount} />
           </div>
          
            
            </div>
            <button type="submit" className="btn btn-block" style={{display:'flex',alignItems:"center",justifyContent:"center"}}>
               Submit
               {/* <MdSend className="btn-icon"/> */}
            </button>
        </form>
           
            
    )
}

export default ExpenseForm;
