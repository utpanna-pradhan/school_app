import React from 'react';
import  '../Stylesheet/Faculty.css';
import Card from 'react-bootstrap/Card';
import Header from './Header';
import f1 from '../images/f1.jpg';
import f2 from '../images/f2.jpg';
import f3 from '../images/f3.jfif';
import f4 from '../images/f4.jpg';
import f5 from '../images/f5.jpg';
import f6 from '../images/f6.webp';


function Faculty() {
  return (
    <div>
        <Header />
        <h1 className="text-center text-info pt-4">FACULTY</h1>
        <div className="container">
             <div className="row m-4">
            <div className="col-md-4">
                 <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={f1} style={{height:'280px'}} />
                <Card.Body style={{height:'150px'}}>
                    <Card.Title className="text-center text-info">John Doe</Card.Title>
                    <Card.Text>
                        <h6 className="text-center" >Principal, M.Ed</h6>
                    </Card.Text>
                    <Card.Text className="text-center text-secondary" >
                        20 years of experience in educational administration
                    </Card.Text>
                    
        
                </Card.Body>
            </Card>
            </div>
            
             <div className="col-md-4">
                 <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={f2} style={{height:'280px'}}/>
                <Card.Body style={{height:'150px'}}>
                    <Card.Title  className="text-center text-info">Jane Smith</Card.Title>
                    <Card.Text >
                        <h6 className="text-center" >Vice Principal, M.Sc. in Physics</h6>
                    </Card.Text>
                    <Card.Text className="text-center  text-secondary" >
                        15 years of teaching experience.

                    </Card.Text>
                    
        
                </Card.Body>
            </Card>
            </div>



             <div className="col-md-4">
                 <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={f3} style={{height:'280px'}}/>
                <Card.Body style={{height:'150px'}}>
                    <Card.Title  className="text-center text-info">Emily Johnson</Card.Title>
                    <Card.Text>
                        <h6 className="text-center" > English Teacher, M.A. in English</h6>
                    </Card.Text>
                    <Card.Text className="text-center  text-secondary" >
                        10 years of teaching experience.


                    </Card.Text>
                    
        
                </Card.Body>
            </Card>
            </div>
            
        </div>


         <div className="row m-4">
            <div className="col-md-4">
                 <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={f4} style={{height:'280px'}} />
                <Card.Body style={{height:'150px'}}>
                    <Card.Title className="text-center text-info">Michael Brown</Card.Title>
                    <Card.Text>
                        <h6 className="text-center" > Mathematics Teacher, M.Sc. in Mathematics</h6>
                    </Card.Text>
                    <Card.Text className="text-center  text-secondary" >
                         8 years of teaching experience
                    </Card.Text>
                    
        
                </Card.Body>
            </Card>
            </div>
            
             <div className="col-md-4">
                 <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={f5} style={{height:'280px'}}/>
                <Card.Body style={{height:'150px'}}>
                    <Card.Title  className="text-center text-info">Sophia Davis</Card.Title>
                    <Card.Text >
                        <h6 className="text-center" >Science Teacher, M.Sc. in Chemistry</h6>
                    </Card.Text>
                    <Card.Text className="text-center  text-secondary" >
                       12 years of teaching experience.


                    </Card.Text>
                    
        
                </Card.Body>
            </Card>
            </div>



             <div className="col-md-4">
                 <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={f6} style={{height:'280px'}}/>
                <Card.Body style={{height:'150px'}}>
                    <Card.Title  className="text-center text-info">David Wilson</Card.Title>
                    <Card.Text>
                        <h6 className="text-center" >  Computer Science Teacher, B.Tech in Computer Science</h6>
                    </Card.Text>
                    <Card.Text className="text-center  text-secondary" >
                        5 years of teaching experience


                    </Card.Text>
                    
        
                </Card.Body>
            </Card>
            </div>
            
        </div>
        </div>
       
    
    </div>
  )
}

export default Faculty