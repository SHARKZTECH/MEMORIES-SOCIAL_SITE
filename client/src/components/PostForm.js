import {Card,Form,Button} from "react-bootstrap"
const PostForm=()=>{
    return(
        <Card bg={"secondary"}  className="p-2 mt-3">
            <h5 className="text-center">Creating a Memory</h5>
            <Form.Group className="mb-1" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Title" />         
            </Form.Group>  
            
            <Form.Group className="mb-1" controlId="formBasicEmail">
              <Form.Control as="textarea" rows={3} placeholder="Messages" />         
           </Form.Group>

           <Form.Group className="mb-1" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Tags" />         
           </Form.Group>
           
           <Form.Group controlId="formFile" className="mb-3">
            <Form.Control type="file" />
          </Form.Group>
         <Button>Post</Button>
      </Card>
    )
}
export default PostForm;