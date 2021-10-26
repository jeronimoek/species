import React, { useContext } from 'react';
import { Route, Switch } from 'react-router';
import RouteContext, {RouteProvider} from '../context/RouteProvider';
import MainCont from './MainCont';

function Explore(props) {

  const match = useContext(RouteContext).match
  console.log("match: ",match.path)

  return (
    <div>
      <Switch>
        <Route path={`${match.path}/:lugar`}>
          <RouteProvider>
            <MainCont/>
          </RouteProvider>
        </Route>
        <Route path={match.path}>
          <h3>Please select a location.</h3>
        </Route>
      </Switch>
    </div>
  );
}

export default Explore;