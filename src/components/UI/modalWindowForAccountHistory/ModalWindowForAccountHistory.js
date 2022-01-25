import React, { useState } from 'react';
import { Modal, Container, Row, Col,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ModalWindowForAccountHistory = ({ accountHistory }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="info" onClick={handleShow}>
                History
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="xl"
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Account History
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row className='flex items-baseline'>
                            {accountHistory.accountHistory.map((item, i) => {
                                return (
                                    <Col xs={6} md={4} key={i}>
                                        <h6>{item.name}</h6>
                                        <p>Business: {item.business}</p>
                                        <p>Date: {item.date}</p>
                                        <p>Type: {item.type}</p>
                                    </Col>
                                )
                            })}
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </div>
    )
};

export default ModalWindowForAccountHistory;
