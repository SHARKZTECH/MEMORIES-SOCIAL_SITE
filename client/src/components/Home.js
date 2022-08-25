import {Col,Row,Card} from "react-bootstrap"
import {FcLikePlaceholder,FcLike} from "react-icons/fc"
import {Link} from "react-router-dom"
import axios from "axios";
import { useState,useEffect} from "react";

const Home=()=>{
  const [memories,setMemories]=useState([]);

  const getMemories=async()=>{
    const {data}=await axios.get("http://127.0.0.1:5000/posts");
    setMemories(data);
  }

   const likeHandler=async(id)=>{
       try{
           const res=await axios.patch(`http://127.0.0.1:5000/posts/${id}/likePost`);
           window.location.reload();
       }catch(err){
        console.log(err);
       }
   }

  useEffect(()=>{
       getMemories();
  },[]);
    return(
        <Row xs={1} md={4} className="g-4 mt-3">
        {memories.map((memory, idx) => (
          <Col key={idx}>
            <Card style={{height:'25rem'}}>
              <Link to={`/${memory._id}`}>
              <Card.Img fluid height={'200rem'} variant="top" src={memory.selectedFile || "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"} />
              </Link>
                {/* <Card.ImgOverlay>
                <Card.Title>{memory.creator}</Card.Title>
                <Card.Text>6hrs ago</Card.Text>
                </Card.ImgOverlay> */}
              <Card.Body>
                <Card.Text>
                    <small className="blockquote-footer">{memory.tags}</small>
                </Card.Text>
                <Card.Title>{memory.title}</Card.Title>
                <Card.Text>
                  {memory.message}
                </Card.Text>
                  {true ? <FcLike size={24} onClick={()=>likeHandler(memory._id)}/>  : <FcLikePlaceholder/> }
                    <span style={{color:'#ab2645'}}> {memory.likeCount} LIKES</span>
              </Card.Body> 
            </Card>
          </Col>
        ))}
      </Row>
    )
}
export default Home;