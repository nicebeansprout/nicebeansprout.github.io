
import React, { useState } from 'react';
import WebWorks from './WebWorks';
import ArtWorks from './ArtWorks';
// @ts-ignore
import ReactModal from 'react-modal';

function Portfolio(props) {
  const [isModalOpend, setIsModalOpened] = useState(false);

  function toggleAboutModal() {
    setIsModalOpened(!isModalOpend);
  }

  function getPortfolioCenterHeight(): number {
		return window.innerHeight - 300;
	}

  return (
  <div id='portfolio-hub' className={'page-container active-page-' + props.activePage}>
    <div id='portfolio-art' className='portfolio-page'>
      <ArtWorks/>
      <div className="returnToCenter" onClick={() => props.setActivePortfolio(1)}>x</div>
    </div>
    <div id='portfolio-center' className='portfolio-page' style={{height: getPortfolioCenterHeight()}}>
      <div id='artlink' 
      className='portfolio-link'onClick={() => props.setActivePortfolio(0)}>Art Works</div>
      <div id='devlink' className='portfolio-link' 
      onClick={() => props.setActivePortfolio(2)}>Dev Works</div>
      <div id='aboutlink' className='portfolio-link' onClick={() => toggleAboutModal()}>About Me</div>
    </div>
    <div id='portfolio-dev' className='portfolio-page'>
      <WebWorks />
      <div className="returnToCenter" onClick={() => props.setActivePortfolio(1)}>x</div>
    </div>
    <ReactModal 
      isOpen={isModalOpend} 
      onRequestClose={() => toggleAboutModal()} 
      parentSelector={() => document.querySelector('#root')}
      className="aboutMeModal"
      closeTimeoutMS={300}
      ariaHideApp={false}
      >
      <h1>Hello!</h1>
      <p>Hi! My name is Lookmai. I'm a frontend developer as well as digital illustrator. Currently my commission is opened via <a href="https://ko-fi.com/nicebeansprout" target='blank' rel='noopener noreferrer'>Kofi</a> and an <a href="https://etsy.com/shop/nicebeansprout" target='blank' rel='noopener noreferrer'>Etsy store</a> where I sell my custom made merchandise! I also stream on Twitch sometime over at <a href="https://twitch.tv/nicebeansprout" target='blank' rel='noopener noreferrer'>twitch.tv/nicebeansprout</a>.</p>
      <p>If you're interested in working with me, please feel free to contact me via twitter <a href="https://twitter.com/nicebeansprout" target='blank' rel='noopener noreferrer'>@nicebeansprout</a> or email me at nicebeansprout@gmail.com.</p>
      <p>Thank you for visiting. Hope you have a wonderful rest of the day :)</p>
    </ReactModal>
  </div>
  );
}

export default Portfolio;