import React from "react"
import {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import {Form,Button,Row,Col} from "react-bootstrap";
import {useDispatch,useSelector} from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import {stRegister} from "../actions/studentsActions";
import FormContainer from "../components/FormContainer";
const StudentsDetailsRegister = ({ history, location}) => {
    const [username,setUsername] = useState('')
    const [school,setSchool] = useState('')
    const [sex,setSex] = useState('')
    const [DOB,setDOB] = useState('')
    const [index_number,setIndex_number] = useState('')
    const [message,setMessage] = useState('')

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin


    const dispatch = useDispatch()
    // const redirect = location.search ? location.search.split('=')[1] : '/studentDetails'


    const studentRegister = useSelector(state => state.studentRegister)
    const {error, loading, studentInfo} = studentRegister

     useEffect(() => {
        if (studentInfo){
            history.push('/studentDetails')
        }
    }, [history,studentInfo,userInfo])
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(stRegister(username, school, sex, DOB,index_number))
    }
    return(
        <FormContainer>
            <h5>entering your Primary school details</h5>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader/>}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='username'>
                    <Form.Label>username </Form.Label>
                    <Form.Control
                        required
                        type='name'
                        placeholder='Enter username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                    <Form.Group controlId='school'>
                    <Form.Label>School </Form.Label>
                    <Form.Control
                        required
                        type='name'
                        placeholder='Enter school name'
                        value={school}
                        onChange={(e) => setSchool(e.target.value)}
                    >
                    </Form.Control>
                    </Form.Group>
                    <Form.Group controlId='sex'>
                    <Form.Label>sex </Form.Label>
                    <Form.Control
                        required
                        type='name'
                        placeholder='Enter sex'
                        value={sex}
                        onChange={(e) => setSex(e.target.value)}
                    >
                    </Form.Control>
                    </Form.Group>
                    <Form.Group controlId='index_number'>
                    <Form.Label>index number </Form.Label>
                    <Form.Control
                        required
                        type='name'
                        placeholder='Enter index number'
                        value={index_number}
                        onChange={(e) => setIndex_number(e.target.value)}
                    >
                    </Form.Control>
                    </Form.Group>
                    <Form.Group controlId='DOB'>
                    <Form.Label>Date Of Birth</Form.Label>
                    <Form.Control
                        required
                        type='name'
                        placeholder='Enter your date of birth '
                        value={DOB}
                        onChange={(e) => setDOB(e.target.value)}
                    >
                    </Form.Control>
                    </Form.Group>
                <br/>
                <Button type='submit' variant='primary' onClick={submitHandler}>submit</Button>

            </Form>




        </FormContainer>
    )

}
export  default StudentsDetailsRegister