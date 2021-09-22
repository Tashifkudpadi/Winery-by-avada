import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="firstSec"></div>
      <div className="secSection">
        <div className="first">
          <ul>
            <li>
              <a href="#" className="active">
                HOME
              </a>
            </li>
            <li>
              <a href="#">HOME ALTERNATE</a>
            </li>
            <li>
              <a href="#">VINEYARD</a>
            </li>
            <li>
              <a href="#">DISTRIBUTORS</a>
            </li>
            <li>
              <a href="#">BUY ONLINE</a>
            </li>
            <li>
              <a href="#">BLOG</a>
            </li>
            <li>
              <a href="#">CONTACT US</a>
            </li>
          </ul>
        </div>
        <div className="second">
          <ul>
            <li>
              <a href="#">CART </a>
            </li>
            <li>
              <a href="#">MY ACCOUNT</a>
            </li>
            <li>
              <a href="#">PRIVACY POLICY</a>
            </li>
            <li>
              <a href="#">TERMS OF SERVICE</a>
            </li>
          </ul>
        </div>
        <div className="third">
          <h2>Subscribe & Save</h2>
          <input type="text" />
          <span>Subscribe Now</span>
        </div>
      </div>
      <div className="thirdSec">
        <img
          src="https://avada.theme-fusion.com/winery/wp-content/uploads/sites/150/2020/11/footer-card-logos-400x41.png"
          alt=""
        />
        <p>
          © Copyright 2012 - 2021 | Avada Theme by ThemeFusion | All Rights
          Reserved | Powered by WordPress | Designed by{" "}
          <a href="https://www.linkedin.com/in/tashif-kudpadi-b4464b1b9/">
            Tashif
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
