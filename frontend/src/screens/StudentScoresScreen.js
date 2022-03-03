import React, {useState} from "react";
import {useSelector} from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import {Card, Col, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
function StudentScoresScreen({history, location}) {
    const [message,setMessage] = useState('')

    const studentRegister = useSelector(state => state.studentRegister)
    const {studentInfo} = studentRegister

    const studentRegisterScores = useSelector(state => state.studentRegisterScores)
    const {error, loading, studentScores} = studentRegisterScores

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

      if (!userInfo){
            history.push('/login')
        }else if (!studentScores){
          history.push('/studentEntryScores')
      }

    return(
        <Row>
            <h5> students score</h5>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader/>}
             <Col md={8}>
                <ListGroup variant='flush' striped bordered hover responsive className='table-sm'>
                    <Card>
                        <ListGroupItem>
                            <Row>
                                <Col><strong>Subjects</strong></Col>
                                <Col><strong>scores</strong></Col>
                            </Row>
                        </ListGroupItem>
                         <ListGroupItem>
                            <Row>
                                <Col><strong> mathes:</strong></Col>
                                <Col>{studentScores.mathes}</Col>
                            </Row>
                        </ListGroupItem>
                         <ListGroupItem>
                            <Row>
                                <Col><strong> English:</strong></Col>
                                <Col>{studentScores.english}</Col>
                            </Row>
                        </ListGroupItem>

                        <ListGroupItem>
                            <Row>
                                <Col><strong>kiswahili:</strong></Col>
                                <Col>{studentScores.kiswahili}</Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col><strong>Science:</strong></Col>
                                <Col>{studentScores.science}</Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col><strong>socialStudies:</strong></Col>
                                <Col>{studentScores.socialStudies}</Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col><strong>AverageScore:</strong></Col>
                                <Col>{studentScores.averageScore}</Col>
                            </Row>
                        </ListGroupItem>


                    </Card>



                </ListGroup>
                <ListGroupItem>
                    <Link className='btn btn-dark' to='/success'>Test</Link>
                </ListGroupItem>

                {/*<Button><Link to={'/studentEntryScores'}/>Proceed to enter your scores</Button>*/}

            </Col>


        </Row>
    )

}
export default StudentScoresScreen