import React,{useEffect} from "react";
import {Link} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import {Row,Col,ListGroup,Image,Form,Card,Button} from "react-bootstrap";
import Message from "../components/Message";
import {removeFromSelect, selectSchool} from "../actions/selectActions";

function SelectScreen({match, location, history}) {
    const schoolId = match.params.id
    const numberOfChoice = location.search ? Number(location.search.split('=')[1]) : 1
    // console.log("numberOfChoice", numberOfChoice)
    const  dispatch = useDispatch()
    const select = useSelector(state => state.select)
    const {selectSchools} = select
    // console.log("select schools", selectSchools)
    useEffect(()=>{
        if (schoolId){
            dispatch(selectSchool(schoolId,numberOfChoice))

        }
    }, [schoolId,numberOfChoice])
    const removeFromSelectHandler = (id) => {
        dispatch(removeFromSelect(id))
        // console.log("remove",id)

    }
    const checkOutHandler = () => {

        history.push('/studentEntryPriSchDetails')

    }
    return(
        <Row>
            <Col md={8}>
                {selectSchools.length > 3 ? <Message variant='danger'> excess schools please ensure you have 3 schools</Message> :
                    <Message variant='info'> max is 3 schools to choose</Message>}
                <h3>selection page</h3>
                <Link className='btn btn-light' to='/schoolChoose'>select another school</Link>
                {selectSchools.length === 0 ? (
                    <Message variant='info'>
                        your selection page is empty<Link to='/schoolChoose'>go back</Link>
                    </Message>
                ):(
                    <ListGroup variant='flush'>
                        {selectSchools.map(select =>(
                            <ListGroup.Item key={select.school}>
                                {/*saved the id as school in the */}
                                <Row>
                                    <Col md={2}>
                                        <Image src={select.image} alt={select.name} fluid rounded/>
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`/school/${select.school}`}>{select.name}</Link>
                                    </Col>
                                    {/*<Col md={2}>*/}
                                    {/*    {select.numberOfChoice}*/}
                                    {/*</Col>*/}
                                    <Col md={3}>
                                         <Form.Control
                                            as='select'
                                            value={select.numberOfChoice}
                                            onChange={(e) =>dispatch(selectSchool(
                                                select.school, e.target.value
                                            ))}
                                                    >
                                            {
                                                [...Array(select.numberOfChoice).keys()].map((x)=>(
                                                    <option key={x+1} value={x+1}>
                                                        {x+1}
                                                    </option>
                                                ))
                                            }
                                        </Form.Control>

                                    </Col>
                                    <Col md={1}>
                                        <Button
                                            type='button'
                                            variant='light'
                                            onClick={() => removeFromSelectHandler(select.school)}
                                        >
                                            <i className='fas fa-trash'></i>

                                        </Button>

                                    </Col>
                                </Row>

                            </ListGroup.Item>
                        ))}
                         <Button
                    type='button'
                    className='btn-block'
                    disabled={selectSchools.length !== 3}
                    onClick={checkOutHandler}
                >
                    proceed to confirm

                </Button>

                    </ListGroup>

                )}

            </Col>
            <Col>

            </Col>

        </Row>
    )



}
export default SelectScreen