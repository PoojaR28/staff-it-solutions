import React, { useState } from "react";
import AddCandidate from "./AddCandidate";

export default function CandidateList() {
  const [candidate, setcandidate] = useState([]);

  function addCandidate(newCan) {
    console.log(newCan);
    setcandidate((prevNotes) => {
      return [...prevNotes, newCan];
    });
  }

  function deleteCandidate(id) {
    setcandidate((prevCans) => {
      return prevCans.filter((nodeItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <AddCandidate onAdd={addCandidate} />
      
      <table
        style={{margin:"15px",marginTop:"30px", width: "80%",alignItems:"center"}}
      >
        <tr style={{ color: "red" }}>
          <th>Name </th>
          <th>Designation </th>
          <th>Contact Number </th>
          <th>Email Address</th>
          <th>Location</th>

        </tr>

        {candidate.map((Item, index) => {
          return (
            
              <tr>
                <td>{Item.name} </td>
                <td>{Item.designation} </td>
                <td>{Item.contact} </td>
                <td>{Item.email} </td>
                <td>{Item.location} </td>

                <td>
                  <button className="btn btn-sm" onClick={() => deleteCandidate(index)}>Delete</button>
                </td>
              </tr>
          );
        })}
      </table>
    </div>
  );
}
