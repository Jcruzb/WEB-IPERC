import { Route, Routes } from 'react-router'
import './App.css'
import Register from './Views/Register/Register'
import Login from './Views/Login/Login'
import NotFound from './Views/NotFound/NotFound'

function App() {


  return (
    <Routes>
      {/* not found */}
      <Route path="*" element={<NotFound/>} />
      <Route path="/" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
  )
}

export default App
