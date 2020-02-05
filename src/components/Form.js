import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = {
 
  };



class TextFields extends React.Component {
    state = {

    };

   


  render(props) {  
   
    //notes
    //- The inner grid is the actual review part, the outer grid helps us center it
    //- All of the text should be loaded from a db that has review info (like fate does)
    //- NO CSS REQUIRED, theres alot of inlines
      
      return (
        <Fragment>
   <Grid container spacing={24} align = "center" style = {{marginTop:30}} >
<Grid item xs={12} sm={1} style = {{marginTop:70}}>
    </Grid>     
    <Grid item xs={12} sm={3}>
         <p style = {{fontWeight:"bolder"}}> Deniro </p>
         <p> Ajax, ON </p>
         <p> September 19th 2018</p>
    </Grid>
    <Grid item xs={12} sm={7}>
        <p style = {{fontWeight:"bolder"}}> Title  </p>
        <p style = {{color: "black"}}> This is a review of this review component. This review component is pretty good. </p>
    </Grid>
    <Grid item xs={12} sm={1}>
    </Grid>
    <Grid item xs={12} sm={12}>
        <hr style = {{width:"90%"}}/>
    </Grid>
    </Grid>
    </Fragment>
     );
}

}
TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(TextFields);


