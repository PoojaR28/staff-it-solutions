import React from 'react';
import Reminder from "./Reminder";
import ReminderNotification from "./ReminderNotification";
import CandidateList from "./CandidateList";
import ClientList from "./ClientList"


export default function Board() {
    return (
        <div>
            <nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Reminder</a>
    <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Calender</a>
    <a class="nav-item nav-link" id="nav-candidate-tab" data-toggle="tab" href="#nav-candidate" role="tab" aria-controls="nav-candidate" aria-selected="false">Candidates</a>
    <a class="nav-item nav-link" id="nav-client-tab" data-toggle="tab" href="#nav-client" role="tab" aria-controls="nav-client" aria-selected="false">Clients</a>

  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><ReminderNotification/></div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"><Reminder/></div>
  <div class="tab-pane fade" id="nav-candidate" role="tabpanel" aria-labelledby="nav-candidate-tab"><CandidateList/></div>
  <div class="tab-pane fade" id="nav-client" role="tabpanel" aria-labelledby="nav-client-tab"><ClientList/></div>

</div>
        </div>
    )
}
