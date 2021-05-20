import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div id="navbar">
      <Link to="/">
        <div className="logo">
          <h3>Hublocker</h3>
        </div>
      </Link>
      <ul className="mid-links d-none d-md-flex">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Find a Locker</Link>
        </li>
        <li>
          <Link to="/">Size Guide</Link>
        </li>
        <li>
          <Link to="/">Locations</Link>
        </li>
        <li>
          <Link to="/">Help Center</Link>
        </li>
      </ul>
      <div>
        <ul className="d-none d-md-flex">
          <li>
            <Link to="/">My Account</Link>
          </li>
          <li>
            <a href="tel:080-188-0872">080-188-0872</a>
          </li>
          <li>
            <Link className="button-link" to="/">
              PAY YOUR BILL
            </Link>
          </li>
        </ul>
      </div>
      <i className="fas fa-bars fa-2x d-inline-block d-md-none"></i>
    </div>
  );
}
