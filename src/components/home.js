import React, { Component, Fragment } from 'react';
import Slideshow from './Slideshow';
import Hours from './Hours';
import Colorsquare from './Colorsquare';
import Testimonial from './Testimonial';
import Card from './Card'; 
import Grid from '@material-ui/core/Grid';

class Home extends Component {
  render() {

    return (
      <Fragment>
        <Slideshow/>
        <h1> What we are offering</h1>
        <div className="border-home"> </div>
        <h4> Our ophthalmologists, optometrists and staff are committed to delivering a professional and enjoyable patient experience. </h4>
        <Grid container spacing={0} align = "center" className = "colorSquareGrid">
        <Grid item xs={12} sm = {6} md = {3}>
            <Colorsquare title = "Physiology" color = "teal" body = "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."/>
        </Grid>
        <Grid item xs={12} sm = {6} md = {3}>
            <Colorsquare title = "Cardiology" color = "purple" body = "Et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."/>
        </Grid>
        <Grid item xs={12} sm = {6} md = {3}>
            <Colorsquare title = "Dental" color = "steelblue" body = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta."/>
        </Grid>
        <Grid item xs={12} sm = {6} md = {3}>
            <Colorsquare title = "Rehab" color = "darkred" body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."/>
        </Grid>
        </Grid>
        <Grid container spacing={0} align = "center" className = "middleGrid">
        <Grid item xs={12} sm = {6} md = {8}>
            <Testimonial text = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." name="- Christopher Greene (Patient)" img="imgs/profile1.jpg" />
            <hr/>
            <Testimonial text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud." name="- Linda Smith (Patient)" img="imgs/profile.jpg"/>
            <hr/>
            <Testimonial text = "Et iusto odio dignissimos quas molestias ducimus qui blanditiis ut enim ad minim  praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident." name="- Shannon Forrest (Patient)" img="imgs/profile2.jpg"/>
        </Grid>
        <Grid item xs={12} sm = {6} md = {4}>
            <Hours/>
        </Grid>
        </Grid>
        <h1> Our Doctors</h1>
        <div className="border"> </div>
        <h5> Our ophthalmologists, optometrists and staff are committed to delivering a professional and enjoyable patient experience. </h5>
        <Grid container spacing={0} align = "center" className = "doctorGrid">
            <Grid item xs={12} sm = {6} md = {4}>
                <Card position = "Cardiologist" name = "John Adams" src = "imgs/doctor1.jpg"/>
            </Grid>
            <Grid item xs={12} sm = {6} md = {4}>
                <Card position = "Physician" name = "Emily Baker"  src = "imgs/doctor2.jpg"/>
            </Grid>
            <Grid item xs={12} sm = {6} md = {4}>
               <Card position = "Dermatologist" name = "Robert Clark" src = "imgs/doctor4.jpg"/>
            </Grid>
            <Grid item xs={12} sm = {6} md = {4}>
                <Card position = "Neurologist" name = "Kylie Smith"  src = "imgs/doctor6.jpg"/>
            </Grid>
            <Grid item xs={12} sm = {6} md = {4}>
                <Card position = "Surgeon" name = "James Davis"  src = "imgs/doctor3.jpg"/>
            </Grid>
            <Grid item xs={12} sm = {6} md = {4}>
               <Card position = "Anesthesiologist" name = "Sarah Jones"  src = "imgs/doctor5.jpg"/>
            </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default Home;
