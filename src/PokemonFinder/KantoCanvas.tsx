import React, { useEffect, useRef } from 'react';
import kantoRoutes, { PokemonRouteData, ROUTE_TYPE } from './data/pokeRoutes/kanto';

type KantoCanvasProps = {
  activeRoutes: string[];
}

interface RouteRenderType extends PokemonRouteData {
  isActive: boolean;
}

function draw(ctx: CanvasRenderingContext2D, route: RouteRenderType) {
  let p = new Path2D(route.svg_data);
  ctx.lineWidth = 10;
  ctx.strokeStyle = route.type === ROUTE_TYPE.Sea ? "blue" : "yellow";
  if (route.isActive) {
    ctx.shadowColor = 'red';
    ctx.shadowBlur = 15;
  } else {
    ctx.shadowColor = 'rgba(0,0,0,0)';
    ctx.shadowBlur = 0;
  }
  ctx.translate(route.location.x, route.location.y);
  ctx.stroke(p);
  ctx.setTransform(1, 0, 0, 1, 0, 0);
}

function KantoCanvas(props: KantoCanvasProps) {
  const CANVAS_H = 1448;
  const CANVAS_W = 2048;

  const canvasRef = useRef(null);

  // TODO
  // - draw landmarks like caves, forests, cities

  useEffect(() => {
    const canvas: any = canvasRef.current;
    if (canvas) {
      const context: CanvasRenderingContext2D = canvas.getContext('2d');
      context.clearRect(0, 0, canvas.width, canvas.height);
      kantoRoutes.forEach(route => {
        draw(context, {...route, isActive: props.activeRoutes.findIndex(r => r === route.id) > 0})
      });
    }
  });


  return (
    <canvas 
      className='pokemon-map-canvas'
      ref={canvasRef} 
      id='kanto-canvas' 
      width={CANVAS_W} 
      height={CANVAS_H}
    />
  );
}

export default KantoCanvas;