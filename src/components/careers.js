import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Imgwithtext from './Imgwithtext'

class Careers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      resumeFileName: "",
      cvFileName: ""
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  handleChange(e) {
    this.setState({name: e.target.value});
  }

  handleFileChange(event, type) {
    console.log(type)
    if (!event.target.files[0]) {
      return;
    }
    if (type === "cv")
    {
      this.setState({ cvFileName: event.target.files[0].name })
    } else {
      this.setState({ resumeFileName: event.target.files[0].name })
    }
  }

  render() {
    const applitcationForm = (
      <form onSubmit={(event) => this.handleSubmit(event)} className="application-form">
        <div className="full-name">
          <TextField
            label="First Name"
            onChange={(event) => this.handleChange(event)}
            className="input"
            required
          /> 
          <TextField
            label="Last Name"
            onChange={(event) => this.handleChange(event)}
            className="input"
            required
          />
        </div>
        <br/>
        <TextField  
          label="Email"
          onChange={(event) => this.handleChange(event)}
          className="input"
          required
        /> <br/>
        <TextField
          label="Phone"
          onChange={(event) => this.handleChange(event)}
          className="input"
          required
        /> <br/>
        <TextField
          label="Position you are applying for"
          onChange={(event) => this.handleChange(event)}
          className="input"
          required
        /> <br/>
        <TextField
          label="Portfolio website"
          onChange={(event) => this.handleChange(event)}
          className="input"
          required
        /> <br/>
        <div className="file-container">
          <input type="file" id="resume" onChange={(event) => this.handleFileChange(event, 'resume')} />
          <label for="resume">Upload Your resume</label>
          <span><p>{this.state.resumeFileName}</p></span>
        </div>
        <div className="file-container">
          <input type="file" id="cv" onChange={(event) => this.handleFileChange(event, 'cv')} />
          <label  for="cv">Upload Your CV</label>
          <span><p>{this.state.cvFileName}</p></span>
        </div>
        <TextField
          label="Additional comments (optional)"
          multiline={true}
          rows={8}
          className="input"
        /> <br/>
        <Button type="submit" color="primary" variant="contained">Submit</Button>
    </form>
  );

    return (
      <div className="job-application">
        <Imgwithtext src = "http://www.christiancountyhd.com/file/image/m/1920/619/6470214c-20e0-405c-a63b-6008443c953b" text = ""/>
        <Grid
          container
          justify="center"
          alignItems="center"
        >
          <div className="container" >
            <h1>Job Application Form</h1>
            <div className="border"> </div>
            <h4>A career with us means a place where your ideas are heard and valued.</h4>
            {applitcationForm}
          </div>
        </Grid>
      </div>
    );
  }
}

export default Careers;