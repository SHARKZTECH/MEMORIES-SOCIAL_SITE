import {Col,Row,Card} from "react-bootstrap"
import {FcLikePlaceholder,FcLike} from "react-icons/fc"
import {Link} from "react-router-dom"

const Home=()=>{
    return(
        <Row xs={1} md={4} className="g-4 mt-3">
        {Array.from({ length: 8 }).map((_, idx) => (
          <Col>
            <Card>
          <Link to={`/${idx}`}>
              <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" />
              <Card.Body>
                <Card.ImgOverlay>
                <Card.Title>Sharkz Reigns</Card.Title>
                <Card.Text>6hrs ago</Card.Text>
                </Card.ImgOverlay>
                <Card.Text>
                    <small className="blockquote-footer">#sharkz city #city #sharkz</small>
                </Card.Text>
                <Card.Title>Title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>
                  {true ? <FcLike/>  : <FcLikePlaceholder/> }
                    <span style={{color:'#ab2645'}}>1 LIKE</span>
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