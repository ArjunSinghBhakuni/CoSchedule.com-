import React from 'react'
import Calender from '../components/Calender'
import CreateNewProject from"../components/CreateNewProject"
import {Routes,Route} from "react-router-dom"
import EditProject from './EditProject'
const MainRoute = () => {
  return (
 <Routes>
  <Route path='/' element={<Calender/>}/>
  <Route path='newproject' element={<CreateNewProject/>}/>
  <Route path='editproject' element={<EditProject/>}/>
  </Routes>
  )
}

export default MainRoute