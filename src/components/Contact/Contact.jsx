import React from 'react';
import { HEADER_ROUTES } from '../../App';
import './Contact.scss'
import ContactForm from './ContactForm'

function Contact(props) {
  
  props.setHeaderRoute(HEADER_ROUTES.CONTACT)

  return (
    <div className="contactCont">
      <h1 className="subtitle contactContSubtitle">
        Contáctenos de manera directa
      </h1>
      <ContactForm/>
    </div>
  )
}

export default Contact;