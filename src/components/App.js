import React, {Fragment, Component } from 'react';
import {Router , Route , browserHistory} from "react-router";
import NavMenu from './nav-menu';  
import Home from './home';
import Doctors from './doctors'
import Careers from './careers';
import Footer from './footer';
import AboutUs from './about-us';
import Contact from './Contact';
import '../scss/app.scss';
import Department from './Department';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="app-container">
          <NavMenu/>
          <Router history = {browserHistory}>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/doctors" component={Doctors} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/careers" component={Careers} />
            <Route exact path="/contact-us" component={Contact} />
            <Route exact path="/departments" component={Department} />
          </Router>
          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default App;
