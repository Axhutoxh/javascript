// eslint-disable-next-line react/prop-types

import {useState} from 'react';
// eslint-disable-next-line react/prop-types
export default function Paginator({totalPages,maxPages}){

    const [currentBtn,setCurrentBtn] = useState(1)
    const [initialBtn,setInitialBtn] = useState(0)

    const totalBtn = []

    function handleBtn(e){
        setCurrentBtn(e.target.innerText)
     
    }

    const handlePrevBtn = ()=>{
    if(currentBtn>1){
        if(currentBtn-1>0&&initialBtn>0){
            setInitialBtn(initialBtn-1)
        }
        // if(currentBtn-1>2){
        //     setInitialBtn(initialBtn-1)
        // }
        setCurrentBtn(currentBtn-1)
    }
    }

    const handleNextBtn = ()=>{
        if(currentBtn<totalPages){
            if(currentBtn+1>maxPages){
                setInitialBtn(initialBtn+1)
            }
            setCurrentBtn(currentBtn+1)
        }
    }
    const maxBtn = (init,totalPages)=>{


        
            for(let i=init; i<totalPages; i++){
                totalBtn.push(<button key={i} className={(i+1)==currentBtn?'selected':''} onClick={handleBtn}>{i+1}</button>)
             }
             return totalBtn
        


    }
    if(totalPages<maxPages){
        return <h4 className="warning">max pages should not be greater than total pages</h4>
    }

    return (
        <>
        <div>
            <button className={currentBtn<=1?'disabled':''} disabled={currentBtn<=1} onClick={handlePrevBtn}>Prev</button>
            {maxBtn(initialBtn,maxPages+initialBtn)}
            
            <button className={currentBtn>=totalPages?'disabled':''} onClick={handleNextBtn}>Next</button>
        </div>
        {totalPages}
        {maxPages}
        Pagination
        
        </>
    )
}