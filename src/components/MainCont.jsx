import { Switch } from 'antd';
import React, { useContext } from 'react';
import { Route, useRouteMatch } from 'react-router';
import RouteContext, { RouteProvider } from '../context/RouteProvider';
import SpeciesCont from './SpeciesCont';

function MainCont(props) {
  const match = useContext(RouteContext).match
  console.log("match: ",match.path)

  return (
    <>
      <Route path={`${match.path}/:page`}>
        <RouteProvider>
          <SpeciesCont/>
        </RouteProvider>
      </Route>
      <Route path={`${match.path}`} exact>
        <RouteProvider>
          <SpeciesCont/>
        </RouteProvider>
      </Route>
    </>
  );
}

export default MainCont;