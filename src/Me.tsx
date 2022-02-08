import React, { useEffect, useState } from 'react';
import './App.scss';

function debounce(fn: Function, ms: number) {
  let timer: any;
  return () => {
    clearTimeout(timer)
    timer = setTimeout(_ => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  };
}

function Me(props)  {
  const [eyesStyles, setEyesStyles] = useState({
    transform: 'none'
  });

  const [isMouthOpened, setIsMouthOpened] = useState(false);
  const [canvasStyles, setCanvasStyles] = useState({
    left: 0,
    width: 500,
    height: 500
  });
  const [spriteStyles, setSpriteStyles] = useState({
    left: 0,
    width: 1500,
    height: 500
  });


  // mount
  useEffect(() => {
    getCanvasStyles();
    getSpriteStyles();
  }, []);

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      getCanvasStyles();
      getSpriteStyles();
      // setInterval(() => {
      //   blinkAnimation();
      // }, 5500);
    }, 500);

    window.addEventListener('resize', debouncedHandleResize);
    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    }
  });

	function calculateEyes(e: React.MouseEvent) {
		var maxLeft = 45;
		var maxTop = 20;

		var x, y;

		var mouseX = e.clientX;
		var mouseY = e.clientY;

		var windowW = window.innerWidth;
		var windowH = window.innerHeight;

		var ratioX = maxLeft / windowW;
		var ratioY = maxTop / windowH;

		x = (mouseX * ratioX);
		y = (mouseY * ratioY);
		
		setEyesPosition({
			x,
      y
		})
	}

  function getSpriteStyles() {
		const defaultWidth = 1500;
		const defaultHeight = 607;
		const defaultRatio = defaultWidth/ defaultHeight;

		var meHeight = window.innerHeight  * 0.7;
		var meWidth = meHeight * defaultRatio

    if (window.innerHeight> window.innerWidth) {
      let ratio = defaultHeight / defaultWidth;
      meWidth = meHeight * 3 * 0.7
      meHeight = meWidth * ratio;
    }

		setSpriteStyles({
      left: spriteStyles.left,
			width: meWidth,
			height: meHeight,
			// bottom: mePosition
		});

  }

  function getEyes(w, h) {
    const defaultX = 88;
    const defaultY = 210;
    const defaultW = 263;
    const defaultH = 110;

    // canvasStyles.width;
    // canvasStyles.height;

    const ratio = w/h;
    let x =  defaultX * ratio;
    let y =  defaultY * ratio
    setEyesStyles({
      transform: 'scale('+ ratio + ')',
      left: x,
      top: y,
    })
  }

	function getCanvasStyles() {
		const defaultWidth = 500;
		const defaultHeight = 607;
		const defaultRatio = defaultWidth/ defaultHeight;

		// var userOnPortfolio = this.state.scrollIndex === 1;
		// var mePosition = -50;
		// if (userOnPortfolio) {
		// 	if (this.state.activePortfolio !== 1) {
		// 		mePosition = -800;
		// 	} 
		// 	else {
		// 		mePosition = -280;
		// 	}
		// }

		var meHeight = window.innerHeight  * 0.7;
		var meWidth = meHeight * defaultRatio

    if (window.innerHeight> window.innerWidth) {
      let ratio = defaultHeight / defaultWidth;
      meWidth = meHeight * 0.7
      meHeight = meWidth * ratio;
    }


		setCanvasStyles({
			left: (window.innerWidth / 2 ) - meWidth / 2,
			width: meWidth,
			height: meHeight,
			// bottom: mePosition
		});

    getEyes(meWidth, meHeight);
	}

	function  resetEyes(): void {
		// setEyesPosition({x: 20, y: 10});
	}
	
	function blinkAnimation(): void {
		var x = spriteStyles.left;
		const speed = 100;
		const interval = setInterval(() => {
			if (x > - canvasStyles.width * 2) {
				x = x - canvasStyles.width;
			} else {
				x = 0;
				clearInterval(interval);
			}
			setSpriteStyles({
        left: x,
        width: spriteStyles.width,
        height: spriteStyles.height
      });
		}, speed)
	}

  function getMouthState(): string {
		return isMouthOpened ? 'surprised' : '';
	}

  function getPosition() {
    if (props.activePortfolio === 1){
      return 35;
    } else if (props.activePortfolio === -1) {
      return 0
    } else {
      return 100
    }
  }


  return (
  <div 
    id='calculableMe' 
    onMouseOver={() => setIsMouthOpened(true)} 
    onMouseOut={() => setIsMouthOpened(false)}
    style={canvasStyles}
  >
    {/* <div id='#canblink'>
    <div id='mouth' className={getMouthState()}></div>
    <div id='me' style={spriteStyles}/>
    <div id='eyesContainer' style={eyesStyles}>
      <div id='eyes' style={{}}/>
    </div>
    </div> */}
    <div id='cantblink' style={{transform: 'translateY(' + getPosition() + '%)'}}></div>
  </div>);
};

export default Me;