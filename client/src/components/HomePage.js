import {Row,Col} from "react-bootstrap"

import Home from "./Home";
import FilterForm from "./FilterForm";
import PostForm from "./PostForm";
const HomePage=()=>{
    return(
        <Row>
        <Col md={9}>
          <Home/>
        </Col>
        <Col>
          <FilterForm/>
          <PostForm/>
        </Col>
      </Row>
    )
}
export default HomePage;