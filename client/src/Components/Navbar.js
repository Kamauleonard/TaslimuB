import React from 'react';
import logo from '../Assets/Taslimu.png';

const Navbar = () => {
  return (
    <nav style={{ height: '15vh', width: '100%' }} className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={logo} alt="Taslimu Logo" style={{ height: '100px', marginRight: '10px' }} />
          <span className="fs-4">Taslimu Credit</span> {/* Larger text */}
        </a>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active fs-5" aria-current="page" href="#">Home</a> {/* Larger text */}
            </li>
            <li className="nav-item">
              <a className="nav-link active fs-5" aria-current="page" href="#">Username</a> {/* Larger text */}
            </li>
            <li className="nav-item">
              <a className="nav-link active fs-5" aria-current="page" href="#">My Account</a> {/* Larger text */}
            </li>
            <li className="nav-item">
              <a className="nav-link active fs-5" aria-current="page" href="#">Logout</a> {/* Larger text */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
