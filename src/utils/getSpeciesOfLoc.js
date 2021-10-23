import axios from "axios"


const getSpeciesOfLoc = async (query) => {
  console.log(query)
  var data
  await axios
    .get(query)
    .then((response) => {
      console.log("getSpecies")
      const dataResp = response.data
      data = JSON.parse(dataResp)
    })
    .catch((error) => {
      console.log("ERROR!!! : ", error)
      //speciesDataSet(JSON.parse(testData))
    })
  return data
}

export default getSpeciesOfLoc