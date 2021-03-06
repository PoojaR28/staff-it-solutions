import React from 'react'
import {MdDelete} from "react-icons/md"

const ExpenseItem = ({expense,handleDelete}) => {

    const {id,charge,amount}=expense;

    return (
      <div>
        <li className="item">
        <div className="info">
          <span className="expense">{charge}</span>
          <span className="amount">${amount}</span>
        </div>
        <div>
          <button className="clear-btn" aria-label="delete button" onClick={()=>handleDelete(id)} >
            <MdDelete />
          </button>
        </div>
      </li>
      </div>
    )
}

export default ExpenseItem;
