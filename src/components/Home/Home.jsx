import { HEADER_ROUTES } from '../../App';
import React, {useEffect} from 'react';
import Container from './Container';
import './Home.scss';
import Insect from './Insect';
import NRandom from './NRandom';
import ButtonLink from '../ButtonLink';
import ContactForm from '../Contact/ContactForm'
import handleViewport from 'react-in-viewport';

function HeroBlock(props) {
  const { inViewport, forwardedRef, enterCount } = props;
  const viewed = inViewport && enterCount === 1
  return (
    <div ref={forwardedRef}>
      <div className="container">
        <Container childId="heroCont" background="https://www.sanfernando.gob.ar/images/contenido/201809/5bad272db8d3b_Flora-y-Fauna-ciervo-de-los-pantanos-II.jpg">
          <div className={`hero ${viewed ? "unfade": ""}`}>
            <h1 className={`title title-grow ${viewed ? "grow": ""}`}>Descubrí Entre Ríos</h1>
            <h2 className={`subtitle subtitle-grow ${viewed ? "grow": ""}`}>Investigá su Fauna y Flora</h2>
          </div>
        </Container>
      </div>
    </div>
  )
}

const ViewportHeroBlock = handleViewport(HeroBlock)

function ContactBlock(props) {
  const { inViewport, forwardedRef, enterCount } = props;
  const viewed = inViewport && enterCount === 1
  return (
    <div ref={forwardedRef}>
      <div className="container">
        <Container childId="contactSectCont" background="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Capivara%28Hydrochoerus_hydrochaeris%29.jpg/1200px-Capivara%28Hydrochoerus_hydrochaeris%29.jpg">
          <div className={`contactSect ${viewed ? "unfade": ""}`}>
            <h1 className="subtitle contactContSubtitle">
              Contáctenos de manera directa
            </h1>
            <ContactForm/>
          </div>
        </Container>
      </div>
    </div>
  )
}

const ViewportContactBlock = handleViewport(ContactBlock)

function Home(props) {

  const setHeaderRoute = props.setHeaderRoute
  useEffect(() => {
    setHeaderRoute(HEADER_ROUTES.HOME)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const insects = []
  
  const createInsect = (path, width, height, src, className, delay) => {
    const pathProps = {path: path, width: width, height: height}
    let newInsect = <Insect pathProps={pathProps} src={src} className={className} animationDelay={delay}/>
    insects.push(newInsect)
  }
  
  const pathBf1 = "M 0 20.507 C 42.823 2.413 88.058 10.455 135.706 44.632 C 170.976 69.931 231.692 71.941 317.853 50.663 C 343.8 44.255 378.38 46.869 421.592 58.504 Q 460.03 68.854 501.206 58.504"
  createInsect(pathBf1, 501.206, 54.132, "https://svgsilh.com/svg/2029679.svg", "insectMoving", "5s")
  const pathBf2 = "M -7.238 47.648 C -7.238 47.648 32.569 4.222 88.661 13.872 C 144.753 23.522 203.86 -8.444 305.187 29.554 C 406.514 67.552 381.785 71.773 445.114 54.283 C 508.443 36.793 509.047 41.616 509.047 42.219"
  createInsect(pathBf2, 516.285, 53.773, "https://svgsilh.com/svg/2029679.svg", "insectMoving", "10s")

  return (
    <div>
      <ViewportHeroBlock onEnterViewport={() => console.log('enter')} onLeaveViewport={() => console.log('leave')} />
      <Container childId="exploreSectCont" className="sectCont" background="azure">
        <div className="exploreSect sect">
          <div className="exploreSectTextCont">
            <h1 className="subtitle">Explorá las especies registradas</h1>
            <p className="exploreSectText">
              Si necesitas ayuda a la hora de reconocer la especie de un insecto que tienes cerca, utilizando nuestra herramienta de exploración puedes ver que especies han sido registradas en tus alrededores.
              <br/>
              Gracias a una base de datos creada por científicos y colaboradores de toda la provincia, nuestra web puede ayudarte a reconocer en segundos el insecto que buscas.
            </p>
            <div className="exploreBtnCont">
              <ButtonLink type="primary" domain="explore" className="exploreBtn primaryBtn">Explorar</ButtonLink>
            </div>
          </div>
          <div className="exploreSecImgCont">
            <img className="exploreSecImg" src="http://www.consciouslifestylemag.com/wp-content/uploads/2016/12/do-insects-have-emotions-and-feelings-bugs-collection.jpg" alt="Colección de insectos" />
          </div>
        </div>
        {insects}
      </Container>
      <Container childId="resumeSectCont" className="sectCont" background="rgb(168, 250, 179, 0.5)">
        <NRandom numOfSp="6"/>
      </Container>
      <ViewportContactBlock onEnterViewport={() => console.log('enter')} onLeaveViewport={() => console.log('leave')} />
    </div>
  );
}

export default Home;