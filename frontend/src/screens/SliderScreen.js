import React  from "react";
import {Carousel} from "react-bootstrap";
import {Link} from "react-router-dom";
import {LinkContainer} from "react-router-bootstrap";
// import {useNavigate} from "react-router-dom";
import slider1 from '../images/slider1.jpg'
import slider2 from '../images/slider2.jpg'
import slider3 from '../images/slider3.jpg'
import {Button} from "react-bootstrap";

function SliderScreen() {
    // let history = useNavigate();
    //
    //
    // function toApplyPage() {
    //     history.push("/apply")
    //
    // }
    // // const toApplyPage = () => {
    // //     history.push("/apply")



    return(
          <Carousel  fluid variant="dark" className='py-0' >
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={slider1}
              alt="First slide"
            />
            <Carousel.Caption>

              <h5>please proceed to form an account</h5>
              <p>isss ia a platform to allow primary school pupils to select the school of their choice</p>
                <LinkContainer to='/login'>
                    <Button variant="outline-primary">Login</Button>
                </LinkContainer>
                <LinkContainer to='/school'>
                    <Button variant="success">view schools</Button>
                </LinkContainer>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={slider2}
              alt="Second slide"
            />

            <Carousel.Caption>

              <h5>How selection of students is based </h5>
              <p>Selection is based by the marks you scored in your final exam</p>
                <LinkContainer to='/login'>
                    <Button variant="outline-primary">Login</Button>
                </LinkContainer>
                <LinkContainer to='/school'>
                    <Button variant="success">view schools</Button>
                </LinkContainer>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000} >
            <img
              className="d-block w-100"
              src={slider3}
              alt="Third slide"
            />
            <Carousel.Caption>

              <h5>Wishing you best of lack</h5>
              <p>As you choose your school may you choose the school of your choice to conquer your dreams!!.</p>
                <LinkContainer to='/login'>
                    <Button variant="outline-primary">Login</Button>
                </LinkContainer>
                <LinkContainer to='/school'>
                    <Button variant="success">view schools</Button>
                </LinkContainer>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>


    )

}
export default SliderScreen