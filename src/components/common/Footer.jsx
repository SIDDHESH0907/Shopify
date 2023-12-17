import React from "react";
import './Footer.css'
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  const iconSize = 25;
  const iconColor = "#172330";
  const githubLink = "https://github.com/SIDDHESH0907";
  const linkedinLink = "https://www.linkedin.com/in/siddhesh-gaonkar";
  const instagramLink = "https://www.instagram.com/siddhesh_gaonkar_0907";
  return (
    <>
      <hr className="footer-hr" />

      <div className="footer">
        <div className="footer-left">
          <div>Privacy Policy</div>
          <div>Terms & Conditions</div>
          <div>About</div>
        </div>
        <div className="footer-mid">
          <div className="footer-icons">
            <FaInstagram size={iconSize} style={{ color: iconColor }} />
          </div>
          <div className="footer-icons">
            <FaGithub size={iconSize} style={{ color: iconColor }} />
          </div>
          <div className="footer-icons">
            <FaLinkedin size={iconSize} style={{ color: iconColor }} />
          </div>
        </div>
        <div className="footer-right">
          <div>Shipping Info</div>
          <div>Returns / Exchanges</div>
          <div>Contact</div>
        </div>
      </div>
      <div className="footer-2023">@2023</div>
    </>
  );
}

export default Footer;
