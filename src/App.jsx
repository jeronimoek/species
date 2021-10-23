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

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Router>
      <HashRouter>
        <div className="App">
          <LocProvider>
          <Layout>
            <Header>
              {/*<Header/>*/}
            </Header>
            <Layout>
              <Sider breakpoint="md" collapsedWidth="0" zeroWidthTriggerStyle={{top:0,justifySelf: "end"}}>
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
            <Footer>
              
            </Footer>
          </Layout>
            
          </LocProvider>
        </div>
      </HashRouter>
    </Router>
  );
}

export default App;
