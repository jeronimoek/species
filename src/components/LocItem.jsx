import React from 'react';
import { Link} from 'react-router-dom';
import './LocItem.scss'

function LocItem(props) {
  var locsSpec = []
  if(props.selected){
    locsSpec.push()
  }
  return (
    <div className="locItem">
      <Link to={`/explore/${props.loc.lugar}/1`}>
        <span className="loc">{props.loc.lugar}</span>
        {" "} 
        <span className="count">{props.loc.count} species</span>
      </Link>
    </div>
  );
}

export default LocItem;