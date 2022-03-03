import React,{useState,useEffect} from "react";
import {LinkContainer} from "react-router-bootstrap";
import {Form, Button, Row, Col, FormGroup, Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import {listApplications} from "../actions/applicationActions";
function ApplicationListScreen({history}) {
    const dispatch = useDispatch()
    const  applicationList = useSelector(state => state.applicationList)
    const {loading, applications, error} = applicationList

    const  userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

        useEffect(() => {
        if (userInfo && userInfo.isAdmin){
            dispatch(listApplications())

        }else{
            history.push('/login')
        }

    },[dispatch, history, userInfo])

    return(

        <div>
            <h1>successful applications</h1>
            {loading ? (
                <Loader/>
                )
                : error ? (
                    <Message variant='danger'>{error}</Message>
                ):(
                        <Table striped bordered hover responsive className='table-sm'>
                        <thead>
                        <tr>
                            <th>ID</th>
                            {/*<th>choice no</th>*/}
                            <th>USER</th>
                            <th>SCHOOL</th>
                            <th>population</th>
                            <th>Cutoff</th>
                            <th>average</th>
                            <th></th>

                        </tr>
                        </thead>
                        <tbody>

                        {applications.map(application =>(

                            <tr key={application._id}>
                                    <td>{application._id}</td>
                                    {/*<td>{application.numberOfChoice}</td>*/}
                                    <td>{application.username}</td>
                                    <td>{application.name}</td>
                                    <td>{application.numberOfstudents}</td>
                                    <td>{application.cutoff}</td>
                                    <td>{application.studentScoreAverage}</td>
                                    <td>
                                                <LinkContainer to={`/application/${application.application}`}>
                                                    <Button variant='light' className='btn-sm'>
                                                        details
                                                    </Button>

                                                </LinkContainer>

                                            </td>




                            </tr>
                        ))}

                        </tbody>
                    </Table>

                )
            }

        </div>
    )

}
export default ApplicationListScreen