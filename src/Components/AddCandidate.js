import React,{useState} from 'react';

export default function AddCandidate(props){
   
        const [list, setList] = useState({
           name:"",
            designation:"",
            contact:"",
            email:"",
            location:""

        });
    
        function handleChange(event){
            const {name,value}=event.target;
            
            setList(prevList =>{
                return{
                    ...prevList,
                    [name]:value
                }
                    
                
            });
            }
    
            function handleSubmit(event){
                event.preventDefault();
               
                setList({
                 
                    name:"",
                    designation:"",
                    contact:"",
                    email:"",
                    location:""
              
                })
                props.onAdd(list);
    
            }
    
      return (
        <div >
          <h1 style={{margin:"0",padding:"0",fontSize:"25px"}}>List of Candidates</h1>
          {/* <div class="container">
            <div class="row justify-content-md-center"> */}
              <table style={{ width: "975px", alignItems:"center", textAlign:"center"}}>
                
                <tr>
                  <th>
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={list.name}
                     onChange={handleChange}
                    />
                  </th>
                  <th>
                  <input
                  type="text"
                  placeholder="Designation"
                      name="designation"
                      value={list.designation}
                     onChange={handleChange}
                    />
                  </th>
                  <th>
                  <input
                  type="text"
                  placeholder="Contact Number"
                      name="contact"
                      value={list.contact}
                     onChange={handleChange}
                    />
                  </th>
                  <th>
                  <input
                  type="text"
                  placeholder="Email"
                      name="email"
                      value={list.email}
                     onChange={handleChange}
                    />
                  </th>
                  <th>
                  <input
                  type="text"
                  placeholder="Location"
                      name="location"
                      value={list.location}
                     onChange={handleChange}
                    />
                  </th>
                  </tr>
              </table>
                  
                    <button 
                    type="button"
                    className="btn btn-block btn-primary"
                    style={{display:"flex",alignItems:"center",justifyContent:"center"}}
                    onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  
               
              </div>
    )
}