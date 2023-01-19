import logo from './logo.svg';
import './App.css';
import Fetch from './fetch';
//import Course from './course';
import { BrowserRouter as Router , Route ,Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
 
import Course from './Pages/Course';

import Home from './Pages/Home';

function App() {
  return (
     <Router>  
        <Navbar/>
        <Routes>
         
           <Route exact path="/" element ={<Course/>} />
           <Route exact path="/feed" element ={<Home/>}/>
      
        </Routes> 
    </Router>
  );
}

export default App;
