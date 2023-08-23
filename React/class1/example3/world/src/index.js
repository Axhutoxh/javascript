import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import App from './App';
// import Like from './components/Like';
// import Counter from './components/counter';
// import RandomName from './components/RandomName';

// import ParentMoney from './components/ParentMoney';
import TodoList from './components/TodoList';
import RegisterationForm from './components/RegisterationForm';

const Component  = ()=>{
    return(<div>Hello abcs</div>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 <div >
    <Component />
<RegisterationForm />
  {/* <Like />
  <Counter counterName={'Ashutosh'} intialValue={4} />
  <Counter counterName={'Abhishek'} intialValue={6} />
  <Counter  intialValue={2}/>
  <RandomName />
  <App /> */}
 </div>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
