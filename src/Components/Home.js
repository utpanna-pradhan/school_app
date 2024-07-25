import React from 'react';
import Header from './Header';
import Car from './Car';

function Home() {
  return (
    <div className='home_container bg-light'>
      <Header />
      <div className="home">
          <h4 className='text-center text-uppercase pt-4 pb-4'> "Welcome to Springdale Public School, where we nurture young minds for a brighter future."
          </h4>
          <Car />
      </div>
    </div>
  )
}

export default Home