import { createContext } from "react";


export const MainContext = createContext('light')

// eslint-disable-next-line react/prop-types
const  MainProvider = ({children})=>{


    return (
        <MainContext.Provider value="Provider initialze">
            {children}
        </MainContext.Provider>
    )
}


export default MainProvider