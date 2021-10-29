import React, { useEffect, useState } from 'react';
import './Container.scss'

function Container(props) {
  let bgData = props.background;
  const [style, setStyle] = useState()

  useEffect(()=>{
    if(bgData && bgData.indexOf("/") > -1){
      setStyle(
        <style dangerouslySetInnerHTML={{
          __html: [
            `#${props.childId}::before {`,
            `  background-image: url("${bgData}");`,
            `}`
            ].join('\n')
          }}>
        </style>
      )
    } else if(bgData) {
      setStyle(
        <style dangerouslySetInnerHTML={{
          __html: [
            `#${props.childId}::before {`,
            `  background-color: ${bgData};`,
            `}`
            ].join('\n')
          }}>
        </style>
      )
    }
  },[bgData])
  
  const dark = props.dark

  return (
    <>
      {style}
      <div id={props.childId} className={`container ${props.className ? props.className : ""}`} style={props.style}>
        {props.children}
      </div>
    </>
  );
}

export default Container;