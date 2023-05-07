import React from "react";
import Stats from "../components/Stats";
import "./styles/About.css";
import ReactHtmlParser from "html-react-parser";
import data from "../data/about/about.json";

const About = (props) => {
  return (
    <div className="about_wrapper">
      <div className="about_text">
        <div className="about_heading">
          <h1>About</h1>
          {/* <img
            src="https://www.rohitandrahul.com/cdn/shop/files/love_dusk_home_page_BANNER_2-min.jpg?v=1680787827"
            alt=""
            className="about_logo"
          ></img> */}
        </div>
        <p className="about_content">
          {ReactHtmlParser(data.para_one)}
          <br />
          <br />
          {ReactHtmlParser(data.para_two)}
        </p>
      </div>
      <Stats current={props.current} />
    </div>
  );
};

export default About;
