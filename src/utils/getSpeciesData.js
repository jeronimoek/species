import axios from 'axios';

const testData = ["Nothura maculosa","Podiceps major"]

const getSpeciesData = async (data) => {
  var dataJson
  await axios.post("https://us-central1-species-eebec.cloudfunctions.net/app", {"species": data})
    .then((response) => {
      console.log("getSpeciesData")
      const dataResp = response.data
      dataJson = JSON.parse(dataResp)
      console.log("datas sent: ",data,"dataJson: ", dataJson)
    })
    .catch((error) => {
      console.log("getSpeciesData ERROR!!! : ", error)
      //dataSet(JSON.parse(testData))
    })
  return dataJson
}

export default getSpeciesData