
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import MainLayout from '../pages/MainLayout'
import { useEffect } from 'react'
import PageNotFound from '../pages/PageNotFound'

const Router = ()=>{

    useEffect(()=>{
        console.log('Router Connecting ....')
    })



    return (
        <>
                <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<MainLayout /> } />
                            <Route path="*" element={<PageNotFound />} />

                        </Routes>
                </BrowserRouter>
   
        </>
    )

}

export default Router