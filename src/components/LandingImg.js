import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import Cars from './Cars';



function LandingImg() {

    return (
        <div>
            <div>
                <Carousel slide={false}>
                    <Carousel.Item>

                        <img style={{ height: 600 }}

                            className="d-block w-100"
                            src="https://images.pexels.com/photos/379419/pexels-photo-379419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <p>Find Your Dream Car</p>
                            <h3 className='text-danger' >SUV</h3>
                            <h3 className='text-danger'>SEDAN</h3>
                            <h3 className='text-danger'>CROSSOVER</h3>
                            <h3 className='text-danger'>HATCHBACK</h3>
                            <h1>FAST AND AFFORDABLE</h1>
                            <Link to={'viewAll'}>
                                <button className='btn btn-warning'>EXPLORE</button>

                            </Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{ height: 600 }}
                            className="d-block w-100"
                            src="https://i.postimg.cc/MKmWKxtx/pexels-photo-8658227.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <p>Find Your Dream Car</p>
                            <h3 className='text-info' >SUV</h3>
                            <h3 className='text-info'>SEDAN</h3>
                            <h3 className='text-info'>HATCHBACK</h3>
                            <h3 className='text-info'>CROSSOVER</h3>
                            <h1>FAST AND AFFORDABLE</h1>
                            <button className='btn btn-warning'>EXPLORE</button>

                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </div>
            <div className='text-center mt-2'>
                <img style={{ height: 90 }} src="https://i.postimg.cc/P5K6QcVj/carlogo.png" alt="" />

            </div>
        </div>
    )
}

export default LandingImg