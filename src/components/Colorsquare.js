import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Colorsquare extends Component {
  render(props) {
    return (
      <div className='colorSquare' style={{ backgroundColor: this.props.color }}>
        <p className='colorSquareTitle'> {this.props.title} </p>
        <p className='colorSquareDivider'>_______________________</p>
        <p className='colorSquareBody'> {this.props.body}</p>
        <button
          style={{ backgroundColor: this.props.color }}
          className='colorSquareBtn'
          onClick={() => this.props.history.push("/departments")}>
          Learn More
        </button>
      </div>
    );
  }
}

export default withRouter(Colorsquare);
