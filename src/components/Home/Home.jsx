import { Button } from 'antd';
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { HEADER_ROUTES } from '../../App';
import RouteContext from '../../context/RouteProvider';
import Container from './Container';
import './Home.scss'

function Home(props) {
  
  useEffect(() => {
    props.setHeaderRoute(HEADER_ROUTES.HOME)
  },[])

  const history = useHistory();
  const match = useContext(RouteContext).match
  const pushDomain = (path) => {
    let url = match.url
    history.push(`${url}${path}`)
  }

  return (
    <div>
      <Container childId="heroCont" background="https://www.sanfernando.gob.ar/images/contenido/201809/5bad272db8d3b_Flora-y-Fauna-ciervo-de-los-pantanos-II.jpg">
        <div className="hero">
          <h1 className="title">Descubrí Entre Ríos</h1>
          <h2 className="subtitle">Investigá su Fauna y Flora</h2>
        </div>
      </Container>
      <Container childId="exploreSectCont" >
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
        <div>
          <img src="https://svgsilh.com/svg/45791.svg" alt="insect" className="insectWiggle"/>
        </div>
        <div>        
          <img src="https://svgsilh.com/svg/2029679.svg" alt="insect" className="insectMoving"/>
        </div>
      </Container>
    </div>
  );
}

export default Home;