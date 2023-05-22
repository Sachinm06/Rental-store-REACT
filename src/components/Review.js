import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';


function Review({ reviewList }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button style={{marginTop:-103,marginLeft:253}} variant="primary" onClick={handleShow}>
                Reviews            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Reviews </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        reviewList.map(i =>
                            <>
                                <div>

                                    <h6>{i.name}</h6>
                                    <p>{i.date}</p>
                                    <h4>{i.rating}</h4>
                                    <p> {i.comments}</p>
                                </div>
                                <hr />
                            </>
                        )
                    }

                </Modal.Body>

            </Modal>

        </div>
    )
}

export default Review