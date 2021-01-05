import React, { useState } from 'react'

export default function TodoItem(props) {

const [isDone,setDone]=useState(false);

const handleClick=()=>{
    setDone(prevValue=>{
        return !prevValue;
    })
}


    return (
        <div onClick={handleClick}>
            
             <li style={{textDecoration:isDone?"line-through":"none"}}>
                  
             <h4>{props.text}</h4>
            </li>
           
         
        </div>
    )
}
