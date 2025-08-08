import Login from './Components/Login';
import Register from './Components/Register';
import MainPage from './Pages/MainPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from './Context/AuthProvider'
import Pratice from './Pages/Pratice';
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<MainPage />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/pratice' element={<Pratice />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
