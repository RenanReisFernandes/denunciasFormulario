import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Navbar from './components/Navbar'

import SeusDireitos from './pages/SeusDireitos/SeusDireitos'
import Homepage from './pages/homepage/Homepage'
import SobreNos from './pages/SobreNos/SobreNos'
import Footer from './components/Footer'
import Age from './pages/api/Age'
import AgeEdit from "./pages/api/ageGroup/Edit/AgeEdit";
import AgePost from "./pages/api/ageGroup/Post/AgePost";

const App =() =>{
  return(
    
    <div className="App">

   
      <Router>
      <Navbar />
          <Routes>
            <Route path="/home" element={<Homepage/>} />
            <Route path="/sobre" element={<SobreNos/>} />
            <Route path="/direitos" element={<SeusDireitos/>} />
            <Route path='/api/age' element={<Age />} />
				<Route path='/api/age/post' element={<AgePost />} />
				<Route path='/api/age/edit/:id' element={<AgeEdit />} />
                       
          </Routes>
      </Router>
   <Footer />

    </div>

  );
}

export default App;