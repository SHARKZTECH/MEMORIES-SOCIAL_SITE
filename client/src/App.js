import './App.css';
import {Routes,BrowserRouter as Router,Route} from "react-router-dom"
import {Container} from "react-bootstrap"
import Header from './components/Header';
import HomePage from './components/HomePage';
import MemoryDetails from './components/MemoryDetails';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';



function App() {
  return (
    <Container className='my-4'>
      <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route path='/:id' element={<MemoryDetails/>}/>
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/register" element={<RegisterForm/>}/>
      </Routes>
      </Router>
    </Container>

  );
}

export default App;
