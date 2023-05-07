import React, { useEffect, useState } from "react";
import "../components/styles/LeftNavbar.css";
import data from "../data/components/LeftNavbar.json";

const LeftNavbar = (props) => {
  const [text, setText] = useState("");
  useEffect(() => {
    setText(data[props.current]);
  }, [props]);

  return (
    <>
      <div className="left-navbar">
        <h1 className="left-navbar_title">{text}</h1>
        <div
          className="left-navbar_menu"
          style={
            props.current === "footer"
              ? { visibility: "hidden" }
              : { visibility: "visible" }
          }
        >
          <li>
            {/* <a href="mailto:csi-kjsce@somaiya.edu">
              <i className="fa-regular fa-envelope icon"></i>
            </a> */}
          </li>
          <li>
            <a href="https://www.instagram.com/i.s.h.i.k.a_24/">
              <i className="fa-brands fa-instagram icon"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ishika-jain-40777524a/">
              <i className="fa-brands fa-linkedin icon"></i>
            </a>
          </li>
        </div>
      </div>
    </>
  );
};

export default LeftNavbar;
