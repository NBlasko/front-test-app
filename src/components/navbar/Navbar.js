import React from 'react';
import { NavLink, withRouter } from 'react-router-dom'
import MaterialIcon, { colorPalette } from 'material-icons-react';

const Navbar = (props) => {
  const { pathname } = props.location;
  let naviLinks = null;
  if (pathname !== "/main")
    naviLinks = <ul>
      <li><NavLink exact to="/">
        <MaterialIcon icon="home" />
      </NavLink></li>
      <li><NavLink to='/main'>
      <MaterialIcon icon="category" /> Play
      </NavLink></li>
    </ul>;

  if (pathname === "/results")
    naviLinks = <NavLink exact to="/">Finish</NavLink>;

  return (
    <div >
      {naviLinks}
    </div>
  )
}
export default withRouter(Navbar)