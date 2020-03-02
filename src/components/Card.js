import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';


const styles = theme => ({
  card: {
    width:"100%",
    maxWidth: 270,
    marginTop:50,
    height:330,
  },
  media: {
    height: 225,
    width:"100%"
  },
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
  
        <CardMedia
          className={classes.media}
          image={this.props.src}
        />
        <CardContent>
          <p> <b> {this.props.position} </b> </p>
          <p> {this.props.name} </p>
        </CardContent>
    
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);