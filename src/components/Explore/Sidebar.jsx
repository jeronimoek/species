import React from 'react';
//import LocContext from '../context/LocProvider';
import LocCont from './LocCont';
import './Sidebar.scss'

function Sidebar(props) {

  return (
    <div className="Sidebar">
      <LocCont/>
    </div>
  );
}

export default Sidebar;