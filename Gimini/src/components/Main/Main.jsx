import React from "react";
import { assets } from "../../assets/assets";
import "./main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gimini</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main_container">
        <div className="greet">
          <p>
            <span>Hello, Ankit</span>
          </p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Plan a low-carb meal with what's available in my fridge</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Teach me the concept of game theory in simple terms</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Generate an image and a bedtime story</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Help me plan a game night with 5 friends</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        <div className="main_bottom">
          <div className="search_box">
            <input type="text" placeholder="Enter a prompt here" />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom_info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy & Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};
export default Main;
