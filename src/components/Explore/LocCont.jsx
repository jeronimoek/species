import React, { useContext, useEffect, useState } from 'react';
import LocContext from '../../context/LocProvider';
import checkCache from '../../utils/checkCache';
import getTopLocs from '../../utils/getTopLocs';
import LocItem from './LocItem';

function LocCont(props) {
  
  const [locsData, setLocsData] = useState(null)

  const locInfo = useContext(LocContext).locInfo
  const locSelected = locInfo.loc
  const onLocDataChange = locInfo.onLocDataChange

  useEffect(() => {
    (async ()=>{
      const response = await checkCache("getTopLocs",getTopLocs)
      onLocDataChange(response)
      console.log("setLocsData: ", response)
      setLocsData(response)
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //const locSpecSelected = locInfo.locSpec

  const locsItemList = []
  if(locsData){
    let i = 0
    for(const loc of locsData){
      locsItemList.push(
        <LocItem loc={loc} selected={(loc === locSelected)} key={loc+'-'+i}/>
      )
      i++
    }
  }

  return (
    <div className="locCont">
      {locsItemList}
    </div>
  );
}

export default LocCont;