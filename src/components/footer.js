import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Grid
          container
          className="footer-grid"
        >
          <Grid item xs={12} sm={4} md={4}>
            <div className="footer-columns"> 
              <div className="footer-header"> 
                Contact Details
              </div>
              <div className="footer-items">
                <ul>
                  <li>
                    <div className="contact-icon">
                      <LocationOnIcon /> 
                      <span className="contact-label">{"340 King St E \n Toronto, ON M5A 1K8"}</span>
                    </div>
                  </li>
                  <li>
                    <div className="contact-icon">
                      <MailOutlineIcon />
                      <span className="contact-label">info@Healthcare.com</span>
                    </div>
                  </li>
                  <li>
                    <div className="contact-icon">
                      <PhoneIcon />
                      <span className="contact-label">+1-416-555-0166</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border"> </div>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
          <div className="footer-columns"> 
            <div className="footer-header"> 
                Quick Links
              </div>
              <div className="footer-items">
                <ul>
                  <li> <a href="/home">Home</a> </li>
                  <li> <a href="/about-us">About Us</a>  </li>
                  <li> <a href="/doctors">Doctors</a>  </li>
                  <li> <a href="/departments">Departments</a> </li>
                  <li> <a href="/careers">Careers</a> </li>
                  <li> <a href="/contact-us">Contact Us</a> </li>
                </ul>
              </div>
            </div>
            <div className="border"> </div>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
          <div className="footer-columns"> 
            <div className="footer-header"> 
                Opening Hours
              </div>
              <div className="footer-items">
                <ul>
                  <li> Monday-Friday: 9am to 5pm</li>
                  <li> Saturday: 10am to 2pm</li>
                  <li> Sunday: Closed </li>
                </ul>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12} className="copyright">
          <div className="copyright"> 
            HEALTHCARE © COPYRIGHT 2017. ALL RIGHTS RESERVED.
          </div>
        </Grid>
      </div>
    );
  }
}

export default Footer;
