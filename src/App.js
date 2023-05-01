

import Home from "./components/home";
import Education from "./components/education";
import Experience from "./components/experience";
import About from "./components/about";
import Skill from "./components/skill";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element ={<Home/>}> </Route>
      <Route path ='/skills' element={<Skill/>}></Route>
      <Route path='/experience' element={<Experience/>}></Route>
      <Route path='/education' element={<Education/>}></Route>
      <Route path='/about' element={<About/>}></Route>

    </Routes>
  );
}

export default App;
