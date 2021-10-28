import React from 'react';
import { HEADER_ROUTES } from '../../App';

function Contact(props) {
  
  props.setHeaderRoute(HEADER_ROUTES.CONTACT)

  return (
    <div>
      Contact us
    </div>
  )
}

export default Contact;