import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ModalWindow = ({ adressElem }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="info" onClick={handleShow}>
                Address
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Location address
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h6>Country: {adressElem.address.country}</h6>
                    <h6>City: {adressElem.address.city}</h6>
                    <h6>State: {adressElem.address.state}</h6>
                    <h6>Street: {adressElem.address.streetA}</h6>
                    <h6>Zipcode: {adressElem.address.zipcode}</h6>
                </Modal.Body>
            </Modal>
        </div>
    )
};

export default ModalWindow;
