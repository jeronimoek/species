import React from 'react';
import './App.scss'
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //BrowserRouter,
  HashRouter,
  //Link,
} from "react-router-dom";
import { LocProvider } from './context/LocProvider';
import { RouteProvider } from './context/RouteProvider';
import Sidebar from './components/Sidebar';
import Explore from './components/Explore';
import { Layout } from 'antd';
import TopMenu from './components/TopMenu'

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Router>
      <HashRouter>
        <div className="App">
          <LocProvider>
          <Layout>
            <Header style={{position: 'sticky', top:"0px",width: "100%",zIndex:2, borderBottom: "solid 1px white"}}>
              <TopMenu/>
            </Header>
            <Layout>
              <Sider breakpoint="md" collapsedWidth="0" zeroWidthTriggerStyle={{top:0,justifySelf: "end"}} width={250} style={{zIndex: 1}}>
                <Sidebar/>
              </Sider>
              <Content>
                <div className="mainDiv">
                  <Switch>
                    <Route path="/" exact>
                      <RouteProvider>
                        {/*<Home />*/}
                      </RouteProvider>
                    </Route>
                    <Route path="/explore">
                      <RouteProvider>
                        <Explore />
                      </RouteProvider>
                    </Route>
                  </Switch>
                </div>
              </Content>
            </Layout>
            <Footer style={{zIndex:1}}>
              
            </Footer>
          </Layout>
            
          </LocProvider>
        </div>
      </HashRouter>
    </Router>
  );
}

export default App;
