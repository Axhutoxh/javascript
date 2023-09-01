import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";

import MovieSection from "./components/MovieList";
import {  useState } from "react";



function App() {

  const onButton=()=>{
    let nflag = !flag
setFlag(nflag)
  }

  const [flag,setFlag] =useState(true)
  return (
    <div className="App">
      <button onClick={onButton}>click me</button>
      {!flag?<Header />:'no header'}
      <Banner />
      <MovieSection />
    </div>
  );
}

export default App;
