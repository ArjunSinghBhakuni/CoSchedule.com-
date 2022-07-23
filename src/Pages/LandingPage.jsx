import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from '../components/landing/Main' 
import {Login} from '../components/login/Login'
import {Register} from '../components/register/Register'
import Homepage from '../components/HomePage/Homepage'
import Calender from '../components/calender/Calender'
import CreateNewProject from"../components/calender/CreateNewProject"
import EditProject from '../components/calender/EditProject'
export const LandingPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="login" element={<Login/>}/> 
       <Route path="/register" element={<Register/>}/> 
       <Route path ="/home" element={<Homepage/>} />
       <Route path='/calender' element={<Calender/>}/>
  <Route path='newproject' element={<CreateNewProject/>}/>
  <Route path='editproject' element={<EditProject/>}/>
      </Routes>
    </div>
  );
};
