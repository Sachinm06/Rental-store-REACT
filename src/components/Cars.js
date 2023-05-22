import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Cars.css'


function Cars() {

    const [carList, setCar] = useState([])

    //api
    const getData = async () => {
        const result = await fetch('./car_rentals.json')
        //converting to js
        result.json().then(data => setCar(data.car_rentals))

    }
    console.log(carList);

    useEffect(() => {
        getData()
    }, [])


    return (
        <div>

            <img className='mt-3' src="https://i.postimg.cc/wBFsPr3Q/viewall.jpg" alt=""
                style={{ width: '100%', height: 'auto' }} />
            <div className='container w-100'>
                <Row className=''>

                    {
                        carList.map(car => (
                            <Col id='c1' lg={4} md={6}>
                                <Link id='l1' to={`/singleView/${car.id}`} >
                                    <Card className='mt-5 container w-75' style={{ width: '18rem' }}>
                                        <Card.Img className='mt-3' style={{ height: 250 }} variant="top" src={car.photo} />
                                        <Card.Body>
                                            <Card.Title>{car.name}</Card.Title>
                                            <Card.Text>{car.location}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        ))
                    }

                </Row>
            </div>
        </div>
    )
}

export default Cars