import React from "react";
import {ListGroupItem, Col, Card, Image, Form, Button, Row, ListGroup} from "react-bootstrap";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

function StudentsDetailScreen({history}) {
    const studentRegister = useSelector(state => state.studentRegister)
    const {studentInfo} = studentRegister
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

      if (!userInfo){
            history.push('/login')
        }


    return(

        <Row>
            <h5>please confirm your student details </h5>
            <Col md={8}>
                <ListGroup variant='flush' striped bordered hover responsive className='table-sm'>
                    <Card>
                        <ListGroupItem>
                            <Row>
                                <Col><strong>student Details</strong></Col>
                                <Col><strong>Credentials</strong></Col>
                            </Row>
                        </ListGroupItem>
                         <ListGroupItem>
                            <Row>
                                <Col><strong>user names:</strong></Col>
                                <Col>{userInfo.name}</Col>
                            </Row>
                        </ListGroupItem>
                         <ListGroupItem>
                            <Row>
                                <Col><strong> email:</strong></Col>
                                <Col>{userInfo.email}</Col>
                            </Row>
                        </ListGroupItem>

                        <ListGroupItem>
                            <Row>
                                <Col><strong>full names:</strong></Col>
                                <Col>{studentInfo.username}</Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col><strong>index No:</strong></Col>
                                <Col>{studentInfo.index_number}</Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col><strong>pri school:</strong></Col>
                                <Col>{studentInfo.school}</Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col><strong>D.O.B:</strong></Col>
                                <Col>{studentInfo.DOB}</Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col><strong>gender:</strong></Col>
                                <Col>{studentInfo.sex}</Col>
                            </Row>
                        </ListGroupItem>

                    </Card>



                </ListGroup>
                <ListGroupItem>
                    <Link className='btn btn-dark' to='/studentEntryScores'>proceed to selection</Link>
                </ListGroupItem>

                {/*<Button><Link to={'/studentEntryScores'}/>Proceed to enter your scores</Button>*/}

            </Col>



        </Row>
    )

}
export default StudentsDetailScreen