import React, { useEffect, useState } from 'react';

function SpeciesItem(props) {
  const [data, dataSet] = useState(null)
  useEffect(() => {
    async function fetchMyAPI() {
      try{
        let response = await fetch("https://2y0eh1tux1.execute-api.sa-east-1.amazonaws.com/default/species")
        response = await response.json()
        dataSet(response)
      } catch(error) {
        console.log("error: ",error)
      }
    }
    fetchMyAPI()
  }, [])

  return (
    <div>
      data:

    </div>
  );
}

export default SpeciesItem;