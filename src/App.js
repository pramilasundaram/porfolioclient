import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import About from "./components/about/About";
import Education from "./components/education/Education";
import Skill from "./components/skill/Skill";
import Project from "./components/projects/Project";
import Contact from "./components/Contact/Contact";
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/education" element={<Education/>}/>
    <Route path="/skill" element={<Skill/>}/>
    <Route path="/Project" element={<Project/>}/>
    <Route path="/contact" element={<Contact/>}/>
    </Routes>    
    </BrowserRouter>
  );
}

export default App;
