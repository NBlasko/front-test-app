import React from 'react';
import { NavLink, withRouter } from 'react-router-dom'
import MaterialIcon, { colorPalette } from 'material-icons-react';
import PropTypes from 'prop-types';

const Navbar = (props) => {
  const { pathname } = props.location;

  let naviLinks = null;

  if (pathname !== "/main")
    naviLinks =
      <ul className="home-nav">
        <li><NavLink exact to="/">
          <MaterialIcon icon="home" />
        </NavLink></li>
        <li><NavLink to='/main'>
          <MaterialIcon icon="category" /> Play
      </NavLink></li>
      </ul>;

  if (pathname === "/results")
    naviLinks =
      <NavLink exact to="/" className="results-nav">Finish</NavLink>;

  return (
    <div id = "navbar">
      {naviLinks}
    </div>
  )
}

Navbar.propTypes = {
  location: PropTypes.object.isRequired,
}

export default withRouter(Navbar)