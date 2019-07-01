import React from 'react';
import { NavLink, withRouter } from 'react-router-dom'
import MaterialIcon /*, { colorPalette } */ from 'material-icons-react';
import PropTypes from 'prop-types';

const Navbar = (props) => {
  const { pathname } = props.location;

  let naviLinks = null;

  if (pathname !== "/main")
    naviLinks =
      <div className="home-nav">
        <NavLink exact to="/">
          <span className="home-span">
            <MaterialIcon icon="home" color='#fff' />
          </span>
        </NavLink>
        <NavLink to='/main'>
          <span className="main-span" >
            <MaterialIcon icon="category" color="#078B4F" />
            <span> Play</span>
          </span>
        </NavLink>
      </div>;

  if (pathname === "/results")
    naviLinks =
      <NavLink exact to="/" className="results-nav" >Finish</NavLink>;

  return (
    <div id="navbar" >
      {naviLinks}
    </div>
  )
}

Navbar.propTypes = {
  location: PropTypes.object.isRequired,
}

export default withRouter(Navbar)