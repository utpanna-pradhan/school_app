import React from 'react';
import  '../Stylesheet/Faculty.css';
import Card from 'react-bootstrap/Card';
import Header from './Header';
import '../Stylesheet/Student.css';
import f4 from '../images/s1.jpg';
import f5 from '../images/s2.jpg';
import f6 from '../images/s3.webp';
import s4 from '../images/s4.png';
import s5 from '../images/s5.jpg';
import s6 from '../images/s6.jfif';

import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';

function Student() {
  return (
    <div>
        <Header />
        <div className="container">
            <div className="life">
                  <div className="row">
                    <h1 className='text-center p-3 text-info'>Life at Springdale</h1>
                  <div className="col-lg-6 mx-auto">

                
                <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded">
                    <div className="blockquote-custom-icon bg-light shadow-sm"><h3>Extracurricular Activitie</h3></div>
                    
                    <p className="mb-0 mt-2 font-italic">
                         <li><i class="fa-solid fa-music"></i>Music</li>
                        <li><i class="fa-solid fa-fire-flame-curved"></i>Dance</li>
                        <li><i class="fa-solid fa-film"></i>Drama</li>
                        <li><i class="fa-solid fa-palette"></i>Art</li>
                        <li><i class="fa-solid fa-baseball"></i>Sports</li>
                        <li><i class="fa-solid fa-robot"></i> Robotics</li>
                        <li><i class="fa-solid fa-book-open-reader"></i>Debate Club</li>
                        <li><i class="fa-solid fa-flask"></i>Science Club</li>
                    </p>
                   
                </blockquote>

            </div>
              <div className="col-lg-6 mx-auto">

                
                <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded" >
                    <div className="blockquote-custom-icon bg-light shadow-sm"> <h3 >Clubs and Societies</h3></div>
                    
                    <p className="mb-0 mt-2 font-italic">
                         <li><i class="fa-solid fa-book-open"></i>Literary Society</li>
                         <li><i class="fa-solid fa-seedling"></i>Environmental Club</li>
                        <li><i class="fa-solid fa-shuttle-space"></i>Astronomy Club</li>
                        <li><i class="fa-solid fa-laptop-code"></i>Coding Club</li>
                        
                    </p>
                  
                </blockquote>

            </div>
            </div>
           
            </div>
            <div className="achivement">
                 <div className="row m-4">
                   <h1 className='text-center p-3 text-info'>Achivement</h1>
            <div className="col-md-4">
                 <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={f4} style={{height:'280px'}} />
                <Card.Body style={{height:'150px'}}>
                    <Card.Title className="text-center text-info">John Smith</Card.Title>
                    <Card.Text>
                        <h6 className="text-center" > - National Level Math Olympiad Winner</h6>
                    </Card.Text>
                   
        
                </Card.Body>
            </Card>
            </div>
            
             <div className="col-md-4">
                 <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={f5} style={{height:'280px'}}/>
                <Card.Body style={{height:'150px'}}>
                    <Card.Title  className="text-center text-info">Sarah Lee</Card.Title>
                    <Card.Text >
                        <h6 className="text-center" >Gold Medalist in State Swimming Championship</h6>
                    </Card.Text>
                  
                    
        
                </Card.Body>
            </Card>
            </div>



             <div className="col-md-4">
                 <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={f6} style={{height:'280px'}}/>
                <Card.Body style={{height:'150px'}}>
                    <Card.Title  className="text-center text-info">Tech Innovators Club</Card.Title>
                    <Card.Text>
                        <h6 className="text-center" > Winners of Inter-School Robotics Competition</h6>
                    </Card.Text>
                   
        
                </Card.Body>
            </Card>
            </div>
            
        </div>
      
            </div>
        </div>
    

<div className="row stud">
   <h1 className='text-center p-3 text-info m-3'>Student Council</h1>
  <div className="col-md-4">
    <MDBCard>
      <MDBCardImage position='top' alt='...' src={s4} height={330} />
      <MDBCardBody>
        <MDBCardTitle>President</MDBCardTitle>
      
      </MDBCardBody>
      <MDBListGroup flush>
        <MDBListGroupItem> Amy Parker</MDBListGroupItem>
        <MDBListGroupItem>Grade 12</MDBListGroupItem>
        
      </MDBListGroup>
    
    </MDBCard>
  </div>
   <div className="col-md-4">
    <MDBCard>
      <MDBCardImage position='top' alt='...' src={s5} height={330}/>
      <MDBCardBody>
        <MDBCardTitle>Vice President</MDBCardTitle>
       
      </MDBCardBody>
      <MDBListGroup flush>
        <MDBListGroupItem>Rajiv Mehta</MDBListGroupItem>
        <MDBListGroupItem>Grade 11</MDBListGroupItem>
       
      </MDBListGroup>
   
    </MDBCard>
  </div>
  <div className="col-md-4">
    <MDBCard>
      <MDBCardImage position='top' alt='...' src={s6} height={330}/>
      <MDBCardBody>
        <MDBCardTitle>Secretary</MDBCardTitle>
       
      </MDBCardBody>
      <MDBListGroup flush>
        <MDBListGroupItem> Lisa Wong</MDBListGroupItem>
        <MDBListGroupItem>Grade 10</MDBListGroupItem>
       
      </MDBListGroup>
    
    </MDBCard>
  </div>
</div>
    
</div>
  )
}

export default Student