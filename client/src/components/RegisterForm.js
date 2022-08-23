import {Container,Form,Button} from "react-bootstrap"
import { Link } from "react-router-dom"
const RegisterForm=()=>{
    return(
        <Container>
            <h4 className="text-center">Sign Up</h4>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Names</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Names" />          
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />          
            </Form.Group>  
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" />          
            </Form.Group> 
             <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />          
            </Form.Group>
            <Button variant="primary" type="submit">
                Register
            </Button>
            <p>
                Alreay Have Account? Login <Link to="/login">Here</Link>
            </p>
        </Container>
    )
}

export default RegisterForm