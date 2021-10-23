import React from 'react';
import { Link} from 'react-router-dom';

function LocItem(props) {
  var locsSpec = []
  if(props.selected){
    locsSpec.push()
  }
  return (
    <div>
      En <Link to={`/explore/${props.loc.lugar}`}>{props.loc.lugar}</Link> hay {props.loc.count} registros.
      {}
    </div>
  );
}

export default LocItem;