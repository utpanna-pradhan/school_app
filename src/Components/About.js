import React from 'react';
import history from '../images/history.avif';
import vision from '../images/vission.jpg';
import mission from '../images/mission.jpg';
import p1 from '../images/p1.jpg';
import Header from './Header';
import '../Stylesheet/About.css'

function About() {
  return (
    <div>
      <Header />
      <div className="row">
        <div className="col-md-12">
          <h2 className='text-center text-bg-secondary pt-4'>ABOUT US</h2>
        </div>
      </div>
      
      <div className="row container abt_row">
        <div className="col-md-4">
           <div className="card abt">
              <img  src={history} alt=""></img>
                <div  className="card-body" >
                    <h4 className="card-title">History</h4>
                    <p className="card-text">
                     "Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students."
                    </p>
                </div>
          </div>
        </div>

         <div className="col-md-4">
           <div className="card abt">
              <img  src={vision} alt=""></img>
                <div  className="card-body" >
                    <h4 className="card-title">Vision</h4>
                    <p className="card-text">
                 
                        "To create a learning environment that fosters academic excellence, critical thinking, and ethical values."

                    </p>
                </div>
          </div>
        </div>


         <div className="col-md-4">
           <div className="card abt">
              <img  src={mission} alt=""></img>
                <div  className="card-body" >
                    <h4 className="card-title">Mission</h4>
                    <p className="card-text">
                     "To empower students with the knowledge, skills, and values needed to thrive in a dynamic world."

                    </p>
                </div>
          </div>
        </div>
      </div>
     




       
     <div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={p1} className="img-fluid rounded-start" alt=""/>
    </div>
    <div className="col-md-8 bg-light">
      <div className="card-body">
        <h5 className="card-title">Principal's Message</h5>
        <p className="card-text"> "At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future."
</p>
        
      </div>
    </div>
  </div>
</div>
   
   <hr />
     <h3 className='p-3'>Infrastructure and Facilities</h3>
   
    <ul>
      <li>State-of-the-art science and computer labs</li>
      <li>Spacious and well-equipped classrooms</li>
      <li>Library with a vast collection of books and digital resources</li>
      <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
    </ul>
    <hr />
    </div>
  )
}

export default About