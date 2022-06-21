import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route , Routes } from "react-router-dom";
import Student from './container/students';

class App extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <Routes>
          <Route path="/" element={<Student/>}/>
          
        </Routes>
      </div>
    )
  }
}
export default App;
