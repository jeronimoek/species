import React, { useEffect, useState } from 'react';
import getNRandom from '../../utils/getNRandom';
import { Spin, Button } from 'antd';
import checkCache from '../../utils/checkCache';
import SpeciesItem from '../SpeciesItem';
import { LoadingOutlined } from '@ant-design/icons';
import './NRandom.scss'
import ButtonLink from '../ButtonLink';

function NRandom(props) {

  const [loading, setLoading] = useState(false)
  const [fiveSpRand, setFiveSpRand] = useState([])
  const [speciesItemList, setSpeciesItemList] = useState([])
  const [reloadSpecies, setReloadSpecies] = useState("INITIAL")

  const {numOfSp = 6} = props

  useEffect(async () => {
    if(reloadSpecies === "INITIAL"){
      setReloadSpecies(false)
      setLoading(true)
      const result = await checkCache(`${numOfSp}SpRand`,() => getNRandom(numOfSp))
      console.log("result: ",result)
      setFiveSpRand(result)
    } else if (reloadSpecies){
      setReloadSpecies(false)
      setLoading(true)
      const result = await getNRandom(numOfSp)
      console.log("result: ",result)
      setFiveSpRand(result)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reloadSpecies])

  useEffect(() => {                                                   // Creates a SpeciesItem component for each species
    let dataElemArr = [];
    let prevSpecies = [];
    (async ()=>{
      console.log("fiveSpRand",fiveSpRand)
      if(fiveSpRand && fiveSpRand.length){
        for(const sp of fiveSpRand){
          if(sp){
            if(prevSpecies.indexOf(sp.scientific_name) === -1){
              dataElemArr.push(
                <SpeciesItem species={sp} key={sp.scientific_name}/>
              )
              prevSpecies.push(sp.scientific_name)
            }
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
          <h1 className="subtitle">Más de <span>2000</span> especies</h1>
          <div className="resumeItemsCont" style={{width: "fit-content", margin:"auto auto "}}>
            <div style={{display: "grid",gridTemplateColumns: "repeat(3, auto)", justifyItems:"center" , flexWrap: "wrap", justifyContent: "space-evenly"}}>
              {[...speciesItemList]}
            </div>
          </div>
          <div className="resumeBtnCont">
            <Button type="secondary" onClick={()=>setReloadSpecies(true)} className="resumeBtn primaryBtn">Recargar</Button>
            <ButtonLink type="primary" domain="explore" className="resumeBtn primaryBtn">Explorar</ButtonLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default NRandom;