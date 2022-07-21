import React from 'react'
import { AddIcon, CalendarIcon, ChatIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { Menu, MenuButton, MenuItem, MenuList,Button, Heading, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const CreateButtonMenuItem = ({day}) => {
  return (
   <MenuList textAlign={"start"} paddingLeft="5px" border="1px solid red">
       <Heading  color='grey' size='md'>Create New</Heading >
       
       <hr/>
      
        <MenuItem > <Link to='/newproject'>
        <CalendarIcon marginRight={"5px"}/> Project
        </Link>
        </MenuItem>
        <MenuItem> <ChatIcon marginRight={"5px"}/>Soical Media</MenuItem>
        <hr/>
        <Text>More Option</Text>
      </MenuList>
  )
}

export default CreateButtonMenuItem