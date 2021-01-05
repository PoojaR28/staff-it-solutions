import React,{useState} from "react";
import "./form.css"

function FormPreview(props) {

  const [report,setReport]=useState({
    name:"",
    date:"",
    content:"",
    queries:"",
    myfile:""
  });

  function handleChange(event){
    const { name, value } = event.target;

    setReport(prevReport => {
      return {
        ...prevReport,
        [name]: value
      };
    });
  }

  function submitChange(event){
    event.preventDefault();
    props.onAdd(report);
setReport({
  name:"",
    date:"",
    content:"",
    queries:"",
    myfile:""
})
  }

  return (
    <div>
      <form className="preview" onSubmit={submitChange}>
      <label for="myname">Employee Name:</label>        
      <input  id="myname" name="name" className="enter-input" value={report.name} onChange={handleChange}/>
        <label for="mydate">Enter date:</label>        
        <input type="date" name="date" className="enter-input" value={report.date} onChange={handleChange}/>
        <label for="myaccom">Today's Accomplishment:</label>        
        <textarea name="content" id="myaccom" rows="6" cols="15" className="enter-input" value={report.content} onChange={handleChange}/>
        <label for="mycomment">Queries/Comments:</label>        
        <textarea name="queries" id="mycomment" rows="4" cols="15" className="enter-input" value={report.queries} onChange={handleChange}/>
        <label for="myfile">Attach file:</label>        
        <input type="file" id="myfile" name="myfile" className="enter-input" value={report.myfile} onChange={handleChange}/>
        {/* <Link
          className="btn btn-primary"
          to={`/ReportList/${report.name}/${report.date}/${report.content}/${report.queries}/${report.myfile}`}
        > */}
                  <button className="btn-class" onClick={submitChange}>Add</button>

        {/* </Link> */}
      </form>
    </div>
  );

}

export default FormPreview;