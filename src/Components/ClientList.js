import React, { useState } from "react";
import AddClient from "./AddClient";

export default function ClientList() {
  const [client, setClient] = useState([]);

  function addClient(newCan) {
    console.log(newCan);
    setClient((prevNotes) => {
      return [...prevNotes, newCan];
    });
  }

  function deleteClient(id) {
    setClient((prevCans) => {
      return prevCans.filter((nodeItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <AddClient onAdd={addClient} />
      
      <table
        style={{margin:"15px",marginTop:"30px", width: "80%",alignItems:"center"}}
      >
        <tr style={{ color: "red" }}>
          <th>Name </th>
          <th>Domain </th>
          <th>Location</th>
          <th>Consulting Person</th>
          <th>Contact Number</th>

        </tr>

        {client.map((Item, index) => {
          return (
            
            
              <tr>
                <td>{Item.name} </td>
                <td>{Item.domain} </td>
                <td>{Item.location} </td>
                <td>{Item.consultant} </td>
                <td>{Item.contact} </td>

                <td>
                  <button className="btn btn-sm" onClick={() => deleteClient(index)}>Delete</button>
                </td>
              </tr>
            
          );
        })}
      </table>
    </div>
  );
}
