import React, { useContext, useEffect, useState } from 'react';
import SpeciesItem from './SpeciesItem';
import './SpeciesCont.scss'
import RouteContext from '../context/RouteProvider';
import LocContext from '../context/LocProvider';
import getSpeciesOfLoc from '../utils/getSpeciesOfLoc';
import checkCache from '../utils/checkCache';
import getSpeciesData from '../utils/getSpeciesData'
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';

function SpeciesCont(props) {
  console.log("render")
  const [speciesData, setSpeciesData] = useState(null)
  var query = "https://us-central1-species-eebec.cloudfunctions.net/app"
  const loc = useContext(RouteContext).match.params.lugar
  const onLocChange = useContext(LocContext).locInfo.onLocChange
  
  useEffect(()=>{
    (async ()=>{
      if(loc){
        onLocChange(loc)
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[loc])

  if(loc){
    query += `?lugar=${loc}`
  } else {
    query += `?lugar=Chajarí`
    console.log("ERROR - SpeciesCont: No loc name")
  }
  useEffect(() => {
    (async ()=>{
      const resp = await checkCache(query,getSpeciesOfLoc)
      if(resp){
        setSpeciesData({...resp})
      } else {
        console.log("RESP EMPTY: ", resp)
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  const [speciesItemList, setSpeciesItemList] = useState([])
  const speciesArr = []
  useEffect(() => {
    console.log("useEffect")
    let dataElemArr = [];
    (async ()=>{
      if(speciesData){
        let i = 0
        for(; i < speciesData.species.length && i < 20; i++){
          const elem = speciesData.species[i]
          if(elem){
            speciesArr.push(elem)
          }
        }
        const specLocs = speciesData.lugaresDetallados
        for(let specLoc in specLocs){
          for(let sp of specLocs[specLoc].species){
            if(i<20){
              speciesArr.push(sp)
              i++
            }
          }
        }
        console.log(speciesArr)
        const data = await checkCache(speciesArr, getSpeciesData)
        console.log(data)
        for(let dataElem of data){
          if(dataElem){
            dataElemArr.push(
              <SpeciesItem species={dataElem}/>
              /*
              <Col span={6} key={dataElem.scientific_name}>
                <SpeciesItem species={dataElem}/>
              </Col>
              */
            )
          }
        }
        setSpeciesItemList(dataElemArr)
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speciesData])
  return (
    <>
      <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly"}}>
        {speciesItemList}
      </div>
      {/*
      <Row gutter={[16, 16]} wrap={true} className="speciesCont" style={{width: "100%"}}>
        
      </Row>
      */}
    </>
  )
  /*
    <div className="speciesCont">
      {speciesItemList}
    </div>
  */
}

export default SpeciesCont;