import React, { useState } from "react";

const LocContext = React.createContext({})

export const LocProvider = (props) => {
  const [loc, setLoc] = useState("")
  const [locSpec, setLocSpec] = useState("")
  const [locData, setLocData] = useState([])
  
  const handleLocDataChange = (newData) => {
    console.log("setLocData",newData)
    setLocData(newData)
  }

  const handleLocChange = (newLoc) => {
    console.log("setLoc",newLoc)
    setLoc(newLoc)
  }
  
  const handleLocSpecChange = (newLocSpec) => {
    console.log("setLocSpec",newLocSpec)
    setLocSpec(newLocSpec)
  }

  return(
    <LocContext.Provider value={{
      locInfo: {
        loc: loc,
        locSpec: locSpec,
        locData: locData,
        onLocChange: handleLocChange,
        onLocSpecChange: handleLocSpecChange,
        onLocDataChange: handleLocDataChange
      }
    }}>
      {props.children}
    </LocContext.Provider>
  )
}

export default LocContext