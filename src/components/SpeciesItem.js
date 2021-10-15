import './SpeciesItem.scss'
import React from 'react';

function SpeciesItem(props) {
  const species = props.species
  let imgUrl = ""
  for(let registry of Object.values(species.info.registers)){
    if(imgUrl){break}
    if(registry.imgUrl && registry.imgUrl!=="https://www.ecoregistros.org/site/images/play.bmp"){
      imgUrl = registry.imgUrl
    }
  }
  return (
    <div>
      <div className="registryCont">
        <div className="registryData">
          <h3>{species.scientific_name}</h3>
          {species.nombre_comun ? <h4>{species.nombre_comun}</h4> : null}
          {species.info.nombre_ingles ? <p>Inglés: {species.info.nombre_ingles}</p> : null}
          {species.info.nombre_port ? <p>Portugués: {species.info.nombre_port}</p> : null}
        </div>
        <div className="imgSpCont">
          {imgUrl ? <img className="imgSp" src={imgUrl}></img> : null}
        </div>
      </div>
    </div>
  );
}

export default SpeciesItem;