
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import MainLayout from '../pages/MainLayout'
import { useEffect } from 'react'
import PageNotFound from '../pages/PageNotFound'
import MainProvider from '../context/MainProvider'



const Router = ()=>{

    useEffect(()=>{
        console.log('Router Connecting ....')
    })



    return (
        <>   
                <BrowserRouter>
                    <MainProvider>
                        <Routes>
                            <Route path='/' element={<MainLayout /> } />
                            <Route path="*" element={<PageNotFound />} />
                        </Routes>
                    </MainProvider>        
                </BrowserRouter>
        </>
    )

}

export default Router