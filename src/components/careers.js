import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Imgwithtext from "./Imgwithtext";

class Careers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      resumeFileName: "",
      cvFileName: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  handleFileChange(event, type) {
    console.log(type);
    if (!event.target.files[0]) {
      return;
    }
    if (type === "cv") {
      this.setState({ cvFileName: event.target.files[0].name });
    } else {
      this.setState({ resumeFileName: event.target.files[0].name });
    }
  }

  render() {
    const applicationForm = (
      <form onSubmit={(event) => this.handleSubmit(event)} className='application-form'>
        <div className='full-name'>
          <TextField
            label='First Name'
            onChange={(event) => this.handleChange(event)}
            className='input'
            required
            variant={"outlined"}
          />
          <TextField
            label='Last Name'
            onChange={(event) => this.handleChange(event)}
            className='input'
            required
            variant={"outlined"}
          />
        </div>
        <br />
        <TextField
          label='Email'
          onChange={(event) => this.handleChange(event)}
          className='input'
          required
          variant={"outlined"}
        />
        <br />
        <TextField
          label='Phone'
          onChange={(event) => this.handleChange(event)}
          className='input'
          required
          variant={"outlined"}
        />
        <br />
        <TextField
          label='Position you are applying for'
          onChange={(event) => this.handleChange(event)}
          className='input'
          required
          variant={"outlined"}
        />
        <br />
        <TextField
          label='Portfolio website'
          onChange={(event) => this.handleChange(event)}
          className='input'
          required
          variant={"outlined"}
        />
        <br />
        <div className='file-container'>
          <input
            type='file'
            id='resume'
            onChange={(event) => this.handleFileChange(event, "resume")}
          />
          <label for='resume'>Upload Your resume</label>
          {this.state.resumeFileName.length > 0 && (
            <p style={{ marginTop: "25px", marginLeft: "-20px" }}>
              Resume: {this.state.resumeFileName}
            </p>
          )}
        </div>
        <TextField
          label='Additional comments (optional)'
          multiline={true}
          rows={8}
          className='input'
          variant={"outlined"}
        />
        <br />
        <button
          type='submit'
          className='button'
          style={{ margin: "auto", display: "block" }}>
          Submit
        </button>
      </form>
    );

    return (
      <div className='job-application'>
        <Imgwithtext src='imgs/careers.jpg' text='' />
        <Grid container justify='center' alignItems='center'>
          <div className='container'>
            <h1>Job Application Form</h1>
            <div className='border'> </div>
            <h4>A career with us means a place where your ideas are heard and valued.</h4>
            {applicationForm}
          </div>
        </Grid>
      </div>
    );
  }
}

export default Careers;
