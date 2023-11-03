import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './layout/NavBar'
import { Home } from './pages/Home'
import Footer from './layout/Footer'
import SingleBurger from './pages/SingleBurger'

function App() {
  return (
    <>
     <BrowserRouter>
     <NavBar/>
     <Routes>
      <Route index element={<Home/>}/>
       <Route path='/SingleBurger/:_id' element={<SingleBurger/>}/>  
     </Routes>
     <Footer/>
     </BrowserRouter> 
       
    </>
  )
}

export default App
