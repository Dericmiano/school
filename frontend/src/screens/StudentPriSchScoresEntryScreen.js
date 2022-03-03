import React from "react";
import {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import {Form, Button, FormGroup} from "react-bootstrap";
import {useDispatch,useSelector} from "react-redux";
import CheckOutSteps from "../components/CheckOutSteps";
import {saveStudentsPriScores} from "../actions/selectActions";
import { register} from "../actions/userActions"
import FormContainer from "../components/FormContainer";
function StudentPriSchScoresEntryScreen({history}) {
    const select = useSelector(state => state.select)
    const {studentPriScores} = select
    const {studentPriDetails} = select
    const dispatch = useDispatch()

     // const [averageScore,setAverageScore] = useState(studentPriScores.averageScore)
     const [maths,setMaths] = useState(studentPriScores.maths)
     const [english,setEnglish] = useState(studentPriScores.english)
     const [kiswahili,setKiswahili] = useState(studentPriScores.kiswahili)
     const [science,setScience] = useState(studentPriScores.science)
     const [socialStudies,setSocialStudies] = useState(studentPriScores.socialStudies)

    if (!studentPriDetails.username){
        history.push('/studentEntryPriSchDetails')
    }



    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveStudentsPriScores({maths,english,kiswahili,science,socialStudies}))
        history.push('/submit')
        console.log("submitted")


    }
    return(
        <FormContainer>
            <CheckOutSteps step1 step2 step3/>
                        <h1>students entry KCPE scores</h1>

            <Form onSubmit={submitHandler}>

                <FormGroup controlId={maths}>
                    <Form.Label>maths</Form.Label>
                    <Form.Control
                    type='text'
                    required
                    placeholder='enter mathes'
                    value={maths}
                    onChange={(e) => setMaths(e.target.value)}
                    >

                    </Form.Control>

                </FormGroup>
                <FormGroup controlId={english}>
                    <Form.Label>english</Form.Label>
                    <Form.Control
                    type='text'
                    required
                    placeholder='enter english'
                    value={english}
                    onChange={(e) => setEnglish(e.target.value)}
                    >

                    </Form.Control>

                </FormGroup>
                <FormGroup controlId={kiswahili}>
                    <Form.Label>kiswahili</Form.Label>
                    <Form.Control
                    type='text'
                    required
                    placeholder='enter student name'
                    value={kiswahili}
                    onChange={(e) => setKiswahili(e.target.value)}
                    >

                    </Form.Control>

                </FormGroup>
                <FormGroup controlId={science}>
                    <Form.Label>science</Form.Label>
                    <Form.Control
                    type='name'
                    required
                    placeholder='enter student name'
                    value={science}
                    onChange={(e) => setScience(e.target.value)}
                    >

                    </Form.Control>

                </FormGroup>
                <FormGroup controlId={socialStudies}>
                    <Form.Label>social studies</Form.Label>
                    <Form.Control
                    type='text'
                    required
                    placeholder='enter student name'
                    value={socialStudies}
                    onChange={(e) => setSocialStudies(e.target.value)}
                    >

                    </Form.Control>

                </FormGroup>
                <br/>
                <Button type='submit' variant='primary'>
                    continue
                </Button>

            </Form>

        </FormContainer>
    )

}
export default StudentPriSchScoresEntryScreen;