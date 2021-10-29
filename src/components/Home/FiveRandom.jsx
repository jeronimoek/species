import React, { useEffect, useState } from 'react';
import getFiveRandom from '../../utils/getFiveRandom';
import { Spin, Button } from 'antd';
import checkCache from '../../utils/checkCache';
import SpeciesItem from '../SpeciesItem';
import { LoadingOutlined } from '@ant-design/icons';
import './FiveRandom.scss'

function FiveRandom(props) {

  const [loading, setLoading] = useState(false)
  const [fiveSpRand, setFiveSpRand] = useState([])
  const [speciesItemList, setSpeciesItemList] = useState([])
  const [reloadSpecies, setReloadSpecies] = useState("INITIAL")

  useEffect(async () => {
    if(reloadSpecies === "INITIAL"){
      setReloadSpecies(false)
      setLoading(true)
      const result = await checkCache("fiveSpRand",getFiveRandom)
      console.log("result: ",result)
      setFiveSpRand(result)
    } else if (reloadSpecies){
      setReloadSpecies(false)
      setLoading(true)
      const result = await getFiveRandom()
      console.log("result: ",result)
      setFiveSpRand(result)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reloadSpecies])

  useEffect(() => {                                                   // Creates a SpeciesItem component for each species
    let dataElemArr = [];
    (async ()=>{
      console.log("fiveSpRand",fiveSpRand)
      if(fiveSpRand.length){
        for(const sp of fiveSpRand){
          if(sp){
            dataElemArr.push(
              <SpeciesItem species={sp} key={sp.scientific_name}/>
            )
          }
        }
      }
      console.log("setSpeciesItemList: ",dataElemArr)
      setSpeciesItemList([...dataElemArr])
      setLoading(false)
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fiveSpRand])

  const antIcon = <LoadingOutlined style={{ fontSize: 80 }} spin />;

  return (
    <>
      {loading && 
        <div className="spinDiv">
          <div className="spinCont">
            <h2>LOADING...</h2>
            <Spin indicator={antIcon}/>
          </div>
        </div>
      }
      <div className="resumeSect sect">
        <div className="resumeSectTextCont">
          <h1 className="title">Más de 2000 especies</h1>
          <div className="resumeItemsCont">
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly"}}>
              {[...speciesItemList]}
            </div>
          </div>
          <div className="resumeBtnCont">
            <Button type="primary" onClick={()=>setReloadSpecies(true)} className="resumeBtn primaryBtn">RECARGAR</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FiveRandom;