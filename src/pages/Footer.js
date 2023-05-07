import React from "react";
import "./styles/Footer.css";
const Footer = () => {
  const isMobile = window.innerWidth < 600;
  return (
    <>
      <div className="footer">
        <div className="footer-box">
          <div className="footer-box-title">
            {/* <img src="/hackerstellar.webp" alt="" /> */}
            <h2>“We bid you Adieu”</h2>
          </div>
          <div className="footer-box-logo">
            <img
              src="/technext.png"
              alt="mail"
              style={{
                display: isMobile ? "none" : "block",
              }}
            />
            {/* <img src="/somaiya-two.png" alt="mail" />
            <img src="/somaiya-one.png" alt="mail" className="bakwaas" /> */}
          </div>
        </div>
        <div className="footer-contact">
          <h1>Any issues reach out to us </h1>
          <div className="footer-contact-socials">
            <li>
              <a href="https://www.instagram.com/i.s.h.i.k.a_24/">
                <i className="fa-brands fa-instagram icon"></i>
              </a>
              <a href="linkedin.com/in/ishika-jain-40777524a/">
                <i className="fa-brands fa-linkedin icon"></i>
              </a>
              {/* <a href="https://www.youtube.com/@csikjsce3963">
                <i className="fa-brands fa-youtube icon"></i>
              </a> */}
            </li>
          </div>
        </div>
        <div className="footer-copyright">
          <hr />
          <p> Made with 💖 | © 2023 rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
