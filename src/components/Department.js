import React, { Component } from 'react';
import Imgwithtext from './Imgwithtext'
import Grid from '@material-ui/core/Grid';

var images = ["imgs/physiologydepartment.jpg", "imgs/cardiologydepartment.jpg", "imgs/dentaldepartment.jpg", "imgs/rehabdepartment.jpg",]
var departmentNames = ["Physiology", "Cardiology", "Dental", "Rehab"]
var departmentDescriptions = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
  "Et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum consectetur adipiscing elit, deleniti exercitation ullamco laboris nisi ut aliquip ex atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
  "Sed ut perspiciatis unde omnis iste natus error sit exercitation ullamco laboris nisi ut aliquip ex consectetur adipiscing elit, voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse sint occaecati exercitation ullamco laboris nisi ut aliquip ex cupiditate cillum consectetur adipiscing elit, totam rem aperiam dolore eu fugiat nulla pariatur."]

var iconDescriptions1 = ["Aenean leo ipsum, lacinia sit amet sapien ut, consequat feugiat nunc. Duis sodales leo vehicula felis elementum condimentum. Maecenas ultrices, massa vel condimentum posuere, libero justo dignissim orci, vitae accumsan neque justo vitae ex. Quisque lacinia, nisi vel eleifend tincidunt, nibh quam fringilla ante, eu pharetra lacus lacus at est.", "Ut ut magna lacus. Morbi eget risus interdum sem iaculis ullamcorper. Sed ac massa tincidunt ante consequat facilisis pretium sodales massa. Ut turpis felis, sagittis a imperdiet nec, vehicula vel ante. Nulla dapibus dictum nibh, id suscipit ex molestie in. Vivamus laoreet, tortor suscipit venenatis volutpat, enim risus posuere ante.", "Aenean vehicula tempus mattis. Nunc maximus aliquet lectus, in dictum leo aliquam ac. Mauris sed aliquam tellus. Duis ante augue, bibendum et aliquam in, luctus eu ante. Integer massa quam, suscipit eu fermentum et, finibus sit amet sem. Sed ullamcorper lacus sit amet porttitor finibus. Nullam ex enim, malesuada at. "]
var iconDescriptions2 = ["Morbi sed turpis convallis, malesuada nisi in, viverra sem. Cras varius gravida velit, a ornare nisl elementum et. Ut dictum, nulla eget fermentum rhoncus, metus ante iaculis dolor, laoreet sagittis tortor neque eget massa. Nulla eu ex ut neque tempus ornare id eu quam. Cras ut placerat sapien. Mauris sapien. ", "In ex augue, vehicula sit amet eros ut, scelerisque ornare justo. Maecenas sollicitudin dui et dolor dignissim, at aliquam arcu posuere. Phasellus id ex vitae elit sagittis condimentum. Phasellus aliquam, diam ac mollis varius, lectus mi vehicula libero, fermentum cursus quam tellus ut lacus. Vivamus tincidunt congue venenatis. Cras et. ", "Sed mollis a quam vitae euismod. Nulla a urna ut tortor laoreet venenatis. Curabitur fermentum laoreet pretium. Nunc vestibulum dolor vitae erat aliquet, non sagittis ante placerat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam auctor porta risus eget efficitur. Morbi venenatis volutpat sollicitudin."]
var iconDescriptions3 = ["Phasellus vitae tellus tortor. Donec finibus lobortis justo eu gravida. Integer dignissim mi eu eros vulputate consectetur. Aliquam viverra purus eget condimentum tristique. Sed convallis, odio in varius luctus, ex mi tincidunt neque, eget ornare orci lacus sed ante. Mauris ac est a tortor molestie sodales quis et odio. Suspendisse.", "Vestibulum odio sem, tempor vel libero non, tristique convallis est. Curabitur at condimentum est. In sit amet enim at ligula luctus mattis eu ut ante. Vestibulum sed dolor vestibulum, ultrices ante id, convallis tellus. Sed dapibus, dolor vitae feugiat maximus, quam nunc consectetur turpis, vitae dignissim risus enim sed tellus.", "Morbi in faucibus odio. In aliquet turpis eleifend justo blandit tincidunt. Nam congue consequat ex, ut tempus nulla tempus luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris eleifend vulputate elit id ultrices. Duis imperdiet, ex ut placerat pretium, lacus sem rhoncus ante, nec sollicitudin nisl ligula."]
var iconDescriptions4 = ["Maecenas consequat ante diam, ut pretium augue efficitur a. Phasellus in venenatis quam. Morbi sit amet eleifend elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam risus massa, auctor nec bibendum pretium, viverra non purus. Mauris suscipit turpis dictum, ullamcorper ligula et, lobortis sem. Vivamus pretium, velit.", "Cras et malesuada erat, ut interdum tortor. Suspendisse at volutpat ligula. Aenean lectus massa, sagittis quis aliquam sit amet, ultricies vel dolor. Donec accumsan tempus leo nec aliquam. Ut a arcu cursus libero fermentum tincidunt. Etiam quis velit ultrices, eleifend dolor in, suscipit diam. Aliquam luctus quis lacus sit amet. ", "Proin ut ornare ante. Fusce in euismod erat, vitae dignissim risus. Morbi accumsan sed est in vulputate. Aliquam ultricies dictum mauris, eu dictum neque facilisis nec. Aenean pretium elementum est, nec accumsan magna lacinia vel. Sed consequat vel nulla nec suscipit. In suscipit ullamcorper mauris non congue. Proin rhoncus dictum. "]
var iconDescriptions = [iconDescriptions1, iconDescriptions2, iconDescriptions3, iconDescriptions4]

class Department extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curr: 0
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  setCurr(newcurr) {
    this.setState({
      curr: newcurr
    })
  }

  render(props) {
    var tabclasses = ["tab", "tab", "tab", "tab"];
    tabclasses[this.state.curr] += " selectedTab"

    return (
      <div className="departmentContainer">
        <Imgwithtext src="imgs/department.jpg" text="" />
        <h1> Our Departments</h1>
        <div className="border"> </div>
        <h4> Learn more about our state of the art teams. </h4>
        <div className="tabContainer">
          <p onClick={this.setCurr.bind(this, 0)} className={tabclasses[0]}> Physiology </p>
          <p onClick={this.setCurr.bind(this, 1)} className={tabclasses[1]}> Cardiology </p>
          <p onClick={this.setCurr.bind(this, 2)} className={tabclasses[2]}> Dental </p>
          <p onClick={this.setCurr.bind(this, 3)} className={tabclasses[3]}> Rehab </p>
          <div className="tabContent">
            <div className="tabImageContainer">
              <img alt="departmentimage" className="tabImage" src={images[this.state.curr]} />
              <div className="tabImageOverlay">
                <h1> {departmentNames[this.state.curr]} </h1>
                <p> {departmentDescriptions[this.state.curr]} </p>
              </div>
            </div>
            <Grid container spacing={0} align="center">
              <Grid item xs={12} sm={4} md={4}>
                <div className="tabSecondaryContent">
                  <div className="tabCircleContainer">

                    <img alt="icon1" src="imgs/departmenticon1.png" />
                  </div>
                  <p> SAMPLE TITLE </p>
                  <p> {iconDescriptions[this.state.curr][0]} </p>
                </div>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <div className="tabSecondaryContent">
                  <div className="tabCircleContainer">
                    <img alt="icon2" src="imgs/departmenticon2.png" />
                  </div>
                  <p> SAMPLE TITLE </p>
                  <p> {iconDescriptions[this.state.curr][1]}  </p>
                </div>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <div className="tabSecondaryContent">
                  <div className="tabCircleContainer">
                    <img alt="icon3" src="imgs/departmenticon3.png" />
                  </div>
                  <p> SAMPLE TITLE </p>
                  <p> {iconDescriptions[this.state.curr][2]} </p>
                </div>
              </Grid>
            </Grid>

          </div>
        </div>
      </div>
    );
  }
}

export default Department;
