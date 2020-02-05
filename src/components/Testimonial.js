import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';

class Testimonial extends Component {

  render(props) {

    return (
      <Fragment>
        <Grid container spacing={0} align = "center" className = "colorSquareGrid">
        <Grid item xs={12} sm = {12} md = {4}>
            <img alt = "" className = "testimonialImg" src = {this.props.img}/>
        </Grid>
        <Grid item xs={12} sm = {12} md = {8}>
            <p className = "testimonialText"> {this.props.text} </p>
            <p>  <b> {this.props.name} </b></p>
        </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default Testimonial;
