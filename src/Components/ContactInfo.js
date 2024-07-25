

import React from 'react';

import '../Stylesheet/Contact.css';

function ContactInfo() {
      

  return (
    <div>
        <div className="row container border border-3 ms-5 mt-4 form_container">
            <div className="col-md-6 our_info mt-3">
                <h4 className='text-primary'>Contact Information</h4>
                 <p className='mt-3'><strong>Address:</strong> Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
                <p><strong>Phone:</strong> +1 (123) 456-7890</p>
                <p><strong>Email:</strong> <a href="mailto:info@springdale.edu">info@springdale.edu</a></p>
            </div>

            <div className="col-md-6 contact_us mt-3">
                <h4 className='text-primary'>Our Location</h4>
    <iframe className='mt-3'
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345094074!2d-122.08538108468155!3d37.42199987982526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7369377dc21%3A0x18003a0c7c4e7bd!2sGoogleplex!5e0!3m2!1sen!2sus!4v1602193454028!5m2!1sen!2sus"
      width="500"
      height="450"
      frameBorder="0"
      style={{ border: 0 }}
      allowFullScreen=""
      aria-hidden="false"
      tabIndex="0"
      title="Google Map"
    ></iframe>
            </div>
        </div>
    </div>
  )
}

export default ContactInfo