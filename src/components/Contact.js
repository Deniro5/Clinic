import React, { Component } from "react";
import Imgwithtext from "./Imgwithtext";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  render(props) {
    return (
      <div className='contactContainer'>
        <Imgwithtext src='imgs/contact.jpg' text='' />
        <h1> Get in Touch</h1>
        <div className='border'> </div>
        <h4>
          Please fill out the form below if you have any questions. We will respond as
          soon as possible.
        </h4>
        <Grid container spacing={0} align='center' className='contactGrid'>
          <Grid item xs={12} sm={6} md={6} className='leftGrid'>
            <div className='inputContainer'>
              <TextField
                label='Name'
                onChange={(event) => this.handleChange(event)}
                className='input'
                variant='outlined'
                required
              />
              <TextField
                label='Your Email Address'
                onChange={(event) => this.handleChange(event)}
                className='input'
                variant='outlined'
                required
              />
              <TextField
                label='Message'
                onChange={(event) => this.handleChange(event)}
                multiline={true}
                rows={5}
                className='input'
                variant='outlined'
                required
              />
              <button className='button'> Submit </button>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <div className='address'>
              <p>
                <b>Fake Clinic</b>
              </p>
              <p> 1000 Fake Road, Unit 10</p>
              <p> Faketown, Ontario</p>
              <p> L12 734</p>
              <p> Canada</p>
              <br />
              <p>
                <b>Phone:</b> 905-123-4567
              </p>
              <p>
                <b>Fax:</b> 231-132-4127
              </p>
              <p>
                <b>Email:</b> fakeinfo@healthcare.com
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Contact;
