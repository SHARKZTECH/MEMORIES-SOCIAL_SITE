import {Card,Form,Button} from "react-bootstrap"
import FileBase from 'react-file-base64';
import { useState,useEffect } from "react";
import axios from "axios";

const PostForm=()=>{
  const [user,setUser]=useState({});
  const [token,setToken]=useState("");
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });



  const handleSubmit=async()=>{
    setPostData({...postData,creator:user});

    if(postData.title && postData.message && postData.tags && postData.selectedFile && postData.creator)
    {
            const config={
              headers:{
                  'Content-type':'application/json',
                  "auth-token":token
              }
          }
              try{
                  const {data}=await axios.post("http://127.0.0.1:5000/posts/create",postData,config);
                      if(data){
                        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
                        alert("Memory added successful!")
                      }
              }catch(err){
                alert(err.response['data']);
              }  
     }else{
            alert("All fields required!")
       }
        }

  useEffect(()=>{
    const user=localStorage.getItem("User");
    const token=localStorage.getItem("Token");
    setUser(user);
    setToken(token);
  },[]);
  
 
    return(
        <Card bg={"secondary"}  className="p-2 mt-3">
   { user || token ? (      <>
      <h5 className="text-center">Creating a Memory</h5>
            <Form.Group className="mb-1" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Title" 
                value={postData.title} 
                onChange={(e) => setPostData({ ...postData, title: e.target.value })} />         
            </Form.Group>  
            
            <Form.Group className="mb-1" controlId="formBasicEmail">
              <Form.Control as="textarea" rows={3} placeholder="Messages"
              value={postData.message} 
              onChange={(e) => setPostData({ ...postData, message: e.target.value })} />         
           </Form.Group>

           <Form.Group className="mb-1" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Tags"
              value={postData.tags}
              onChange={(e)=>setPostData({...postData,tags:e.target.value})} />         
           </Form.Group>
           
           <Form.Group controlId="formFile" className="mb-3">
            <div className="file_input-container">
           <FileBase  type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} value={postData.selectedFile}/>   
           </div>           
          </Form.Group>

         <Button onClick={handleSubmit}>Post</Button>
         </>):(
          <p>Login to create a memory</p>
         )}
      </Card>
    )
}
export default PostForm;