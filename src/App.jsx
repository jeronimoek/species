import React, { useState } from 'react';
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
import Explore from './components/Explore/Explore';
import { Layout } from 'antd';
import NavBar from './components/NavBar'
import SourceCode from './components/SourceCode';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';

const { Header, Footer } = Layout;

export const HEADER_ROUTES = {EXPLORE: "explore", CONTACT: "contact", HOME: "home"}

function App() {
  
  const [headerRoute, setHeaderRoute] = useState("")
  console.log(headerRoute)
  return (
    <Router>
      <HashRouter>
        <div className="App">
          <LocProvider>
            <Layout>
              <Header className="header">
                <NavBar headerRoute={headerRoute}/>
              </Header>
              <Switch>
                <Route path="/" exact>
                  <RouteProvider>
                    <Home setHeaderRoute={setHeaderRoute}/>
                  </RouteProvider>
                </Route>
                <Route path="/explore">
                  <RouteProvider>
                    <Explore setHeaderRoute={setHeaderRoute}/>
                  </RouteProvider>
                </Route>
                <Route path="/contact">
                  <RouteProvider>
                    <Contact setHeaderRoute={setHeaderRoute}/>
                  </RouteProvider>
                </Route>
              </Switch>
              <Footer style={{zIndex:1}}>
                
              </Footer>
            </Layout>
            <SourceCode/>
          </LocProvider>
        </div>
      </HashRouter>
    </Router>
  );
}

export default App;
