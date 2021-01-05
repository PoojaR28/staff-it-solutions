import React from 'react'
import Subnav from "./SubNavigation"

export default function Candidate() {
    return (
        <div >
        <Subnav/>
        <div class="container"> 
           <div class="row">
	    <div class="col-lg-12">
	        <table  class="table table-bordered">
            <thead>
	                <tr>
	                    <th class="col-lg-2 text-center">Name</th>
	                    <th class="col-lg-2 text-center">Designation</th>
	                    <th class="col-lg-4 text-center">Address</th>
                        <th class="col-lg-2 text-center">Rate</th>
	                    <th class="col-lg-2text-center">Actions</th>
	                </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <th><input id="name" type="text" class="col-lg-2 form-control" /></th>
                    <th><input id="name" type="text" class="col-lg-2 form-control" /></th>
                    <th><input id="name" type="text" class="col-lg-4 form-control" /></th>
                    <th><input id="name" type="text" class="col-lg-2 form-control" /></th>
                    <th><input id="name" type="text" class="col-lg-2 form-control" /></th>
                    </tr>
                    </tbody>

	        </table>
	    </div>
	</div>
</div>
</div>
    )
}
