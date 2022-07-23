import React from 'react'
import Calender from '../components/calender/Calender'
import CreateNewProject from"../components/calender/CreateNewProject"
import {Routes,Route} from "react-router-dom"
import EditProject from '../components/calender/EditProject'
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