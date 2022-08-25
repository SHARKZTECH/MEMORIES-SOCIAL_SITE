import { useEffect, useState } from "react";
import {Card, Col,Image,Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import axios from "axios";

const MemoryDetails=()=>{
    const params=useParams();
    const [memory,setMemory]=useState({});


    const getMemory=async()=>{
        const {data}=await axios.get(`http://127.0.0.1:5000/posts/${params.id}`);
        setMemory(data);
      }

      useEffect(()=>{
        getMemory();
      },[params.id]);

    return(
        <Card className="p-3 my-3" style={{overflow:"hidden"}}>
        {memory && 
            (<Row>
                <Col>
                <h5>{memory.title}</h5>
                <p>{memory.tags}</p>
                <p>
                    {memory.message}
                </p>
                <p>Craeted By: Sharkz Reigns</p>
                <p>6hrs ago</p>
                <hr></hr>
                <p>RealTime Chart-coming soon!</p>
                <hr></hr>
                <p>Comments-comming soon!</p>
                <hr></hr>
                </Col>
                <Col>
                <Image height={'400'} src={memory.selectedFile || "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" } alt="img"/>
                </Col>
            </Row>)}
            <p className="m-0 mt-5">You might like:</p>
            <hr></hr>
            <Row xs={1} md={5} className="g-4 mt-3">
            {Array.from({ length: 5 }).map((_, idx) => (
                <Col>
                  <h5>Title</h5>
                  <p>Sharkz Reigns</p>
                  <p>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                  </p>
                  <p>Likes 2</p>
                  <Image height={'100'} src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" alt="img"/>
                </Col>           
            ))}
            </Row>
        </Card>
    )
}

export default MemoryDetails;