import React from "react";
import {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import {Form,Button,Row,Col} from "react-bootstrap";
import {useDispatch,useSelector} from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import {login} from "../actions/userActions";
import FormContainer from "../components/FormContainer";

const LoginScreen = ({location, history}) => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const dispatch = useDispatch()

    const redirect = Location.search ? Location.search.split('=')[1] : '/school'
    const userLogin = useSelector(state => state.userLogin)
    const {error, loading, userInfo} = userLogin

    useEffect(() => {
        if (userInfo){
            history.push(redirect)
        }
    }, [history,userInfo,redirect])
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email,password))

    }

    return(
        <FormContainer>
            <h1>sign in</h1>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader/>}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email'>
                    <Form.Label>email Address</Form.Label>
                    <Form.Control

                        type='email'
                        placeholder='Enter email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    >
                    </Form.Control>


                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    sign In
                </Button>

            </Form>
           <Row className='py-3'>
                <Col>
                    New student? <Link
                    to={redirect ? `/register?redirect=${redirect}` : '/register'}>Register</Link>
                </Col>

            </Row>
        </FormContainer>
    )

}
export default LoginScreen