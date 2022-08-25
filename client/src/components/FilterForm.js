import {Card,Button,Form} from "react-bootstrap";
import { useState } from "react";
const FilterForm=()=>{
    const [tag,setTag]=useState("");
    const [memory,setMemory]=useState("");

    const searchHandler=()=>{
        alert(memory+" "+tag)


        setMemory("");
        setTag("");
    }


    return(
        <Card bg={"secondary"}  className="p-2 mt-3">
              <Form.Group className="mb-1" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Search Memories" onChange={(e)=>setMemory(e.target.value)} value={memory} />         
                </Form.Group>  
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Search Tags" onChange={(e)=>setTag(e.target.value)} value={tag} />         
                </Form.Group>
            <Button onClick={searchHandler}>Search</Button>
        </Card>
    )
}
export default FilterForm;