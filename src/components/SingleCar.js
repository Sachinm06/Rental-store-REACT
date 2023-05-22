import React, { useEffect, useState } from 'react'
import { Col, ListGroup, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import OperatingTime from './OperatingTime'
import Review from './Review'
import './SingleCar.css'




function SingleCar() {



  // const [carList, setCar] = useState([])

  // //api
  // const getData = async () => {
  //     const result = await fetch('./car_rentals.json')
  //     //converting to js
  //     result.json().then(data => setCar(data.car_rentals))

  // }
  // console.log(carList);

  // useEffect(() => {
  //     getData()
  // }, [])

  //  //object create for useParms
  //  const params=useParams()
  //  console.log(params.id);


  const [carList, setCar] = useState([])

  //api to access data

  const getData = async () => {
    const result = await fetch('/car_rentals.json')
    result.json().then(data => setCar(data.car_rentals))
  }
  //object create for useParams
  const params = useParams()
  console.log(params.id);

  //find single carShop data
  const singleCar = carList.find(i => i.id == params.id)
  console.log(singleCar);


  useEffect(() => {
    getData()
  }, [])





  return (
    <div className='container'>

      {singleCar ?
        (<Row>
          <Col lg={6} md={6}>
            <img className='w-100 container p-5' style={{ height: '650px' }}
              src={singleCar.photo}
            />
          </Col>

          <Col lg={6} md={6} className=' mt-5 fs-5'>
            <ListGroup className='ps-1'>
              <ListGroup.Item><h1 className='text-warning'>{singleCar.name}</h1></ListGroup.Item>
              <ListGroup.Item><strong> Location- </strong> {singleCar.location}</ListGroup.Item>
              <ListGroup.Item> <strong> Vehicle types-</strong>{singleCar.vehicle_types}</ListGroup.Item>
              <ListGroup.Item>
                <OperatingTime workingTime={singleCar.operating_hours} ></OperatingTime >

                <Review reviewList={singleCar.reviews}></Review>

              </ListGroup.Item>
            </ListGroup>
          </Col>

        </Row>) : ""
      }
    </div>
    )
}

export default SingleCar