import React, { useEffect, useState } from "react";
import './App.scss';

function Landing() {

  const [greeting, setGreeting] = useState('Hello');

  useEffect(() => {
    setGreeting(getGreeting());
  }, []);


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
    <div id='landing' className='page-container'>
      <div id='greetings'>
        <h1>{greeting}!</h1>
        <div className='links'>
          <a className="button" href="https://etsy.com/shop/nicebeansproutstudio" target="_blank" rel="noopener noreferrer">Etsy</a>
          <a className="button" href="https://ko-fi.com/nicebeansprout" target="_blank" rel="noopener noreferrer">Kofi</a>
          <a className="button" href="https://twitter.com/nicebeansprout" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </div>)
}

export default Landing;