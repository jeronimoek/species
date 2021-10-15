const unmarshall = (thisElem) => {
  //console.log("thisElem: ",thisElem)
  if (Array.isArray(thisElem)) {
    for (const [i,subElem] of thisElem.entries()) {
      thisElem[i] = unmarshall(subElem)
    }
  } else if (typeof thisElem == "object") {
    for (const prop in thisElem) {
      if (!(!isNaN(parseFloat(prop)) && isFinite(prop)) && prop.length < 3) {           // Is not number and smaller than 3 chars
        thisElem = unmarshall(thisElem[prop])
        //console.log("unmarshaling")
      } else {
      	thisElem[prop] = unmarshall(thisElem[prop])
      }
      //console.log(prop," : ", thisElem)
    }
  }
  return thisElem
}

export default unmarshall