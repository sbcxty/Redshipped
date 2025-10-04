import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

function Main() {
  return (
      <div className="main">
        <div className="nav">
          <p>Redshipped AI</p>
          <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
          <div className="greet">
            <p><span>Hello, Dev</span></p>
            <p>What do you want to learn today?</p>
          </div>
          <div className="cards">
            <div className="card">
              <p>How does microgravity affect human muscle and bone strength during long-term space missions?</p>
              <img src={assets.compass_icon} alt="" /> 
            </div>
             <div className="card">
              <p>What challenges do plants face when growing in space, and how can they be adapted for space farming?</p>
              <img src={assets.bulb_icon} alt="" /> 
            </div>
             <div className="card">
              <p>How does space radiation impact astronauts’ DNA and overall health?</p>
              <img src={assets.message_icon} alt="" /> 
            </div>
             <div className="card">
              <p>How does living in space affect astronauts’ sleep and circadian rhythms?</p>
              <img src={assets.code_icon} alt="" /> 
            </div>
          </div>

          <div className="main-buttom">
            <div className="search-box">
              <input type="text" placeholder='Enter a prompt here'/>
              <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img src={assets.send_icon} alt="" />
              </div>
            </div>
            <p className="bottom-info">Redshipped AI may produce inaccurate info, so double-check its responses. </p>
          </div>
        </div>
      </div>
  )
}

export default Main
