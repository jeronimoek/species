import axios from 'axios';

var characters = 'abcdefghijklmnopqrstuvwxyz';
function makeidJoin(length) {
  var result = [];
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
  }
  result[0] = result[0].toUpperCase()
  return result.join('');
}

const getFiveRandom = async () => {
  var dataJson
  const randomsStr = []
  const quantity = 5
  const strLength = 3
  for(let i = 0; i < quantity; i++){
    let randomStr = makeidJoin(strLength)
    randomsStr.push(randomStr)
  }
  await axios
    .post("https://us-central1-species-eebec.cloudfunctions.net/app/random", {"strings": randomsStr})
    .then((response) => {
      //console.log("getFiveRandom")
      const dataResp = response.data
      dataJson = JSON.parse(dataResp)
      //console.log("randomsStr sent: ",randomsStr,"dataJson: ", dataJson)
    })
    .catch((error) => {
      //console.log("getFiveRandom ERROR!!! : ", error)
    })
  return dataJson
}

export default getFiveRandom