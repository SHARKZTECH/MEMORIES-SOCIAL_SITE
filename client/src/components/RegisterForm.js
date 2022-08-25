import {Form,Button} from "react-bootstrap"
import { Link } from "react-router-dom";
import { useState } from "react";
import FormContainer from "./FormContainer"
import axios from "axios";

const RegisterForm=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");;
    const [password,setPassword]=useState("");
    const [password2,setPassword2]=useState("");

    const registerHandler=async(e)=>{
        e.preventDefault();
        if (name && email && password && password2){
            if(password === password2){
                const config={
                    headers:{
                        'Content-type':'application/json'
                    }
                }
                try{
                    const {data}=await axios.post("http://127.0.0.1:5000/users/register",{
                        name,email,password
                    },config);
                    
                        if(data.user){
                            setName("");
                            setEmail("");
                            setPassword("");
                            setPassword2("");
                        }
                }catch(err){
                   alert(err.response['data']);
                }
             


            }else{
                alert("Password Donot match!")
            }
        }else{
            alert("All fields required!")
        }
      
    }
    return(
        <FormContainer>
            <h4 className="text-center">Sign Up</h4>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Names</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Names" onChange={(e)=>setName(e.target.value)} value={name} />          
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"  onChange={(e)=>setEmail(e.target.value)} value={email}/>          
            </Form.Group>  
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} value={password}/>          
            </Form.Group> 
             <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" onChange={(e)=>setPassword2(e.target.value)} value={password2}/>          
            </Form.Group>
            <Button variant="primary" type="submit" onClick={registerHandler}>
                Register
            </Button>
            <p>
                Alreay Have Account? Login <Link to="/login">Here</Link>
            </p>
        </FormContainer>
    )
}

export default RegisterForm