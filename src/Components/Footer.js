import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div class="footer_container">
          <div class="logo">
            <p>YouTube</p>
          </div>
          <div class="social_media">
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fab fa-youtube"></i>
            </a>
            <a href="#">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
          <p>Abhi © 2022 All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
