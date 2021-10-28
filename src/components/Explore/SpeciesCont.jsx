import React, { useContext, useEffect, useRef, useState } from 'react';
import SpeciesItem from './SpeciesItem';
import './SpeciesCont.scss'
import RouteContext from '../../context/RouteProvider';
import LocContext from '../../context/LocProvider';
import getSpeciesOfLoc from '../../utils/getSpeciesOfLoc';
import checkCache from '../../utils/checkCache';
import getSpeciesData from '../../utils/getSpeciesData'
import 'antd/dist/antd.css';
import { Pagination, Spin } from 'antd';
import { useHistory } from 'react-router';
import { LoadingOutlined } from '@ant-design/icons';

const spByPage = 20

function getSubArr(srcArr, page){
  console.log("getSubArr: ",page)
  const newArr = srcArr.slice((page-1)*spByPage, (page)*spByPage)
  return newArr
}

function SpeciesCont(props) {
  console.log("render SpeciesCont")
  let query = "https://us-central1-species-eebec.cloudfunctions.net/app"

  const match = useContext(RouteContext).match
  console.log("SpeciesCont match path: ",match.path)
  const loc = match.params.lugar
  const paramPage = match.params.page
  const onLocChange = useContext(LocContext).locInfo.onLocChange
  
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [speciesData, setSpeciesData] = useState([])
  const [speciesItemList, setSpeciesItemList] = useState([])
  const [allSpecies, setAllSpecies] = useState([])
  const [speciesArr, setSpeciesArr] = useState([])

  console.log("page: ",page)
  useEffect(()=>{                                                     // Sets page index based on url path params. Default is 1.
    if(paramPage){
      console.log("setPage: ",paramPage)
      setPage(paramPage)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[paramPage])

  /*
    const firstUpdate = useRef(true);
    useEffect(()=>{                                                   // CURRENTLY UNNECESSARY (currently using the url path params)
      if (firstUpdate.current) {
        firstUpdate.current = false;
        return;
      }
      if(loc){
        console.log("(locChange) setPage: ",1)
        onLocChange(loc)
        setPage(1)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[loc])
  */

  if(loc){
    query += `?lugar=${loc}`
  } else {
    query += `?lugar=Chajarí`
    console.log("ERROR - SpeciesCont: No loc name")
  }
  console.log(query)

  useEffect(() => {                                                   // Looks up if the species data for this location has already been
    (async ()=>{                                                      // requested and cached, in which case it returns the cached data.
      console.log(query)                                              // Otherwise it requests, caches and returns the data.
      setLoading(true)
      const resp = await checkCache(query,getSpeciesOfLoc)
      if(resp){
        console.log("setSpeciesData: ",resp)
        setSpeciesData({...resp})
      } else {
        console.log("RESP EMPTY: ", resp)
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  useEffect(()=>{                                                     // Loops through the species data and returns all species
    console.log("setSpeciesData INSIDE setAllSpecies useEffect: ",speciesData)
    if(speciesData && speciesData.count){
      const tempAllSpecies = []
      for(let elem of speciesData.species){
        if(elem && allSpecies.indexOf(elem) === -1){
          tempAllSpecies.push(elem)
        }
      }
      const specLocs = speciesData.lugaresDetallados
      for(let specLoc in specLocs){
        console.log(specLoc)
        for(let sp of specLocs[specLoc].species){
          if(sp && allSpecies.indexOf(sp) === -1){
            tempAllSpecies.push(sp)
          }
        }
      }
      setAllSpecies(tempAllSpecies)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[speciesData])

  useEffect(() => {                                                   // Gets subArray of allSpecies array based on page index
    console.log("setSpeciesArr: ",getSubArr(allSpecies, page))
    setSpeciesArr([...getSubArr(allSpecies, page)])
  },[allSpecies, page])

  useEffect(() => {                                                   // Creates a SpeciesItem component for each species
    let dataElemArr = [];
    (async ()=>{
      
      console.log("speciesArr",speciesArr)
      if(speciesArr.length){
        const data = await checkCache(speciesArr, getSpeciesData)     // Looks up if the data for this species (singular) has already been
        //console.log(data)                                           // requested and cached, in which case it returns the cached data.
        if(data){                                                     // Otherwise it requests, caches and returns the data.
          for(let dataElem of data){
            if(dataElem){
              dataElemArr.push(
                <SpeciesItem species={dataElem} key={dataElem.scientific_name}/>
              )
            }
          }
        }
      }
      console.log("setSpeciesItemList: ",dataElemArr)
      setSpeciesItemList([...dataElemArr])
      setLoading(false)
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speciesArr])

  const history = useHistory();

  const onPageChange = (ev) => {                                      // Changes page index (pushes to history)
    console.log("Push Page: ",ev)
    let exp = /\/[0-9]+/i
    let newUrl = match.url
    if(newUrl.match(exp)){
      newUrl = newUrl.replace(exp, "")
    }
    history.push(`${newUrl}/${ev}`)
  }
  console.log(speciesItemList)

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
      <div>
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly"}}>
          {[...speciesItemList]}
        </div>
        <div className="pagCont">
          <Pagination
            onChange={ev => onPageChange(ev)} 
            showTotal={()=>`${(page-1)*spByPage}-${(page)*spByPage} de ${allSpecies.length} especies`} 
            defaultCurrent={page} 
            showSizeChanger={false}
            total={allSpecies.length} 
            defaultPageSize={20} 
            style={{display: "flex", justifyContent: "center", position: "relative"}}
          />
        </div>
      </div>
    </>
  )
}

export default SpeciesCont;