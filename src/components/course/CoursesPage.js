import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

class CoursesPage extends React.Component {
  render() {
    return (<div>
      Course
    </div>);
  }
}

function mapStateToProps() {
  return {

  }
}

export default connect(mapStateToProps)(CoursesPage);
