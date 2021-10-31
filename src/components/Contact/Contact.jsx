import React from 'react';
import { HEADER_ROUTES } from '../../App';
import './Contact.scss'
import ContactForm from './ContactForm'

function Contact(props) {
  
  props.setHeaderRoute(HEADER_ROUTES.CONTACT)

  return (
    <div style={{ width: "1000px"}}>
      <ContactForm/>
    </div>
  )
}

export default Contact;