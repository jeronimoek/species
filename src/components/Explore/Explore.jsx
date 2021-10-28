import { Layout } from 'antd';
import React, { useContext, useEffect } from 'react';
import { Route, Switch } from 'react-router';
import RouteContext, {RouteProvider} from '../../context/RouteProvider';
import MainCont from './MainCont';
import Sidebar from './Sidebar';
import './Explore.scss'
import 'antd/dist/antd.css';
import { HEADER_ROUTES } from '../../App';

const { Sider, Content } = Layout;

function Explore(props) {

  useEffect(() => {
    props.setHeaderRoute(HEADER_ROUTES.EXPLORE)
  },[])

  const match = useContext(RouteContext).match
  console.log("match: ",match.path)

  return (
    <div>
      <Layout>
        <Sider breakpoint="md" collapsedWidth="0" zeroWidthTriggerStyle={{top:0,justifySelf: "end"}} width={250} style={{zIndex: 1}}>
          <Sidebar/>
        </Sider>
        <Content>
          <div className="mainDiv">
            <Switch>
              <Route path={`${match.path}/:lugar`}>
                <RouteProvider>
                  <MainCont/>
                </RouteProvider>
              </Route>
              <Route path={match.path}>
                <h2 style={{position: "relative", textAlign: "center", color: "white", paddingTop: 20}}>Please select a location from the left menu</h2>
              </Route>
            </Switch>
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default Explore;