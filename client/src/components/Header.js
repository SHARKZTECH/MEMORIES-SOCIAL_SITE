import { Button, Card,Navbar,Container } from "react-bootstrap";
import { useNavigate} from "react-router-dom";
import {LinkContainer} from "react-router-bootstrap";
import { useState,useEffect } from "react";


const Header=()=>{
    const navigate=useNavigate();
    const [user,setUser]=useState({});
    const [token,setToken]=useState("");
    

    const logout=()=>{
        localStorage.removeItem("User");
        localStorage.removeItem("Token");
        window.location.reload();
    }

    useEffect(()=>{
        const user=localStorage.getItem("User");
        const token=localStorage.getItem("Token");
        setUser(user);
        setToken(token);
      },[user,token]);
  

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
                    {token || user ? (
                         <Button className="mx-3" onClick={logout}>Logout</Button> ):(
                         <Button className="mx-3" onClick={()=>navigate("/login")} >Login</Button> )
                    }
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </Card>
    )
}
export default Header;