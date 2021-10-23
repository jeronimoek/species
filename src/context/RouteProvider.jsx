import React from "react";
import { useRouteMatch } from "react-router";

const RouteContext = React.createContext({})

export const RouteProvider = (props) => {
  const match = useRouteMatch()
  return(
    <RouteContext.Provider value={{match: match}}>
      {props.children}
    </RouteContext.Provider>
  )
}

export default RouteContext
