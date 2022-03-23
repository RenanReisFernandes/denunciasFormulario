import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer';

import SeusDireitos from './pages/SeusDireitos/SeusDireitos';
import SobreNos from './pages/SobreNos/SobreNos'
import Homepage from './pages/homepage/Homepage';
import AgeEdit from "./pages/api/ageGroup/Edit/AgeEdit";
import AgePost from "./pages/api/ageGroup/Post/AgePost";

import Age from './pages/api/ageGroup/Age'


function App() {
  return (

    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/sobre" element={<SobreNos />} />
          <Route path="/direitos" element={<SeusDireitos />} />
          <Route path='/api/age' element={<Age />} />
          <Route path='/api/age/post' element={<AgePost />} />
          <Route path='/api/age/edit/:id' element={<AgeEdit />} />

        </Routes>
      </Router>
      <Footer />

    </>

  );
}

export default App;