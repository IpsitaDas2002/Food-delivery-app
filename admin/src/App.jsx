import React from 'react'
import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/Sidebar/Sidebar"
import { Route, Routes } from 'react-router-dom'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'
import Add from './pages/Add/Add'

const App = () => {
  return (
    <div>
      <Navbar/>
      <hr/>
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path='/add' elememt={<Add/>}/>
          <Route path='/list' elememt={<List/>}/>
          <Route path='/orders' elememt={<Orders/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
