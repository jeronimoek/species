import React from 'react';
import { Menu, Icon } from 'antd';
import './TopMenu.scss'
import { Link } from 'react-router-dom';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function TopMenu(props) {
  return (
    <div style={{display: "flex",position: "relative", height: "inherit"}}>
      <div className="logo"><img src="https://raw.githubusercontent.com/jeronimoek/jeronimoek.github.io/master/species/img/logo.png" /></div>
      <Menu mode="horizontal" className="topMenu">
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

export default TopMenu;