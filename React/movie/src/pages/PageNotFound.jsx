


import notFound from '../assets/notFound1.svg'


const PageNotFound = ()=>{

    return (
        <div className=" flex flex-col h-screen justify-center items-center">
         <img src={notFound} alt="pageNotFound" width="40%" style={{minWidth:'400px',maxHeight:'800px'}} />
        <div className="text-4xl pt-5 text-medium font-meduim font-mono">Page Not Found</div>
      </div>
    )
}
    
    export default PageNotFound