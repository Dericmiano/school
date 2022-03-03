import React,{useState,useEffect} from "react";
import {LinkContainer} from "react-router-bootstrap";
import {Form, Button, Row, Col, FormGroup, Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import {listSchools,deleteSchool,createSchool} from "../actions/schoolActions";
import {SCHOOL_CREATE_RESET} from "../contants/schoolConstants";

function AllSchoolsListScreen({history, match}) {
    const  dispatch = useDispatch()

    const  schoolList = useSelector(state => state.schoolList)
    const {loading, schools, error} = schoolList

    const  schoolDelete = useSelector(state => state.schoolDelete)
    const {loading:loadingDelete, success:successDelete, error:errorDelete} = schoolDelete

    const  schoolCreate = useSelector(state => state.schoolCreate)
    const {loading:loadingCreate, success:successCreate, error:errorCreate, school:createdSchool} = schoolCreate

    const  userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    useEffect(() => {
        dispatch({type:SCHOOL_CREATE_RESET})
        //this one maekes the admin dropdown unavailable to the non admins
        if (!userInfo && userInfo.isAdmin) {
            history.push('/login')
        }
        if(successCreate){
            history.push(`/admin/school/${createdSchool._id}/edit`)

            // dispatch(listSchools())

        }else {
            dispatch(listSchools())
        }

    },[dispatch,successCreate,createdSchool, successDelete,history, userInfo])


    const deleteHandler = (id) => {
        if (window.confirm("Are you ready to delete the school?")){
            // dispatch(deleteUser(id))
            dispatch(deleteSchool(id))

        }

    }

    function createSchoolName(school) {
        //create product
        dispatch(createSchool())

    }

    return(
        <div>
            <Row className='align-items-center'>
                <Col><h1>All schools</h1></Col>
                <Col className='text-right'>
                    <Button className='my-3' onClick={createSchoolName}>
                        <i className='fas fa-plus'> Add school</i>

                    </Button>

                </Col>
            </Row>
            {loadingDelete && <Loader/>}
            {errorDelete && <Message variant='danger'>{errorDelete}</Message>}

              {loadingCreate && <Loader/>}
            {errorCreate && <Message variant='danger'>{errorCreate}</Message>}

            {loading ? (
                <Loader/>
                )
            : error ?(
                            <Message variant='danger'>{error}</Message>
                ):
                    (
                        <Table striped bordered hover responsive className='table-sm'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>cutoff</th>
                                    <th>population</th>
                                    <th>level</th>
                                    <th>location</th>
                                    <th>status</th>
                                    <th></th>
                                </tr>

                            </thead>
                            <tbody>
                                {schools.map(school => (
                                    <tr key={school._id}>
                                        <td>{school._id}</td>
                                        <td>{school.name}</td>
                                        <td>{school.cutoff}</td>
                                        <td>{school.numberOfstudents}</td>
                                        <td>{school.level}</td>
                                        <td>{school.location}</td>
                                        <td>{school.status}</td>

                                        <td>
                                            <LinkContainer to={`/admin/school/${school._id}/edit`}>
                                                <Button variant='light' className='btn-sm'>
                                                    <i className='fas fa-edit' />

                                                </Button>

                                            </LinkContainer>
                                            <Button variant='danger' className='btn-sm' onClick={() =>
                                                deleteHandler(school._id)}>
                                                    <i className='fas fa-trash' />
                                                </Button>
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
export default AllSchoolsListScreen