import {Col,Row,Card} from "react-bootstrap"
import {FcLikePlaceholder,FcLike} from "react-icons/fc"
import {Link} from "react-router-dom"
import axios from "axios";
import { useState,useEffect, memo } from "react";

const Home=()=>{
  const [memories,setMemories]=useState([]);

  const getMemories=async()=>{
    const {data}=await axios.get("http://127.0.0.1:5000/posts");
    setMemories(data);
  }

  useEffect(()=>{
       getMemories();
  },[]);
    return(
        <Row xs={1} md={4} className="g-4 mt-3">
        {memories.map((memory, idx) => (
          <Col key={idx}>
            <Card>
          <Link to={`/${memory._id}`}>
              <Card.Img variant="top" src={memory.selectedFil  || "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"} />
              <Card.Body>
                <Card.ImgOverlay>
                <Card.Title>{memory.creator}</Card.Title>
                <Card.Text>6hrs ago</Card.Text>
                </Card.ImgOverlay>
                <Card.Text>
                    <small className="blockquote-footer">{memory.tags}</small>
                </Card.Text>
                <Card.Title>{memory.title}</Card.Title>
                <Card.Text>
                  {memory.message}
                </Card.Text>
                <Card.Text>
                  {true ? <FcLike/>  : <FcLikePlaceholder/> }
                    <span style={{color:'#ab2645'}}> {memory.likeCount} LIKES</span>
                </Card.Text>
              </Card.Body> 
            </Link>
            </Card>
          </Col>
        ))}
      </Row>
    )
}
export default Home;