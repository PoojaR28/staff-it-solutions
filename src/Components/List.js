import React, { useState } from "react";
import TodoItem from "./ToDoItem";

export default function List() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputText(newValue);
  };

  const handleClick = () => {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  };

  const handleDelete=()=>{
      setItems([]);
  }
  return (
    <div className="container">
      <div className="heading">
        <h1> TO DO LIST </h1>
        <h6 style={{ textAlign: "center", color: " #888" }}>
          Enter your day to day tasks to be done in the list. You can enter each
          item by adding it and remove it by clicking on the same.
        </h6>
      </div>
      <div className="form">
        <input
          type="text"
          name="inputText"
          value={inputText}
          onChange={handleChange}
          placeholder="Enter your task"
        />
        <button className="btn btn-block btn-primary" onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      
      <div  style={{paddingTop:"20px"}} >

{/* <table class="table table-responsive"  */}
{/* style={{width: "975px", alignItems:"center", textAlign:"center"}} */}
{/* > */}
              {/* <tr> */}
              {/* <th style={{width:"100%",textAlign:"center"}}> */}
                <h3 style={{color:"blue",textAlign:"center"}}><ul>List to be done</ul></h3>
                {/* </th> */}
              {/* </tr> */}
                {/* <tr> */}
                <div className="d-flex justify-content-center">
                <ul>
  {items.map((item) => 
             
                <TodoItem text={item} handleDelete={handleDelete} />
 )}
           </ul>  
                {/* </tr> */}
              
          {/* </table> */}
          </div>
        </div>
        <button className="btn btn-danger" onClick={handleDelete}>Clear The List</button>

    </div>
  );
}
