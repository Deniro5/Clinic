import React, {Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import DoctorIcon from '@material-ui/icons/AccountBox';
import ContactIcon from '@material-ui/icons/ContactSupport';
import CareerIcon from '@material-ui/icons/Work'
import { withStyles } from '@material-ui/core/styles';


const styles = {

  root: {
      width: '100%',
      maxWidth: 360,
      height: '100vh',   
      background:'#3366CC',
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  listItemText: {
    color: 'white',
  },
  icon: {
    color: "white",
  }
};


class NavMenu extends Component {
 
  state = {
    right: false,
  };

  reroute = (path) => {
    this.props.history.push(path);
  }

  toggleDrawer = (open) => () => {
    this.setState({
      right: open,
    });
  };

  render(props) {

    const { classes } = this.props;

    //Mobile menu
    const sideList = (
      <div style={styles.root}>
      <List component="nav">
        <ListItem button onClick = {this.reroute.bind(this, "/")}>
          <ListItemIcon>
          <HomeIcon className = {classes.icon} />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.listItemText }} primary="Home" />
        </ListItem>
        <ListItem button onClick = {this.reroute.bind(this, "/about-us")}>
          <ListItemIcon>
            <InfoIcon className = {classes.icon} />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.listItemText }}  primary="About Us" />
        </ListItem>
        <ListItem button onClick = {this.reroute.bind(this, "/doctors")}>
          <ListItemIcon>
            <DoctorIcon className = {classes.icon} />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.listItemText }}  primary="Doctors" />
        </ListItem>
        <ListItem button onClick = {this.reroute.bind(this, "/departments")}>
          <ListItemIcon>
            <InboxIcon className = {classes.icon} />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.listItemText }}  primary="Departments" />
        </ListItem>
        <ListItem button onClick = {this.reroute.bind(this, "/careers")}>
          <ListItemIcon>
            <CareerIcon className = {classes.icon} />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.listItemText }}  primary="Careers" />
        </ListItem>
        <ListItem button onClick = {this.reroute.bind(this, "/contact-us")}>
          <ListItemIcon>
            <ContactIcon className = {classes.icon} />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.listItemText }}  primary="Contact Us" />
        </ListItem>
        
      </List>
    </div>
  );

    return (
       <div className="nav-menu-1">
       <Grid container spacing={0} align = "center">
          <Grid item xs={6} sm = {4} md = {4} lg = {6}>
              <img onClick = {this.reroute.bind(this,"/")} alt ="logo" className = "navLogo" src = "imgs/logo.png"/>
          </Grid>
          <Grid item xs={6} sm = {8} md = {8} lg = {6}>
              <Hidden smDown>
              <list className = "navList">
                <li onClick = {this.reroute.bind(this, "/")}> Home </li> 
                <li onClick = {this.reroute.bind(this, "/about-us")}> About Us </li>
                <li onClick = {this.reroute.bind(this, "/doctors")}> Doctors  </li>
                <li onClick = {this.reroute.bind(this, "/departments")}> Departments </li>
                <li onClick = {this.reroute.bind(this, "/careers")}> Careers </li>
                <li onClick = {this.reroute.bind(this, "/contact-us")}> Contact Us </li>
              </list>
              </Hidden>
              <Hidden mdUp>
                <img alt = "" className= "navMenu" onClick={this.toggleDrawer(true)} src = "imgs/menu.png"/>
                <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer(false)}>
                  <div
                    tabIndex={0}
                    role="button"
                    onClick={this.toggleDrawer(false)}
                    onKeyDown={this.toggleDrawer(false)}
                    >
                    {sideList}
                  </div>
                </Drawer>
              </Hidden>
          </Grid>
       </Grid>
     </div>
    );
  }
}

NavMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withRouter(withStyles(styles)(NavMenu));
