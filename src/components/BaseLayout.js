import React, { Component } from 'react';

import {NavLink} from 'react-router-dom';


export default class BaseLayout extends Component {
  render() {
    return (
      <div>
          <nav className="row navbar navbar-inverse">
            <div className="container-fluid">
            <div className="navbar-header">
            <ul className="nav navbar-nav">
              <li>
                <NavLink activeClassName="selected" className="nav-link" exact to="/">Welcome Home</NavLink>
              </li>
              <li>
                <NavLink activeClassName="selected" className="nav-link" to="/About">About Me</NavLink>
              </li>
              <li>
                <NavLink activeClassName="selected" className="nav-link" to="/Portfolio">Portfolio</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

        {this.props.children}

    </div>
    );
  }
}
