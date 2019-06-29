import React, { Component } from 'react';
import { connect } from 'react-redux';

class MainScreen extends Component {


  render() {
 
    return (
      <div>
      Main

      </div>
    );
  }
}

const mapStateToProps = () => {
  return {  }
}

export default connect( mapStateToProps, null)(MainScreen);