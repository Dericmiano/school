import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {listSchoolChoiceDetails} from "../actions/schoolActions";
import {Link} from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
import {Button, Card, Col, Form, Image, ListGroup, ListGroupItem, Row} from "react-bootstrap";
function SchoolChoiceDetails({match, history}) {
    const [numberOfChoice, setNumberOfChoice] = useState(3)


    const dispatch = useDispatch()
    const schoolChoiceDetails = useSelector(state => state.schoolChoiceDetails)
    const {loading, error, school} = schoolChoiceDetails

    useEffect(() => {
        dispatch(listSchoolChoiceDetails(match.params.id))
        console.log(numberOfChoice)


    }, [numberOfChoice,dispatch,match])
    function selectHandler() {
        history.push(`/select/${match.params.id}?numberOfChoice=${numberOfChoice}`)

    }
    return(
        <div>
            <Link className='btn btn-light' to='/schoolChoose'>go back</Link>
            <h8 className="animate__animated animate__pulse">please ensure you select the number of
                choice of the school in the dropdown
            </h8>
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
                    <Col>
                        <ListGroupItem>
                {school.numberOfChoice > 0 && (
                    <Row>
                        <Col>choice no</Col>
                        <Col xs='auto' className='my-1'>
                            <Form.Control
                                as='select'
                                value={numberOfChoice}
                                onChange={(e) =>setNumberOfChoice(e.target.value)}
                            >
                                {
                                    [...Array(school.numberOfChoice).keys()].map((x)=>(
                                        <option key={x+1} value={x+1}>
                                            {x+1}
                                        </option>
                                    ))
                                }
                            </Form.Control>
                        </Col>
                    </Row>
            )}
            </ListGroupItem>
                        <br/>
            <Button onClick={selectHandler}
                    className='btn-block'

                    // disabled={school.numberOfstudents===0}

                    type='button'>select
            </Button>
                    </Col>
            </Row>
            }


        </div>
    )

}
export default SchoolChoiceDetails