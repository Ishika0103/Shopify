import React, { useState, useEffect } from "react";
import "./styles/Prizes.css";
import data from "../data/prizes/prizes.json";

const Prize = (props) => {
  return (
    <>
      <div className="domain_child">
        <div className="prizes_title_2">{props.domain}</div>
        <div className="prizes_subtitle">INR {props.prize}k+</div>
        <div className="prizes_card_content">{props.desc}</div>
      </div>
    </>
  );
};
const Prizes = () => {
  return (
    <>
      <div className="prizes">
        <div className="prizes_title">
          <h1>DESIGNS</h1>
          <p>
            {" "}
            <span>&gt;</span> CHECKOUT <span>&lt;</span>{" "}
          </p>
        </div>
        <div className="prizes_main_div">
          <div className="prizes_galactic_genius">
            <div className="prizes_gg_wrapper">
              <div className="prizes_gg_title">MEN'S WEAR </div>
              <div className="prizes_gg_content">CHECK OUT </div>
            </div>
            <div className="prizes_gg_subtitle">$$$</div>
          </div>
          <div className="prizes_domains">
            {data.map((item) => {
              return (
                <Prize
                  key={item.title}
                  domain={item.domain}
                  prize={item.prize}
                  desc={item.desc}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Prizes;
