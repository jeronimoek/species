import axios from 'axios';

//const testData = "[{\"lugar\":\"TEST - Concordia\",\"count\":460},{\"lugar\":\"TEST - Paraná\",\"count\":436},{\"lugar\":\"TEST - Chajarí\",\"count\":344},{\"lugar\":\"Gualeguaychú\",\"count\":317},{\"lugar\":\"Ceibas\",\"count\":297}]"

const getTopLocs = async () => {
  var data
  await axios
    .get("https://us-central1-species-eebec.cloudfunctions.net/app")
    .then((response) => {
      console.log("getTopLocs")
      const dataResp = response.data
      data = JSON.parse(dataResp)
    })
    .catch((error) => {
      console.log("ERROR!!! : ", error)
      //dataSet(JSON.parse(testData))
    })
  return data
}

export default getTopLocs