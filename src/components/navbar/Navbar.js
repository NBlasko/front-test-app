import React from 'react';
import { NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
  const { pathname } = props.location;
  let naviLinks = null;
  if (pathname !== "/main")
    naviLinks = <ul>
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink to='/main'>Main</NavLink></li>
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