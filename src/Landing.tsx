import React, { useEffect, useState } from "react";
import './App.scss';
import './PageTransition.scss'
// @ts-ignore
import ReactModal from 'react-modal';
import Me from "./Me";
import Socials from './Socials';

function Landing() {

  const [greeting, setGreeting] = useState('Hello');
  const [isModalOpend, setIsModalOpened] = useState(false);

  useEffect(() => {
    setGreeting(getGreeting());
  }, []);


  function toggleAboutModal() {
    setIsModalOpened(!isModalOpend);
  }

	function getGreeting(): string {
		var date = new Date();
		var time = date.getHours();
		var greeting = "Hello";

		if (time > 3 && time < 12){
			greeting = "Good morning"
		}
		else if (time >= 12 && time < 18){
			greeting = "Good afternoon"
		}
		
		else if (time >= 18 || time <= 3){
			greeting = "Good evening"
		}
		return greeting
	}

  return (
    <div id='landing' className='page-container page'>
      <div id='greetings'>
        <h1>{greeting}!</h1>
        <div>
          <a href='/#/art' id='artlink' className="button">Art Works</a>
          <div id='aboutlink'className="button" onClick={() => toggleAboutModal()}>About Me</div>
          <a href='/#/dev' id='devlink' className="button">Dev Works</a>
        </div>
      </div>
		  <Me />
      <Socials/>
      <ReactModal 
        isOpen={isModalOpend}
        onRequestClose={() => toggleAboutModal()} 
        parentSelector={() => document.querySelector('#root')}
        className="aboutMeModal"
        closeTimeoutMS={0}
        ariaHideApp={false}
        overlayElement={(props: any, children: any) => <div className='aboutMeOverlay' onClick={()=> toggleAboutModal()}>{children}</div>}
        >
        <h1>Hello!</h1>
        <p>Hi! My name is Lookmai. I'm a frontend developer as well as digital illustrator. Currently my commission is opened via <a href="https://ko-fi.com/nicebeansprout" target='blank' rel='noopener noreferrer'>Kofi</a> and an <a href="https://etsy.com/shop/nicebeansprout" target='blank' rel='noopener noreferrer'>Etsy store</a> where I sell my custom made merchandise! I also stream on Twitch sometime over at <a href="https://twitch.tv/nicebeansprout" target='blank' rel='noopener noreferrer'>twitch.tv/nicebeansprout</a>.</p>
        <p>If you're interested in working with me, please feel free to contact me via twitter <a href="https://twitter.com/nicebeansprout" target='blank' rel='noopener noreferrer'>@nicebeansprout</a> or email me at nicebeansprout@gmail.com.</p>
        <p>Thank you for visiting. Hope you have a wonderful rest of the day :)</p>
      </ReactModal>
    </div>)
}

export default Landing;