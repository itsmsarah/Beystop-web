
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './components/header/index'
import { Cadastro } from './pages/cadastro'
import { Home } from './pages/home'
import { Liberacao } from './pages/liberacao'
import { Login } from './pages/login/'
import { Retirada } from './pages/retirada'
import { VeiculosAtivos } from './pages/veiculosativos'

function App() {
  return (
    <>
      <Header/>

      <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/liberacao" element={<Liberacao />} />
        <Route path="/retirada" element={<Retirada />} />
        <Route path="/veiculosativos" element={<VeiculosAtivos />} />
         </Routes>
   

    </>
  )
}

export default App
