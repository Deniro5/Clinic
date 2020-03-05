import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router-dom';

const awards = [
  {
    url: 'https://www.petalmd.com/hs-fs/hubfs/_PetalMD_Sept2018/Images/petalmd-about-channelinnovationawards2018.png?width=600&height=300&name=petalmd-about-channelinnovationawards2018.png',
    title: '2018 Channel Innovation Awards',
    description: 'Winner: Best Healthcare Solution',
  },
  {
    url: 'https://www.petalmd.com/hs-fs/hubfs/_PetalMD_Sept2018/Images/petalmd-about-medlysawards2018.png?width=600&height=300&name=petalmd-about-medlysawards2018.png',
    title: '2018 Digital Transformation Awards',
    description: 'Finalist: Artificial Intelligence Disruptorr',
  },
  {
    url: 'https://www.petalmd.com/hs-fs/hubfs/_PetalMD_Sept2018/Images/petalmd-about-healthinnovationawards.png?width=600&height=300&name=petalmd-about-healthinnovationawards.png',
    title: '2018 TELUS Health Innovation Gala',
    description: 'Winner: Optimizing Innovation Technology Award',
  },
  {
    url: 'https://www.petalmd.com/hs-fs/hubfs/_PetalMD_Sept2018/Images/petalmd-about-channelinnovationawards2018.png?width=600&height=300&name=petalmd-about-channelinnovationawards2018.png',
    title: '2018 Channel Innovation Awards',
    description: 'Winner: Best Healthcare Solution',
  },
  {
    url: 'https://www.petalmd.com/hs-fs/hubfs/_PetalMD_Sept2018/Images/petalmd-about-medlysawards2018.png?width=600&height=300&name=petalmd-about-medlysawards2018.png',
    title: '2018 Digital Transformation Awards',
    description: 'Finalist: Artificial Intelligence Disruptorr',
  },
  {
    url: 'https://www.petalmd.com/hs-fs/hubfs/_PetalMD_Sept2018/Images/petalmd-about-healthinnovationawards.png?width=600&height=300&name=petalmd-about-healthinnovationawards.png',
    title: '2018 TELUS Health Innovation Gala',
    description: 'Winner: Optimizing Innovation Technology Award',
  }
]

class AboutUs extends Component {

  reroute = (path) => {
    this.props.history.push(path);
  }

  render() {

    const renderAwardRecognition = (url, title, description) => (
        <div className="single-award-container">
          <img alt="" src={url} />
          <div className="award-description">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href="./about-us">Learn More</a>
          </div>
        </div>
    )

    return (
      <div className="about-us">
        <Grid
          container
          direction="row"
          justify="space-evenly"
          spacing={12}
          className="banner-container"
        >
          <Grid md={12} sm={12} xs={12} className="top-banner"
            container
            alignItems="center"
            justify="center">
              <div className="text-container">
                <h1>ABOUT OUR CLINIC</h1>
                <p>In collaboration with physicians and healthcare facility managers, PetalMD designs innovative cloud-based productivity tools and mobile applications that improve healthcare.</p>
              </div>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={12}
          className="custom-widget"
        >
          <Grid md={5} sm={5} xs={12} className="left-text"
            container
            alignItems="center"
            justify="center">
              <h2>Empowering Organizations to Provide the Best Care for Their Patients</h2>
              <p>Through actively listening to the needs of healthcare stakeholders, PetalMD has designed tools for physician scheduling, patient booking, on-call management, medical billing and secure messaging.</p>
              <p>Combined with actionable data, our solutions optimize hospital and medical clinic performance, improve access to healthcare and save valuable time for different stakeholders.</p>
          </Grid>
          <Grid md={7} sm={7} xs={12} className="widget-img"
            container
            alignItems="center"
            justify="center">
              <img alt="" src="https://www.petalmd.com/hubfs/_PetalMD_Sept2018/Images/petalbooking-tour/about-empoweringEN.jpg" />
          </Grid>
        </Grid> 
        <Grid
          container
          direction="row"
          justify="center"
          spacing={12}
          className="awards-recognition"
        >
          <Grid md={6} sm={6} xs={12}
            container
            alignItems="center"
            justify="center">
            <div className="title">
              Awards and Recognition
            </div>
            {awards.map(award => renderAwardRecognition(award.url, award.title, award.description))}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withRouter(AboutUs);
