import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render: function () {
    return (
      <div className="page">
        <ul id="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/foo/contact">Contact</Link></li>
        </ul>
        <h2>This goes on every page</h2>
        {this.props.children}
        <Link to="/users/5">Michael</Link>
      </div>
    )
  }
})