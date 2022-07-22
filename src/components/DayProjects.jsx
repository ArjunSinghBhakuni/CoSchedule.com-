import React,{useContext} from 'react'
import {Box,Text,Avatar} from "@chakra-ui/react"
import { DayContext } from '../context/DayContext';
import { useNavigate} from "react-router-dom"
import "./day.css";

const DayProjects = ({title,refNO}) => {
 const { setNewproject, setProjectrefNo } = useContext(DayContext);
const navigate = useNavigate()
 const handleClick = (refNO)=>{
  setProjectrefNo(refNO);
  navigate("/editproject");
 }

  return (
    <Box border="1px solid grey" h="30px" onClick={()=>handleClick(refNO)} className="pro">
     <Text>{title}</Text>
     <Avatar size={"sm"} src='https://bit.ly/sage-adebayo' />
    </Box>
  )
}

export default DayProjects