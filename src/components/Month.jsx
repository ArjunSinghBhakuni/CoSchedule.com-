import React from 'react'
import Day from './Day'
 
import { SimpleGrid,Container,Box} from '@chakra-ui/react'

const Month = ({month}) => {
  return (
    <Box>
      <Box h="60px">
        
      </Box>

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