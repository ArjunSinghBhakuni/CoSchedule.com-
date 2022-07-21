import {
  Box,
  Button,
  Container,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import dayjs from "dayjs";
import { CloseIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { DayContext } from "../context/DayContext";
import { addNewProject } from "../Redux/action";
 
const CreateNewProject = () => {
  const { daysechdule } = useContext(DayContext);
  const {setNewproject} = useContext(DayContext)

  // console.log(daysechdule);
  
  const navigate = useNavigate();
   
  const [text,setText] = useState('')
  const [short,setShort] = useState('')
  const handleCreateButton = () => {
   const payload = {
    title:text,
    shortDes:short,
    tasks:[],
    date:daysechdule,
    description:"",
   } 
//   console.log(payload)
   setNewproject(payload)
   navigate("/editproject");
     (addNewProject(payload))
     
  };
  return (
    <Box w="100%" h="30rem">
      <Box marginLeft={"1500px"} marginTop="30px">
        <Link to="/">
          <CloseIcon />
        </Link>
      </Box>

      <Stack w="800px" m="auto" marginTop="15rem">
        <Text marginLeft={"600px"}>{daysechdule}</Text>

        <Input
          placeholder="New Project Title"
          w="800px"
          h="60px"
          fontSize="30px"
          onChange ={(e)=>setText(e.target.value)}
        />
        <br />
        <VStack>
          <Button
            onClick={handleCreateButton}
            marginLeft={"700px"}
            w="100px"
            p="10px"
          >
            Create Project
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default CreateNewProject;
