import React,{useState} from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import {Link} from "react-router-dom"

const Reportlist = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

    function handleClick() {
      props.onDelete(props.id);
    }
  
return(
  
     
<div>
<Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>{props.date}</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
          <h6><b>Employee name:</b>{props.name}</h6>
          <h6><b>Accomplishment:</b>{props.content}</h6>
          <h6><b>Queries:</b>{props.queries}</h6>
          <p><b>Attachment:</b><Link to={`${props.myfile}`}>{props.myfile}</Link></p>
          <button className="btn btn-outline-primary" onClick={handleClick} style={{borderRadius:"8px"}}>Delete</button>
          </CardBody>
        </Card>
      </Collapse>      
  </div>
     
    
)
}

export default Reportlist