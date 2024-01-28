import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import './index.css'
import Home from './Page/Home'
import Addedit from './Page/Addedit'
import View from './Page/View'
import { ToastContainer  } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Header from './Component/Header'


const App = () => {
  return (
    
    <BrowserRouter>
    <div className='app'>
      <Header/>
      <ToastContainer position='top-center' />
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route  path='/Add' Component={Addedit}/>
        <Route  path='/Update/:id' Component={Addedit}/>
        <Route  path='/View/:id' Component={View}/>
        
        </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
