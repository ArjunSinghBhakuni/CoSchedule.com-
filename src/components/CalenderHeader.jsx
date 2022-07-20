import { ChevronLeftIcon, ChevronRightIcon,Search2Icon,SunIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Heading,Center } from '@chakra-ui/react'
import dayjs from 'dayjs';
import React, { useContext, useState } from 'react'
import GlobalContext from './context/GlobalContext';

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
      
      <Flex>

      
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
<Center>

      <Search2Icon  w={5} h={5} />
</Center>
<Button>Create</Button>
<Button>{<SunIcon/>}Ideas </Button>
     
        </Flex>
    </Box>
  )
}

export default CalenderHeader