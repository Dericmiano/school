import React from "react";
import {useEffect} from "react";
import {Link} from "react-router-dom";
import {Row, Col, ListGroup} from "react-bootstrap";
import {useDispatch,useSelector} from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import {getApplicationDetails} from "../actions/applicationActions";

function ApplicationScreen({match}) {
    const applicationId = match.params.id
    const dispatch = useDispatch()

    const applicationDetails = useSelector(state => state.applicationDetails)
    const {application,error,loading} = applicationDetails

    if (!loading && !error){
        // application.selectSchools =

        application.studentTotal = Number(application.studentPriScores.science) + Number(application.studentPriScores.english) +
        Number(application.studentPriScores.mathes) + Number(application.studentPriScores.socialStudies) + Number(
            application.studentPriScores.kiswahili
        )
    application.averageScore = Number(application.studentTotal) / 5;
    }
    useEffect(()=>{
        if (!application || application._id !== Number(applicationId)){
               dispatch(getApplicationDetails(applicationId))
        }

    },[application, applicationId, dispatch])
    // application.selectOne = application.selectSchools.numberOfChoice ===1



    return loading ? (
        <Loader/>
    ): error ? (
        <Message variant='danger'>{error}</Message>
    ): (
        <div>
            <h1>Application Id:{application._id}</h1>
            <h2>name :{application.user.name}</h2>
            <Row>
                <Col md={4}>
                    <ListGroup >
                        <ListGroup.Item>
                            <h5>student details</h5>
                            {/*{application.selectOne}*/}
                            <Row>
                                <Col><strong>email:</strong></Col>
                                <Col>{application.user.username}</Col>
                            </Row>
                            <Row>
                                <Col><strong>name:</strong></Col>
                                <Col>{application.studentPriDetails.username}</Col>
                            </Row>
                             <Row>
                                <Col><strong>index:</strong></Col>
                                <Col>{application.studentPriDetails.index_number}</Col>
                            </Row>
                             <Row>
                                <Col><strong>gender:</strong></Col>
                                <Col>{application.studentPriDetails.sex}</Col>
                            </Row>
                             <Row>
                                <Col><strong>DOB:</strong></Col>
                                <Col>{application.studentPriDetails.DOB}</Col>
                            </Row>
                             <Row>
                                <Col><strong>school:</strong></Col>
                                <Col>{application.studentPriDetails.school}</Col>
                            </Row>

                        </ListGroup.Item>


                    </ListGroup>

                </Col>
                 <Col md={3}>
                    <ListGroup >
                        <ListGroup.Item>
                            <h5>KCSE scores</h5>

                             <Row>
                                <Col><strong>mathes:</strong></Col>
                                <Col>{application.studentPriScores.mathes}</Col>
                            </Row>
                             <Row>
                                <Col><strong>english:</strong></Col>
                                <Col>{application.studentPriScores.english}</Col>
                            </Row>
                             <Row>
                                <Col><strong>kiswahili:</strong></Col>
                                <Col>{application.studentPriScores.kiswahili}</Col>
                            </Row>
                             <Row>
                                <Col><strong>science:</strong></Col>
                                <Col>{application.studentPriScores.science}</Col>
                            </Row>
                             <Row>
                                <Col><strong>s/studies:</strong></Col>
                                <Col>{application.studentPriScores.socialStudies}</Col>
                            </Row>

                            <Row>
                                <Col><strong>s/totals:</strong></Col>
                                <Col><strong>{application.studentTotal}</strong></Col>
                            </Row>
                             <Row>
                                <Col><strong>Average:</strong></Col>
                                <Col><strong>{application.averageScore}</strong></Col>
                            </Row>


                        </ListGroup.Item>


                    </ListGroup>

                </Col>
                <Col md={5}>
                    {application.applicationItems.length === 0 ? <Message variant='info'>you application is empty</Message>:(
                        <ListGroup>
                            <ListGroup.Item><Row><h6>selected schools</h6></Row></ListGroup.Item>
                            {application.applicationItems.map((item, index) =>(
                                <ListGroup.Item key={index}>

                                    <Row>
                                        {/*<Col md={2}>*/}
                                        {/*    <Image src={item.image} alt={item.name} fluid rounded/>*/}
                                        {/*</Col>*/}
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



            </Row>

        </div>
    )

}
export default ApplicationScreen;