import React from 'react';
import Header from './Header';
import digital from '../images/digital.jpg';
import interact from '../images/interact.jpg';
import learn from '../images/learning.jpg';
import { Carousel } from 'react-bootstrap';

function Academics() {
  return (
    <div >
        <Header />
        <h2 className='p-4 text-center fw-bold text-warning'>CURRICULUM</h2>
        <div className='container'>
            <div className="row">
                  <div className="col-lg-6 mx-auto">

                
                <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded">
                    <div className="blockquote-custom-icon bg-light shadow-sm"><i class="fa-solid fa-graduation-cap"></i></div>
                     <h3 className='bg-warning'>Primary (Grades 1-5)</h3>
                    <p className="mb-0 mt-2 font-italic">
                         <li>English</li>
                        <li>Mathematics</li>
                        <li>Science</li>
                        <li>Social Studies</li>
                        <li>Art</li>
                        <li>Physical Education</li>
                    </p>
                    <footer className="blockquote-footer pt-4 mt-4 border-top">
                        <cite title="Source Title">Springdale Public School
                        </cite>
                    </footer>
                </blockquote>

            </div>
              <div className="col-lg-6 mx-auto">

                
                <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded">
                    <div className="blockquote-custom-icon bg-light shadow-sm"><i class="fa-solid fa-graduation-cap"></i></div>
                     <h3 className='bg-warning'>Secondary (Grades 6-10)</h3>
                    <p className="mb-0 mt-2 font-italic">
                         <li>English</li>
                         <li>Mathematics</li>
                        <li>Science (Physics, Chemistry, Biology)</li>
                        <li>Social Studies</li>
                        <li>Computer Science</li>
                        <li>Physical Education</li>
                        <li>Art</li>
                    </p>
                    <footer className="blockquote-footer pt-4 mt-4 border-top">
                        <cite title="Source Title">Springdale Public School
                    </cite>
                    </footer>
                </blockquote>

            </div>
            </div>
           

           <div className="row">
             <div className="col-lg-12 mx-auto">

                
                <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded">
                    <div className="blockquote-custom-icon bg-light shadow-sm"><i class="fa-solid fa-graduation-cap"></i></div>
                     <h3 className='bg-warning'>Senior Secondary (Grades 11-12)</h3>
                   <div className="row">
                    <div className="col-md-6">
                        <h4>Science Stream</h4>
                         <p className="mb-0 mt-2 font-italic">
                         <li>Physics</li>
                        <li>Chemistry</li>
                        <li>Biology</li>
                        <li>Mathematics</li>
                        <li>Computer Science</li>
                        <li>English</li>
                    </p>
                    </div>
                     <div className="col-md-6">
                        <h4>Commerce Stream</h4>
                         <p className="mb-0 mt-2 font-italic">
                         <li>Accountancy</li>
                            <li>Business Studies</li>
                            <li>Economics</li>
                            <li>Mathematics</li>
                            <li>English</li>
                    </p>
                    </div>
                   </div>

                   
                    <footer className="blockquote-footer pt-4 mt-4 border-top">
                        <cite title="Source Title">Springdale Public School
                        </cite>
                    </footer>
                </blockquote>

            </div>
           </div>


            <div className="row">
                  <div className="col-lg-12 mx-auto">

                
                <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded">
                    <div className="blockquote-custom-icon bg-light shadow-sm"><i class="fa-solid fa-graduation-cap"></i></div>
                     <h3 className='bg-warning'>Teaching Methodologies</h3>
                    <p className="mb-0 mt-2 font-italic">
                          "We use a blend of traditional and modern teaching techniques to cater to different learning styles."

                    </p>
                    <footer className="blockquote-footer pt-4 mt-4 border-top">
                        <cite title="Source Title">Springdale Public School
                        </cite>
                    </footer>
                </blockquote>

            </div>
             
            </div>


              <div className="row">
                  <div className="col-lg-12 mx-auto">

                
                <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded">
                    <div className="blockquote-custom-icon bg-light shadow-sm"><i class="fa-solid fa-graduation-cap"></i></div>
                     <h3 className='bg-warning'>Educational Resource</h3>
                    <p className="mb-4 mt-4 font-italic text-center">
                          "Digital classrooms, interactive learning modules, and access to online educational platforms."


                    </p>
                    <div className="row">
                        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={digital} alt="First slide"  width={200} height={400}/> 
                 <Carousel.Caption>
                    <h3 className='bg-dark'>"Digital Classroom"</h3>
                   
                </Carousel.Caption>
            </Carousel.Item>

             <Carousel.Item>
                <img className="d-block w-100" src={learn} alt="First slide"  width={200} height={400}/> 
                 <Carousel.Caption>
                  <h3 className='bg-dark'>"Online Educational Platforms"</h3>
                 
                </Carousel.Caption>
              </Carousel.Item>

             <Carousel.Item>
                <img className="d-block w-100" src={interact} alt="First slide"  width={200} height={400}/> 
                 <Carousel.Caption>
                    <h3 className='bg-dark'>"Interactive Learning Modules"</h3>
                    
                  </Carousel.Caption>
              </Carousel.Item>
       
        </Carousel>
                    </div>
                    <footer className="blockquote-footer pt-4 mt-4 border-top">
                        <cite title="Source Title">Springdale Public School
                        </cite>
                    </footer>
                </blockquote>

            </div>
             
            </div>
              
        </div>



  

 
  
   
    
    </div>
  )
}

export default Academics