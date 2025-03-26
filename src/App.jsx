import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Componentes/Nav';
import About from './Componentes/About';
import Tecnologis from './Componentes/Tecnologis';
import Proyectos from './Componentes/Proyectos';

// function App() {
//   return (
//     <Router>
//       <Nav />
//       <Routes>
//         <Route path="/" element={<About />} />
//       </Routes>

//       <Tecnologis/>
//       <Proyectos />
      
//     </Router>
//   );
// }

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/tecnologis" element={<Tecnologis />} />
        <Route path="/proyectos" element={<Proyectos />} />
      </Routes>
    </Router>
  );
}


export default App;

