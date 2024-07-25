import React from 'react';
import Header from './Header';
import AdmissionForms from './AdmissionForms';

function Admission() {
  return (
    <div>
        <Header />
        <h2 className='text-center text-danger'>ADMISSION</h2>
        <div className="card  border-3">
            <div className="card-body">
                  <h2 className='text-center bg-danger'>Admission Process </h2>
    <p className='text-center'>Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
    
    <AdmissionForms />
            </div>
        </div>
       <section className="mx-auto my-5" >
      
    <div className="card booking-card v-2 mt-2 mb-4 rounded-bottom">
      
      <div className="card-body">
        <h4 className="card-title font-weight-bold text-center bg-danger">Criteria</h4>
       
        <p className="card-text text-center">"Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades."
</p>
        <hr className="my-4" />
        <p className="h5 font-weight-bold mb-4 text-danger">Important Dates:</p>
        <ul className="list-unstyled d-flex justify-content-start align-items-center mb-0">
          <li>Admission Form Availability:</li>
          <li>
            <div className="chip ms-3">March 1st
</div>
          </li>
        
        </ul>
        <ul className="list-unstyled d-flex justify-content-start align-items-center mb-0">
          <li>Last Date for Submission:</li>
          <li>
            <div className="chip ms-3">March 31st
</div>
          </li>
         
        </ul>
        <ul className="list-unstyled d-flex justify-content-start align-items-center mb-0">
          <li>Entrance Test:</li>
          <li>
            <div className="chip ms-3"> April 15th</div>
          </li>
        </ul>
         <ul className="list-unstyled d-flex justify-content-start align-items-center mb-0">
          <li>Announcement of Results:</li>
          <li>
            <div className="chip ms-3">  April 30th</div>
          </li>
        </ul>
      </div>
    </div>
    
  </section>
    </div>
  )

}

export default Admission