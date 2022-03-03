import React from "react";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
function SchoolChoice({ school }) {
    return(
        <Card className='my-3 p-3 rounded'>
            {/*<Link to={`/schoolChooseDetails/${school._id}`}>*/}
            {/*    <Card.Img src={school.image}/>*/}
            {/*</Link>*/}
            <Card.Body>
                <Link to={`/schoolChooseDetails/${school._id}`}>
                    <Card.Title as='div'>
                    <strong>{school.name}</strong>
                </Card.Title>
                </Link>

                <Card.Text as='div'>
                   <div className='my-3'>
                       {school.motto}
                   </div>
                </Card.Text>

            </Card.Body>


        </Card>
    )

}
export default SchoolChoice