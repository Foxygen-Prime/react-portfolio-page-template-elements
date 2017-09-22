import React, { Component } from 'react';

import {NavLink} from 'react-router-dom';


export default class BaseLayout extends Component {
  render() {
    return (
    <div>
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

          <a className="navbar-brand" href="#">Navbar</a>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">

    <ul className="navbar-nav">

      <li className="nav-item active">
        <NavLink activeClassName="selected" className="nav-link" exact to="/">Welcome Home</NavLink>

      </li>

      <li>
        <NavLink activeClassName="selected" className="nav-link" to="/About">About Me</NavLink>
      </li>

      <li className="nav-item">
        <NavLink activeClassName="selected" className="nav-link" to="/Portfolio">Portfolio</NavLink>
      </li>

      <li className="nav-item">
        <NavLink activeClassName="selected" className="nav-link" to="/Contact">Contact</NavLink>
      </li>

      <li className="nav-item">
        <NavLink activeClassName="selected" className="nav-link" to="/References">References</NavLink>
      </li>

    </ul>

  </div>
</nav>


        {this.props.children}

    </div>
    );
  }
}
