import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Collapse from "@material-ui/core/Collapse";
import doctors from "../doctors-data";

class Doctors extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);
    doctors.forEach((doctors, index) => this.setState({ [index]: false }));
  }

  handleExpandClick(event, index) {
    this.setState({ [index]: !this.state[index] });
  }

  render() {
    const renderDoctor = (doctor, index) => {
      const { biography, name, picture, profession } = doctor;
      const expanded = this.state[index];

      return (
        <Grid item xs={12} md={4} className='doctors' index={index}>
          <Card>
            <Avatar className='avatar-img' src={picture} />
            <div className='name'>{name}</div>
            <div className='profession'>{profession}</div>
            <IconButton
              onClick={(e) => this.handleExpandClick(e, index)}
              aria-expanded={expanded}
              aria-label='show more'>
              {!expanded && (
                <div className='show-more-container'>
                  Show more
                  <ExpandMoreIcon />
                </div>
              )}
              {expanded && (
                <div className='show-more-container'>
                  Show Less
                  <ExpandLessIcon />
                </div>
              )}
            </IconButton>
            <Collapse in={expanded} timeout='auto' unmountOnExit>
              <CardContent>
                <Typography>{biography}</Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      );
    };

    return (
      <div className='doctors-container'>
        <h1> Meet some of our doctors</h1>
        <div className='border'> </div>
        <h4 className='header-subtitle'>
          Our ophthalmologists, optometrists and staff are committed to delivering a
          professional and enjoyable patient experience.
        </h4>
        <Grid container spacing={24}>
          {doctors.map((doctor, index) => renderDoctor(doctor, index))}
        </Grid>
      </div>
    );
  }
}

export default Doctors;
