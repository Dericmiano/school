import React from "react";
import {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import {Form, Row, Col, Button, Image, Card, FormGroup, ListGroupItem, ListGroup} from "react-bootstrap";
import {useDispatch,useSelector} from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import CheckOutSteps from "../components/CheckOutSteps";
import {createApplication} from "../actions/applicationActions";
import {studentRegisterReducer} from "../reducers/studentsReducers";
import {saveStudentsPriDetails, saveStudentsPriScores} from "../actions/selectActions";
import {APPLICATION_CREATE_RESET} from "../contants/applicationConstants";
import schools from "../schools";

function SubmitScreen({history}) {
    // const [selectOne,setSelecOne]=useState('')
    const applicationCreate = useSelector(state => state.applicationCreate)
    const {application,error,success} = applicationCreate
    const dispatch = useDispatch()
    const select = useSelector(state => state.select)
    select.studentTotal = Number(select.studentPriScores.science) + Number(select.studentPriScores.english) +
        Number(select.studentPriScores.maths) + Number(select.studentPriScores.socialStudies) + Number(
            select.studentPriScores.kiswahili
        )
    select.averageScore = Number(select.studentTotal) / 5;
    select.name = select.studentPriDetails.username;



    useEffect(()=>{
        if (success){
            history.push(`/application/${application._id}`)
            dispatch({type:APPLICATION_CREATE_RESET})
        }
    },[application,success, history])

    const submitHandler = () => {
        dispatch(createApplication({
            applicationItems:select.selectSchools,
            studentPriScores:select.studentPriScores,
            studentPriDetails:select.studentPriDetails,
            studentScoreAverage:select.averageScore,
            username:select.name,


        }))
        console.log("selection placed")

    }
    //
    //  for (select.school in select.selectSchools){
    //     if (select.school.numberOfChoice ===1){
    //     return select.selectSchools.name
    // }
    //
    // }

    return(
        <div>
            <CheckOutSteps step1 step2 step3 step4/>
            <Row>
                <Col md={3}>
                    <ListGroup >
                        <ListGroup.Item>
                            <h5>student details</h5>
                            <br/>
                            <Row>
                                <Col><strong>name:</strong></Col>
                                <Col>{select.studentPriDetails.username}</Col>
                            </Row>
                             <Row>
                                <Col><strong>index:</strong></Col>
                                <Col>{select.studentPriDetails.index_number}</Col>
                            </Row>
                             <Row>
                                <Col><strong>gender:</strong></Col>
                                <Col>{select.studentPriDetails.sex}</Col>
                            </Row>
                             <Row>
                                <Col><strong>DOB:</strong></Col>
                                <Col>{select.studentPriDetails.DOB}</Col>
                            </Row>
                             <Row>
                                <Col><strong>school:</strong></Col>
                                <Col>{select.studentPriDetails.school}</Col>
                            </Row>

                        </ListGroup.Item>


                    </ListGroup>

                </Col>
                 <Col md={3}>
                    <ListGroup >
                        <ListGroup.Item>
                            <h5>KCPE scores</h5>

                             <Row>
                                <Col><strong>maths:</strong></Col>
                                <Col>{select.studentPriScores.maths}</Col>
                            </Row>
                             <Row>
                                <Col><strong>english:</strong></Col>
                                <Col>{select.studentPriScores.english}</Col>
                            </Row>
                             <Row>
                                <Col><strong>kiswahili:</strong></Col>
                                <Col>{select.studentPriScores.kiswahili}</Col>
                            </Row>
                             <Row>
                                <Col><strong>science:</strong></Col>
                                <Col>{select.studentPriScores.science}</Col>
                            </Row>
                             <Row>
                                <Col><strong>s/studies:</strong></Col>
                                <Col>{select.studentPriScores.socialStudies}</Col>
                            </Row>

                            <Row>
                                <Col><strong>s/totals:</strong></Col>
                                <Col>{select.studentTotal}</Col>
                            </Row>
                             <Row>
                                <Col><strong>Average:</strong></Col>
                                <Col>{select.averageScore}</Col>
                            </Row>


                        </ListGroup.Item>


                    </ListGroup>

                </Col>
                <Col md={6}>
                    <h6>selected schools</h6>
                    {select.selectSchools.length === 0 ? <Message variant='info'>you selection is empty</Message>
                    :(
                        <ListGroup>
                            {select.selectSchools.map((item, index) =>(
                                <ListGroup.Item key={index}>
                                    <Row>
                                        <Col md={2}>
                                            <Image src={item.image} alt={item.name} fluid rounded/>
                                        </Col>
                                        <Col>
                                            <Link to={`/school/${item.school}`}>{item.name}</Link>
                                        </Col>
                                        <Col>
                                            Choice:<strong>{item.numberOfChoice}</strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                        )

                    }
                </Col>
            </Row>
            <br/>

            <Row>
                {/*{select.selectOne}*/}
                {error && <Message variant='danger'>{error}</Message> }

                <h6> Ensure the following is collect * school details *KCSE Scores  * selected schools
                    </h6>
                <br/>
                <Button type='submit' className='btn btn-block' onClick={submitHandler}>
                    place selection

                </Button>

            </Row>

        </div>
    )

}
export default SubmitScreen;