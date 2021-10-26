import React from 'react';
import { Link} from 'react-router-dom';

function LocItem(props) {
  var locsSpec = []
  if(props.selected){
    locsSpec.push()
  }
  return (
    <div>
      <Link to={`/explore/${props.loc.lugar}/1`}>{props.loc.lugar}</Link> - {props.loc.count}
      {}
    </div>
  );
}

export default LocItem;