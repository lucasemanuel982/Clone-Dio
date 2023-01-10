import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import {Home} from './pages/home'
import {Login} from './pages/login'
import {Feed} from './pages/feed'
import {Cadastro} from './pages/cadastro'

function App() {
  return (
      <Router>
        <Routes>
          <Route path="Clone-Dio/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/Feed" element={<Feed />}/>
          <Route path="/cadastro" element={<Cadastro />}/>
        </Routes>
      </Router>
  );
}

export default App;
