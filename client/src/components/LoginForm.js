import {Form,Button} from "react-bootstrap"
import {Link,useNavigate} from "react-router-dom"
import { useState } from "react"
import FormContainer from "./FormContainer"
import axios from "axios"

const LoginForm=()=>{
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const submitHandler=async(e)=>{
        e.preventDefault();

        localStorage.removeItem("User");
        localStorage.removeItem("Token");

        if(email && password){
            const config={
                headers:{
                    'Content-type':'application/json'
                }
            }
            try{
                const {data}=await axios.post("http://127.0.0.1:5000/users/login",{
                    email,password
                },config);
                    if(data){
                        localStorage.setItem("User",data.user._id);
                        localStorage.setItem("Token",data.token);
                        // setEmail("");
                        // setPassword("");
                        navigate("/")
                        window.location.reload();
                    }
            }catch(err){
               alert(err.response['data']);
            }         

        }else{
            alert("All fields required!");
        }

       
    }
    return(
        <FormContainer>
            <h4 className="text-center">Sign In</h4>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} value={email}/>          
            </Form.Group> 
             <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} value={password} />          
            </Form.Group>
            <Button variant="primary" type="submit" onClick={submitHandler}>
                Login
            </Button>
            <p>
                Don`t Have Account ? Register <Link to="/register"> Here</Link>
            </p>
        </FormContainer>
    )
}

export default LoginForm