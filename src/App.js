
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Academics from './Components/Academics';
import Admission from './Components/Admission';
import Faculty from './Components/Faculty';
import Student from './Components/Student';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element= {<Home />} ></Route>
          <Route exact path='/about' element= {<About />} ></Route>
          <Route exact path='/academics' element= {<Academics />} ></Route>
          <Route exact path='/admission' element= {<Admission />} ></Route>
          <Route exact path='/faculty' element= {<Faculty />} ></Route>
          <Route exact path='/student' element= {<Student />} ></Route>
          <Route exact path='/gallery' element= {<Gallery />} ></Route>
          <Route exact path='/contact' element= {<Contact />} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
