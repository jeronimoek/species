var gen = require('random-seed')

async function checkCache(data, func, opts = []) {
  const seed = JSON.stringify(data)
  const idNum = gen.create(seed)(999999)
  console.log(data, idNum)
  const cached = JSON.parse(localStorage.getItem(idNum))
  if(cached && typeof cached === "object" &&  Object.keys(cached).length !== 0){
    console.log("FROM CACHE")
    return cached
  } else {
    const resp = await func(data, ...opts)
    console.log("FROM REQUEST")
    if(resp){
      localStorage.setItem(idNum,JSON.stringify(resp))
    }
    return resp
  }
}

export default checkCache;