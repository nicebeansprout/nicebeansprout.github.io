import React, { useEffect, useState } from "react";
import './App.scss';

function Socials() {

  return (
    <div id='socials' >
      <div className='links'>
        <a className="button" href="https://etsy.com/shop/nicebeansproutstudio" target="_blank" rel="noopener noreferrer">Etsy</a>
        <a className="button" href="https://ko-fi.com/nicebeansprout" target="_blank" rel="noopener noreferrer">Kofi</a>
        <a className="button" href="https://twitter.com/nicebeansprout" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </div>)
}

export default Socials;