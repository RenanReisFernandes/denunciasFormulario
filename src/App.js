import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Navbar from './componentes/Navbar'
import Cadastrar from './pages/Cadastrar'
import Denuncias from './pages/Denuncias'
import Direitos from './pages/Direitos'
import Home from './pages/Home'
import Formulario from './pages/Formulario'
import Footer from './componentes/Footer'
import Entrar from './pages/Entrar'

const App =() =>{
  return(
    
    <div className="App">

   
      <Router>
      <Navbar />
          <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/formulario" element={<Formulario/>} />
            <Route path="/direitos" element={<Direitos/>} />
            <Route path="/entrar" element={<Entrar/>} />
            <Route path="/cadastrar" element={<Cadastrar/>} />
            <Route path="/denuncias" element={<Denuncias/>} />
                       
          </Routes>
      </Router>
   <Footer />

    </div>

  );
}

export default App;