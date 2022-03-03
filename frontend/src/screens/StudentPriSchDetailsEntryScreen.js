import React from "react"
import {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import {Form, Button, Row, Col, FormGroup} from "react-bootstrap";
import {useDispatch,useSelector} from "react-redux";
import CheckOutSteps from "../components/CheckOutSteps";
import { register} from "../actions/userActions"
import FormContainer from "../components/FormContainer";
import {saveStudentsPriDetails} from "../actions/selectActions";
function StudentPriSchDetailsEntryScreen({history}) {
    const select = useSelector(state => state.select)
    const {studentPriDetails} = select

    const dispatch = useDispatch()


    const [username,setUsername] = useState(studentPriDetails.username)
    const [index_number,setIndex_number] = useState(studentPriDetails.index_number)
    const [sex,setSex] = useState(studentPriDetails.sex)
    const [DOB,setDOB] = useState(studentPriDetails.DOB)
    const [school,setSchool] = useState(studentPriDetails.school)


   const submitHandler = (e) => {
        e.preventDefault()
       dispatch(saveStudentsPriDetails({username,index_number,sex,DOB,school}))
       history.push('/studentEntryPriSchScores')

   }
    return(
        <FormContainer>
            <CheckOutSteps step1 step2/>
            <h1>students entry primary school details</h1>
            <Form onSubmit={submitHandler}>
                <FormGroup controlId={username}>
                    <Form.Label>user name</Form.Label>
                    <Form.Control
                    type='name'
                    required
                    placeholder='enter student name'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    >

                    </Form.Control>

                </FormGroup>
                <FormGroup controlId={index_number}>
                    <Form.Label>index number</Form.Label>
                    <Form.Control
                    type='text'
                    required
                    placeholder='enter index number'
                    value={index_number}
                    onChange={(e) => setIndex_number(e.target.value)}
                    >

                    </Form.Control>

                </FormGroup>
                <FormGroup controlId={sex}>
                    <Form.Label>Gender</Form.Label>
                    <Form.Control
                    type='name'
                    required
                    placeholder='enter gender'
                    value={sex}
                    onChange={(e) => setSex(e.target.value)}
                    >

                    </Form.Control>

                </FormGroup>
                <FormGroup controlId={DOB}>
                    <Form.Label>date of birth</Form.Label>
                    <Form.Control
                    type='text'
                    required
                    placeholder='enter DOB'
                    value={DOB}
                    onChange={(e) => setDOB(e.target.value)}
                    >

                    </Form.Control>

                </FormGroup>
                <FormGroup controlId={school}>
                    <Form.Label>school</Form.Label>
                    <Form.Control
                    type='name'
                    required
                    placeholder='enter school'
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                    >

                    </Form.Control>

                </FormGroup>
                <Button type='submit' variant='primary'>continue</Button>


            </Form>


        </FormContainer>
    )

}export default StudentPriSchDetailsEntryScreen;