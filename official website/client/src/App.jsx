import React from 'react'
import Nav from "./components/Nav"
import Home from "./Page/Home"
import Login from "./Page/Login"
import Registration from "./Page/Registration"
import Contact from "./Page/contact"
import Catalogue from "./Page/Catalogue"
import Errorpage from "./components/Errorpage"
import { Routes ,Route 
  
} from 'react-router-dom'



const App = () => {
  return (
    <div>
      

      <Nav />
      
        <Routes>
          <Route path="/"  element={<Home />}>
            
          </Route>

          <Route path="/Catalogue" element={ <Catalogue />}>
            
          </Route>

          <Route path="/Contact"element={<Contact/>}>
            
          </Route>

          <Route path='/Login' element={<Login/>} >
            
          </Route>

          <Route path='/Registration' element={ <Registration />}>
            
          </Route>
          <Route element={< Errorpage/>}> 
            
            
          </Route>
        </Routes>
      
        
      
    </div>

  )
}

export default App