import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = {
 
  };



class Imgwithtext extends React.Component {
    state = {

    };


  render(props) {  
   
      return (
         <Fragment>
            <div class="textImgContainer">
              <img src={this.props.src} alt="Snow" style={{width:"100%", maxHeight:340, minHeight:180}}/>
              <div className="textImgCentered">
                <p> {this.props.text} </p>
              </div>
            </div>
         </Fragment>
     );
}

}
Imgwithtext.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Imgwithtext);
