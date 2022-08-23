import {Card,Button,Form} from "react-bootstrap"
const FilterForm=()=>{
    return(
        <Card bg={"secondary"}  className="p-2 mt-3">
              <Form.Group className="mb-1" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Search Memories" />         
                </Form.Group>  
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Search Tags" />         
                </Form.Group>
            <Button>Search</Button>
        </Card>
    )
}
export default FilterForm;