import React,{useState} from 'react';
import FormPreview from "./FormPreview"
import ReportList from "./ReportList"

export default function Report() {
    const [reports, setReports] = useState([]);

    function addReport(newReport) {
      setReports(prevReports => {
        return [...prevReports, newReport];
      });
    }
  
    function deleteReport(id) {
      setReports(prevReports => {
        return prevReports.filter((reportItem, index) => {
          return index !== id;
        });
      });
    }
    return (
        <div>
            <nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <a class="nav-item nav-link active" id="nav-preview-tab" data-toggle="tab" href="#nav-preview" role="tab" aria-controls="nav-preview" aria-selected="true">Preview</a>

    </div>
</nav>
<div class="tab-content" id="nav-tabContent">

<div class="container-fluid" style={{margin:"0",padding:"0"}}>
  <h1>Daily Reports</h1>
    <FormPreview onAdd={addReport} />
    {/* <table style={{ width: "1000px", alignItems: "center"}}> */}
    <h1>List of Reports</h1>
    {reports.map((reportItem, index) => {

return (
  <ReportList
    key={index}
    id={index}
    name={reportItem.name}
    date={reportItem.date}
    content={reportItem.content}
    queries={reportItem.queries}
    myfile={reportItem.myfile}

    onDelete={deleteReport}
  />

);
})}

{/* </table> */}
</div>
</div>
  </div>


    );
}