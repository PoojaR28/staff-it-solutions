import React from 'react';
 import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Budget from "./Components/Budget";
import SignUp from "./Components/SignUp";
import Card from "./Components/Card";
import Button from "./Components/Button"
import Login from "./Components/Login"
import FirstPage from './Components/FirstPage';
import AddReminder from "./Components/AddReminder"
import Profile from './Components/Profile';
import MonthExpense from "./Components/MonthExpense";
import ExpenseNotification from './Components/ExpenseNotification';
import MonthList from './Components/MonthList';
import Candidate from './Components/Candidate';
import Client from './Components/Client';
import CandidateList from "./Components/CandidateList"
import ClientList from "./Components/ClientList"
import ReportList from "./Components/ReportList"
import Recruitment from "./Components/Recruitment"
import Contact from "./Components/Contact"
import TrialSignUp from "./Components/TrialSignUp"
function App(props) {
  return (
    <div> 
       <Router>
       <Switch>
       <Route exact path="/"><FirstPage/></Route>
       <Route  path="/Budget"><Budget/></Route>
       <Route  path="/Signup"><SignUp/></Route>
       <Route  path="/Card/:status/:user/:phone/:email/:exp/:date/:facebook/:linkedin/:instagram"><Card/></Route>
       <Route  path="/Login/:userName"><Login/></Route>
       <Route  path="/AddReminder"><AddReminder/></Route>
       {/* <Route  path="/Profile/:status/:userName/:phone/:email/:title/:company/:location"><Profile/></Route> */}
       <Route  path="/Recruitment"><Recruitment/></Route>
       <Route  path="/Contact"><Contact/></Route>

       {/* <Route  path="/Button/:userName"/> */}
       <Route  path="/Profile"><Profile/></Route>
       <Route  path="/Button/:status/:user/:phone/:email/:exp/:date/:facebook/:linkedin/:instagram"><Button/></Route>
       <Route  path="/Button"><Button/></Route>
       <Route  path="/MonthExpense"><MonthExpense/></Route>
       <Route  path="/ExpenseNotification"><ExpenseNotification/></Route>
       <Route  path="/MonthList"><MonthList/></Route>
       <Route  path="/Candidate"><Candidate/></Route>
       <Route  path="/Client"><Client/></Route>
       <Route  path="/Card"><Card/></Route>
       <Route  path="/CandidateList"><CandidateList/></Route>
       <Route  path="/ClientList"><ClientList/></Route>
<Route path="/ReportList/:name/:date/:accom/:queries/:myfile"><ReportList/></Route>
<Route  path="/TrialSignUp"><TrialSignUp/></Route>

       </Switch>
          </Router>
  </div>
  );
}

export default App;
