import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './layout/NavBar'
import { Home } from './pages/Home'
import Footer from './layout/Footer'
import Cart from './pages/Cart'

function App() {
  return (
    <>
     <BrowserRouter>
     <NavBar/>
     <Routes>
      <Route index element={<Home/>}/>
      <Route
            path="/Cart"
            element={<Cart />}
          />
     </Routes>
     <Footer/>
     </BrowserRouter> 
       
    </>
  )
}

export default App
