import React from 'react';
import Navigation from "./Navigation"
const Contact = () => {
return(
  <div>
      <Navigation/>
      <section class="Material-contact-section section-padding section-dark">
      <div class="container">
          <div class="row">
              <div class="col-md-12 wow animated fadeInLeft" data-wow-delay=".2s">
                  <h1 class="section-title">Love to Hear From You</h1>
              </div>
          </div>
          <div class="row">
              <div class="col-md-6 mt-3 contact-widget-section2 wow animated fadeInLeft" data-wow-delay=".2s">
                <p>If you have any questions, please contact us</p>

                <div class="find-widget">
                 <b>Company:</b>  <a href="www.staffitsol.com">Staff IT Solutions Pvt Ltd</a>
                </div>
                <div class="find-widget">
                <b>Address:</b>1600 Golf Road, Suite# 1200
Rolling Meadows, IL 60008 USA
                </div>
                <div class="find-widget">
                <b>Phone:</b>  +1 (331) 684-4997
                </div>
                
                <div class="find-widget">
                  <b>India Address:</b>  Phase 8 B Industrial area.
Mohali tower, Mohali. 160032. INDIA
                </div>
                <div class="find-widget">
                  <b>Email Address:</b> Sales@staffitsol.com

                </div>
              </div></div></div></section>
                </div>
)
}

export default Contact