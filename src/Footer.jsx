import React from 'react'
import footer from './footer.png'

function Footer() {
  return (
    <div className="footer">

      <div className="footer-top">

        <div className="col">
          <p>About us</p>
          <p>We're hiring</p>
          <p>Hire interns for your company</p>
          <p>Post a Job</p>
        </div>

        <div className="col">
          <p>Team Diary</p>
          <p>Blog</p>
          <p>Our Services</p>
        </div>

        <div className="col">
          <p>Terms & Conditions</p>
          <p>Privacy</p>
          <p>Contact us</p>
        </div>

        <div className="col">
          <p>Sitemap</p>
          <p>College TPO registration</p>
          <p>List of Companies</p>
        </div>

      </div>

      <div className="footer-bottom">


        <div className="bottom-left">
          <img src={footer} alt="footer" className="footer-img" />
        </div>

        <div className="bottom-right">
          <p>© Copyright 2025 Internshala</p>
          <p>(Scholiverse Educare Private Limited)</p>
        </div>

      </div>

    </div>
  )
}

export default Footer
