import React from 'react';
import { Menu, Icon } from 'antd';
import './NavBar.scss'
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
//const SubMenu = Menu.SubMenu;
//const MenuItemGroup = Menu.ItemGroup;
import { HEADER_ROUTES } from '../App';

function NavBar(props) {
  const actRoute = props.headerRoute
  console.log(actRoute)
  return (
    <div className="navCont">
      <div className="logo"><img src="https://raw.githubusercontent.com/jeronimoek/jeronimoek.github.io/master/species/img/logo.png" /></div>
      <Menu mode="horizontal" className="topMenu" disabledOverflow={true}>
        {/*<Menu.Item key="home" className={`menuItem ${actRoute === HEADER_ROUTES.HOME ? "ant-menu-item-selected" : ""}`}>*/}
        <Menu.Item key="home" className="menuItem">
          <Link to={`/`}>Home</Link>
        </Menu.Item>
        <Menu.Item key="explore" className="menuItem">
          <Link to={`/explore`}>Explore</Link>
        </Menu.Item>
        <Menu.Item key="contact" className="menuItem">
          <Link to={`/contact`}>Contact Us</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default NavBar;