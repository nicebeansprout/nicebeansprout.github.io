import React, { useEffect, useState } from 'react';
import './App.scss';
import './MeAnim.scss';

// function debounce(fn: Function, ms: number) {
//   let timer: any;
//   return () => {
//     clearTimeout(timer)
//     timer = setTimeout(_ => {
//       timer = null
//       // @ts-ignore
//       fn.apply(this, arguments)
//     }, ms)
//   };
// }

function Me()  {
  const [isMouthOpened, setIsMouthOpened] = useState(false);
  const [blinking, setBlinking] = useState(false);
  const [canvasStyles, setCanvasStyles] = useState({
    left: 0,
    width: 500,
    height: 607
  });

  // mount
  useEffect(() => {
    setInterval(() => {
      setBlinking(true);
      setTimeout(() => {
        setBlinking(false);
      },290) 
    }, 5500);
  }, []);

  function getMouthState(): string {
		return isMouthOpened ? 'surprised' : '';
	}

  return (
  <div 
    id='calculableMe' 
    onMouseOver={() => setIsMouthOpened(true)} 
    onMouseOut={() => setIsMouthOpened(false)}
    style={canvasStyles}
  >
    <div id='canblink'>
      <div id='mouth' className={getMouthState()}></div>
      <div id='me' className={`bg-sprite bg-sprite--me bg-sprite--me${blinking ? '--playing': ''}`}/>
      <div id='eyesContainer'>
        <div id='eyes'/>
      </div>
    </div>
  </div>);
};

export default Me;