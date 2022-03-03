import React from "react";
import {Link} from "react-router-dom";
import {Button, Row, Col, Image, ListGroup, Card, ListGroupItem} from "react-bootstrap";
import {useState,useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {listSchoolsDetails} from "../actions/schoolActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

// import axios from "axios";
function SchoolScreen({ match }) {
    const dispatch = useDispatch()
    const schoolDetails = useSelector(state => state.schoolDetails)
    const {loading, error, school} = schoolDetails

    useEffect(() => {
        dispatch(listSchoolsDetails(match.params.id))

    }, [dispatch,match])
    return(
        <div>
            <Link className='btn btn-light' to='/school'>go back</Link>
            {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message>
            :
                <Row>
                <Col md={6}>
                    <Image src={school.image} alt={school.name}/>
                </Col>
                    <Col md={3}>
                        <ListGroup variant='flush'>
                            <ListGroupItem>
                                <h3>{school.name}</h3>
                            </ListGroupItem>
                            <ListGroupItem>
                                <p> School Motto: {school.motto}</p>
                            </ListGroupItem>
                            <ListGroupItem>
                                <strong>cutoff: {school.cutoff}</strong>
                            </ListGroupItem>

                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroupItem>
                                    <Row>
                                        <Col>School level:</Col>
                                        <Col>{school.level}</Col>

                                    </Row>
                                </ListGroupItem>
                                 <ListGroupItem>
                                    <Row>
                                        <Col>School location:</Col>
                                        <Col>{school.location}</Col>

                                    </Row>
                                </ListGroupItem>
                                 <ListGroupItem>
                                    <Row>
                                        <Col>School status:</Col>
                                        <Col>{school.status}</Col>

                                    </Row>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <Row>
                                        <Col> number of students:</Col>
                                        <Col>{school.numberOfstudents}</Col>
                                    </Row>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <Link className='btn btn-dark' to='/success'>proceed to selection
                                    </Link>
                                </ListGroupItem>
                            </ListGroup>
                        </Card>
                    </Col>
            </Row>
            }



        </div>
    )

}
export default SchoolScreen