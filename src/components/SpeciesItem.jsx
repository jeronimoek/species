import './SpeciesItem.scss'
import React from 'react';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';

function SpeciesItem(props) {
  const species = props.species
  //console.log("NEW SpeciesItem: ",species.scientific_name)
  let imgUrl = ""
  for(let registry of Object.values(species.info.registers)){
    if(imgUrl){break}
    if(registry.imgUrl && registry.imgUrl!=="https://www.ecoregistros.org/site/images/play.bmp"){
      imgUrl = registry.imgUrl
    }
  }
  if(!imgUrl){
    imgUrl = "https://www.emsevilla.es/wp-content/uploads/2020/10/no-image-1.png"
  }
  return (
    <>
      <Card
        hoverable
        className="Card"
        cover={<div className="imgSpCont"><img className="imgSp" alt="example" src={imgUrl}/></div>}
      >
        <Meta title={species.scientific_name} description={species.nombre_comun} />
      </Card>
      {/*
      <div className="registryCont">
        <div className="registryData">
          <h3>{species.scientific_name}</h3>
          {species.nombre_comun ? <h4>{species.nombre_comun}</h4> : null}
          {species.info.nombre_ingles ? <p>Inglés: {species.info.nombre_ingles}</p> : null}
          {species.info.nombre_port ? <p>Portugués: {species.info.nombre_port}</p> : null}
        </div>
        <div className="imgSpCont">
          {imgUrl ? <img className="imgSp" src={imgUrl} alt="species sample"></img> : null}
        </div>
      </div>
      */}
    </>
  );
}

export default SpeciesItem;