import React from 'react';
import Navbar from './Navbar';
import girl from '../Assets/girl.png'

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="left-sidebar">
        {/* Left Sidebar Content */}
      </div>
      <div className="main-section">
        <Navbar /> {/* Render Navbar component */}
        <h2>Our Products</h2> {/* Add the h2 title below the Navbar */}
        <img src={girl} alt="Girl" className="img-fluid d-block mx-auto mb-4" style={{ maxWidth: '500px' }} /> {/* Add the image */}
        <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
          <div className="col">
            <div className="card" style={{ marginLeft: '10px', marginRight: '10px' }}>
              <div className="card-body">
                <h5 className="card-title">Salary Advance</h5>
                <p className="card-text">Need some cash at the middle of the month? </p>
                <button className="btn btn-primary">Apply Now</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ marginLeft: '10px', marginRight: '10px' }}>
              <div className="card-body">
                <h5 className="card-title">SME Loan</h5>
                <p className="card-text">Grow your business with our SME loan.</p>
                <button className="btn btn-primary">Apply Now</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ marginLeft: '10px', marginRight: '10px' }}>
              <div className="card-body">
                <h5 className="card-title">Logbook Loan</h5>
                <p className="card-text">Use your logbook as collateral to access funds</p>
                <button className="btn btn-primary">Apply Now</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ marginLeft: '10px', marginRight: '10px' }}>
              <div className="card-body">
                <h5 className="card-title">Shop Online</h5>
                <p className="card-text">Choose from a wide range of products</p>
                <button className="btn btn-primary">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
