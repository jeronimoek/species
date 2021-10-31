import React, { useEffect, useRef, useState } from 'react';
import './Insect.scss'
import Meanderer from 'meanderer';

function Insect(props) {
  const {path, width, height} = props.pathProps
  const [currentPath, setCurrentPath] = useState(path)
  const src = props.src
  const className = props.className
  const animationDelay = props.animationDelay ? props.animationDelay : "0s"

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  const pathProps = {
    path: path,
    width: width,
    height: height
  }
  const responsivePath = new Meanderer(pathProps)
  const divCont = useRef(null);
  useEffect(()=>{
    const scaledPath = responsivePath.generatePath(
      divCont.current.offsetWidth,
      divCont.current.offsetHeight
    )
    console.log(divCont.current.offsetWidth,divCont.current.offsetHeight)
    setCurrentPath(scaledPath)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[dimensions.width])

  return (
  <>
    <div className="insectMovingContainer" ref={divCont}>        
      <img src={src} alt="insect" className={className} style={{offsetPath: `path('${currentPath}')`, animationDelay: animationDelay}}/>
    </div>
  </>
  );
}

export default Insect;