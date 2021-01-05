import React from "react";
import Navigation from "./Navigation";
// import "./Signin.css";
import { Link } from "react-router-dom";
// import "./recruitment.css";

export default function Recruitment() {
  return (
    <div>
      <Navigation />

      <section class="landing">
        <div class="dark-overlay">
          <div class="landing-inner">
            <h1 class="x-large">Career Opportunities</h1>
            <h6 class="large">
              Are you ready for a new and exciting challenge? Please join STAFF
              IT SOLUTIONS and take your career to new heights.
            </h6>
            <p class="lead">
              At Staff IT Solutions, we build our solutions on the collective
              experience, customer successes and best practices of our
              technology experts. Our IT Staffing and Recruiting Practice offers
              a wide range of technical expertise​​ in serving clients with best
              in marketing strategies, providing high end consulting service.
              Sourcing and deploying highly skilled IT specialists in mainstream
              to meet client's temporary, permanent or contracting needs. We
              provide the best recruitment solutions for every assignment while
              ensuring quality, integrity, expertise at an affordable cost.
            </p>
          </div>
        </div>
      </section>
      <div class="box">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div class="box-part text-center">
                <div class="title">
                  <h4>IT STAFFING</h4>
                </div>

                <div class="text">
                  <span>
                    <ul style={{"list-style-type":"none"}}>
                      <li>Software Programmer</li>
                      <li>Technology Analyst</li>
                      <li>Web Development</li>
                      <li>Open Source Development</li>
                      <li>Mobile Development</li>
                      <li>Cloud Engineering</li>
                      <li>Business Analyst</li>
                      <li>QA Engineers</li>
                      <li>IT Leadership</li>
                    </ul>
                  </span>
                </div>

              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div class="box-part text-center">
                <div class="title">
                  <h4>Managed Services</h4>
                </div>

                <div class="text">
                  <span>
                    <ul style={{"list-style-type":"none"}}>
                      <li>Helpdesk and Desktop Support</li>
                      <li>Enterprise Service</li>
                      <li>Systems and Network Managements</li>
                      <li>IT Advisory Services</li>
                      <li>IT Budgeting</li>
                      <li>Virtual CIO Management</li>
                      <li>Trend Management</li>
                      <li>Technology Roadmap</li>
                      <li>Monitoring/Reporting</li>
                    </ul>
                  </span>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div class="box-part text-center">
                <i class="fa fa-facebook fa-3x" aria-hidden="true"></i>

                <div class="title">
                  <h4>Outsourcing</h4>
                </div>

                <div class="text">
                  <span>
                    <ul style={{"list-style-type":"none"}}>
                      <li>Software Development & Maintenance</li>
                      <li>Business Process Outsourcing (BO)</li>
                      <li>Dedicated IT Team</li>
                      <li>System Administration</li>
                      <li>Database Administration</li>
                      <li>Document Processing</li>
                      <li>Offshore Software Development</li>
                      <li>Application Support</li>
                      <li>Maintenance teams</li>
                    </ul>
                  </span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
