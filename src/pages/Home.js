import React from 'react';
import {Carousel} from 'react-bootstrap'
import Slider1 from '../images/slider1.jpg'
import Slider2 from '../images/slider2.jpg'
import Slider3 from '../images/slider3.jpg'



const Home = () => {
  const heading = {
      color:'white',
      textTransform : 'uppercase',
      textShadow : '1px 1px 5px rgba(0,0,0)',

    }

    const pera = {
      textShadow : '1px 1px 5px rgba(0,0,0)',

    }


    return (
        <div>
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slider1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={heading}>Your Reviews are important for the teacher</h3>
          <p style={pera}>The student who has the power to motivate the teachers.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slider2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 style={heading}>Our Students</h3>
          <p style={pera}>Students are the foundation of institute.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slider3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 style={heading}>Our Teachers</h3>
          <p style={pera}>
          I cannot teach anybody anything; I can only make them think.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default Home;