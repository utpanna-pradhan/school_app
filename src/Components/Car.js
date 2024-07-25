import React from 'react';
import { Carousel } from 'react-bootstrap';
import cultural from '../images/cultural1.jpg';
import sports from '../images/sports3.jpg';
import science from '../images/science3.jpg';

function Car() {
  return (
    <div>
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={cultural} alt="First slide"  width={200} height={400}/> 
                 <Carousel.Caption>
                    <h3>"Cultural Fest"</h3>
                    <p> Embracing Diversity and Creativity</p>
                </Carousel.Caption>
            </Carousel.Item>

             <Carousel.Item>
                <img className="d-block w-100" src={sports} alt="First slide"  width={200} height={400}/> 
                 <Carousel.Caption>
                  <h3>"Annual Sports Day"</h3>
                  <p>Celebrating Excellence in Sports</p>
                </Carousel.Caption>
              </Carousel.Item>

             <Carousel.Item>
                <img className="d-block w-100" src={science} alt="First slide"  width={200} height={400}/> 
                 <Carousel.Caption>
                    <h3>"Science Exhibition"</h3>
                    <p>Showcasing Student Innovations</p>
                  </Carousel.Caption>
              </Carousel.Item>
       
        </Carousel>
    </div>
  )
}

export default Car