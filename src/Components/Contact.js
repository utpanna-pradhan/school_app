import React from 'react';
import ContactInfo from './ContactInfo';
import Header from './Header';
import GoogleMap from './GoogleMap';

const Contact = () => (
  <div className="contact-us bg-light">
    <Header />
    <h1 className='text-center text-primary'>Contact Us</h1>
    <ContactInfo />

    <GoogleMap />
  </div>
);

export default Contact;