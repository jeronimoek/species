import { Button } from 'antd';
import React, { useContext} from 'react';
import { useHistory } from 'react-router';
import RouteContext from '../context/RouteProvider';

function ButtonLink(props) {
  const history = useHistory();
  const match = useContext(RouteContext).match
  const pushDomain = (path) => {
    let url = match.url
    history.push(`${url}${path}`)
  }

  return (
    <Button type={props.type} onClick={()=>pushDomain(props.domain)} className={props.className}>Explorar</Button>
  );
}

export default ButtonLink;