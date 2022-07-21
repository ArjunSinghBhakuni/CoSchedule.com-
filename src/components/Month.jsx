import React from 'react'
import Day from './Day'
 
import { SimpleGrid,Container,Box} from '@chakra-ui/react'
import CalenderHeader from './CalenderHeader'

const Month = ({month}) => {
  return (
    <Box>
    <CalenderHeader/>
   < Box  >
   {month.map((row, i) => (
     <SimpleGrid  columns={7}    key={i}>
       {row.map((day, idx) => (
         <Day day={day} key={idx} rowIdx={i} />
       ))}
     </SimpleGrid    >
   ))}
 </ Box>
   </Box>
  )
}

export default Month