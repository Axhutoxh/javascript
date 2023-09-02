

import { useState } from 'react'
import './App.css'
import LifeCycle from './components/LifeCycle'



function App() {
const [btn,setBtn] =useState(false)

const handleBtn=()=>{
  setBtn(!btn)
}

  return (
    <>
    <button onClick={handleBtn}>click</button>
{btn?<LifeCycle />:''}
   
{/* 
     <Paginator totalPages={10} maxPages={5} /> */}
     {/* <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Product />} />
      <Route path='/products/:id' element={<Product />} />
      <Route path='/products/:id/:name' element={<Product />} />
     </Routes>
     </BrowserRouter> */}


    </>
  )
}

export default App
