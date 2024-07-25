import React, { useState } from 'react';
import '../Stylesheet/Contact.css'

function GoogleMap() {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to an API)
    console.log({ name, email, message });
  };
  return (
    <div>
         <form className="contact-form container border border-3  mt-4 text-center mb-4" onSubmit={handleSubmit}>
      <h2 className='text-primary mt-3'>Contact Form</h2>
      <div className='mt-3 p-3'>
        <label htmlFor="name"  >Name:</label>
        <input className='ms-3'
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className='p-3'>
        <label htmlFor="email">Email:</label>
        <input  className='ms-3' 
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div  className='p-3'>
        <label htmlFor="message">Message:</label>
        <textarea  className='ms-3'
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button type="submit" className='btn btn-primary mt-2 mb-3' >Submit</button>
    </form>
    </div>
  )
}

export default GoogleMap