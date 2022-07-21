import { ChevronLeftIcon, ChevronRightIcon,Search2Icon,SunIcon,AddIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Heading,Center } from '@chakra-ui/react'
import dayjs from 'dayjs';
import React, { useContext, useState } from 'react'
import GlobalContext from '../context/GlobalContext';
import {Link} from 'react-router-dom'
import CreateButton from './CreateButton';

const CalenderHeader = () => {
 const { monthIndex, setMonthIndex } = useContext(GlobalContext); //global context
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }

  return (
    <Box >
      
      <Flex border={"1px solid red"} justifyContent="space-between">

        <Box display={"flex"} marginLeft="40%"  justifyContent={"space-evenly"}  w="400px">


      
      <Button onClick={handlePrevMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
        <ChevronLeftIcon/>
        </span>
      </Button>
      <Heading className="ml-4 text-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format(
          " MMMM YYYY"
        )}
      </Heading>
      <Button onClick={handleNextMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
        <ChevronRightIcon/>
        </span>
      </Button>
      <Button
        onClick={handleReset}
   
      >
        Today
      </Button>
        </Box>
        <Box display={"flex"}  justifyContent={"space-evenly"}  w="15rem">

 
<Center>

      <Search2Icon  w={5} h={5} />
</Center>
  
  <Button  >
 
      <CreateButton/>
 
    </Button>
<Button>{<SunIcon marginRight={"0.3rem"}/>}{" "} Ideas </Button>
     
        </Box>
        </Flex>
    </Box>
  )
}

export default CalenderHeader