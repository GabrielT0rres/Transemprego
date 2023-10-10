import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Vagas from './pages/Vagas'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import PerfilCadastro from './pages/PerfilCadastro'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/vagas' element={<Vagas />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/perfil/cadastro' element={<PerfilCadastro />} />
      </Routes>
    </>
  )
}

export default App
