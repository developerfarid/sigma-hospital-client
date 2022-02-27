import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './SingleCardDoctor.css';
import Swal from 'sweetalert2';

const SingleCardDoctor = ({ doc, handleDelete }) => {
    const { _id, photo, name, title, address, linkedin, facebook, twitter } = doc;

  

    return (
        <div>
            <Col>
                <Card className='text-center card-control2'>
                    <Card.Img className='doctor-image' variant="top" src={`data:image/*;base64,${photo}`} />
                    <Card.Body>
                        <NavLink to={`/allDoctors/${_id}`} style={{ textDecoration: "none" }}><Card.Title>{name}</Card.Title></NavLink>
                        <small className='text-secondary'>{title}</small>
                        <div className='doctor-social-media'>
                            <a href={facebook} target="_blank" rel="noreferrer"><i className="fab fa-facebook-f text-secondary"></i></a>
                            <br />
                            <a href={linkedin} target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in text-secondary"></i></a>
                            <br />
                            <a href={twitter} target="_blank" rel="noreferrer"><i className="fab fa-twitter text-secondary"></i></a>
                        </div>
                        <Card.Text>{address}</Card.Text>
                        <div className='d-flex justify-content-evenly align-items-start mt-3'>
                            <NavLink to={`/allDoctors/update/${_id}`}>
                                <Button className='doctor-update'>Update</Button>
                            </NavLink>
                            <Button onClick={() => handleDelete(_id)} className='doctor-delete'>Delete</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default SingleCardDoctor;