import { Button } from 'antd';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { HEADER_ROUTES } from '../../App';
import RouteContext from '../../context/RouteProvider';
import Container from './Container';
import './Home.scss';
import Meanderer from 'meanderer';

function Home(props) {
  
  const history = useHistory();
  const match = useContext(RouteContext).match
  const pushDomain = (path) => {
    let url = match.url
    history.push(`${url}${path}`)
  }
  
  const setHeaderRoute = props.setHeaderRoute
  useEffect(() => {
    setHeaderRoute(HEADER_ROUTES.HOME)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  })

  const [dimensions, setDimensions] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  React.useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  const initPath = "M 0 20.507 C 42.823 2.413 88.058 10.455 135.706 44.632 C 170.976 69.931 231.692 71.941 317.853 50.663 C 343.8 44.255 378.38 46.869 421.592 58.504 Q 460.03 68.854 501.206 58.504"
  const [path, setPath] = useState(initPath)
  const pathProps = {
    path: initPath,
    width: 501.206,
    height: 54.132
  }
  const responsivePath = new Meanderer(pathProps)
  const divCont = useRef(null);
  useEffect(()=>{
    const scaledPath = responsivePath.generatePath(
      divCont.current.offsetWidth,
      divCont.current.offsetHeight
    )
    console.log(divCont.current.offsetWidth,divCont.current.offsetHeight)
    setPath(scaledPath)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[dimensions.width])

  return (
    <div>
      <Container childId="heroCont" background="https://www.sanfernando.gob.ar/images/contenido/201809/5bad272db8d3b_Flora-y-Fauna-ciervo-de-los-pantanos-II.jpg">
        <div className="hero">
          <h1 className="title grow">Descubrí Entre Ríos</h1>
          <h2 className="subtitle grow">Investigá su Fauna y Flora</h2>
        </div>
      </Container>
      <Container childId="exploreSectCont">
        <div className="exploreSect">
          <div className="exploreSectTextCont">
            <h1 className="subtitle">Explorá las especies registradas</h1>
            <p className="exploreSectText">
              Si necesitas ayuda a la hora de reconocer la especie de un insecto que tienes cerca, utilizando nuestra herramienta de exploración puedes ver que especies han sido registradas en tus alrededores.
              Gracias a una base de datos creada por científicos y colaboradores de toda la provincia, nuestra web puede ayudarte a reconocer en segundos el insecto que buscas.
            </p>
            <div className="exploreBtnCont">
              <Button type="primary" onClick={()=>pushDomain("explore")} className="exploreBtn">Explorar</Button>
            </div>
          </div>
          <div className="exploreSecImgCont">
            <img className="exploreSecImg" src="http://www.consciouslifestylemag.com/wp-content/uploads/2016/12/do-insects-have-emotions-and-feelings-bugs-collection.jpg" alt="Colección de insectos" />
          </div>
        </div>
        {console.log("path: ", `path(${path})`)}
        <div className="insectMovingContainer" ref={divCont}>        
          <img src="https://svgsilh.com/svg/2029679.svg" alt="insect" className="insectMoving" style={{offsetPath: `path('${path}')`}}/>
        </div>
      </Container>
    </div>
  );
}

export default Home;