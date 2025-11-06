import React from "react";
import './director.css'
import ImgDirectory from './directory-sale.jpg'

const DirectorySaleQuery = () => {
  return (
    <section className="directory-query-section">
      <div className="directory-query-container">
        {/* Left: Query Form */}
        <div className="directory-form">
          <p className="query-subtitle">Have Questions?</p>
          <h2 className="query-title">Directory Sale Query</h2>

          <form className="query-form">
            <div className="form-row">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Phone" required />
              <input type="email" placeholder="Email" required />
            </div>
            <input type="text" placeholder="Address" className="full-width" required />
            <textarea placeholder="Message" rows="4" className="full-width"></textarea>

            <button type="submit" className="btn-submit">Send Message</button>
          </form>
        </div>

        {/* Right: Handbook Info */}
        <div className="directory-info">
          <div className="info-card">
            <img src={ImgDirectory} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorySaleQuery;
