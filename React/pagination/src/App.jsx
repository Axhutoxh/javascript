

import './App.css'

import Paginator from './components/pagination'

function App() {


  return (
    <>

     <Paginator totalPages={10} maxPages={5} />
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
