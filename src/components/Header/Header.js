import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { APP_NAME } from './../../constants';
/**
 * Header Component
 * @class
 * @return {Class} - Rendered Header Component
 */
class Header extends Component {
  render() {
    const {pathname} = document.location;
    return (
      <div className="row">
        <header className="d-flex w-100 justify-content-center bg-primary border-bottom">
          <nav className="col-12 col-lg-10 navbar navbar-dark bg-primary navbar-expand-sm">
            <Link to="/" className="navbar-brand">
              <strong>{APP_NAME}</strong>
            </Link>
            <div className="navbar-collapse">
              <div className="navbar-nav">
                <Link to="/admin"
                  className={`nav-item nav-link ${pathname === "/admin" ? 'active':''}`}>Admin</Link>
              </div>
            </div>
          </nav>
        </header>
      </div>
    )
  }
}

export default Header;
