import {Container,Form,Button} from "react-bootstrap"
import {Link} from "react-router-dom"
const LoginForm=()=>{
    return(
        <Container>
            <h4 className="text-center">Sign In</h4>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />          
            </Form.Group> 
             <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" />          
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
            <p>
                Don`t Have Account ? Register <Link to="/register"> Here</Link>
            </p>
        </Container>
    )
}

export default LoginForm