import { Button, Card,Navbar,Container } from "react-bootstrap";
import { useNavigate} from "react-router-dom";
import {LinkContainer} from "react-router-bootstrap"

const Header=()=>{
    const navigate=useNavigate();
    return(
        <Card bg={'success'}>
            <Navbar>
            <Container>
                <LinkContainer to="/">
                <Navbar.Brand>MEMORIES</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Sharkz Reigns
                </Navbar.Text>
                <Navbar.Text>
                    <Button className="mx-3" onClick={()=>navigate("/login")} >Login</Button>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </Card>
    )
}
export default Header;