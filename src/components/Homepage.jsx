import { Flex,Box,Button,Text,Popover,PopoverTrigger,PopoverContent,Tabs,Tab,TabList,TabPanels,TabPanel} from '@chakra-ui/react'
import {HamburgerIcon,CalendarIcon,QuestionOutlineIcon,SettingsIcon} from '@chakra-ui/icons'
import React from 'react'

const Homepage = () => {
  return <Box>
             <Flex alignItems='center'>
                <Box><Button variant='ghost' size='md' width="50px" ><HamburgerIcon w={6} h={6} color='gray.500'/></Button></Box>
                <Box>
                <Popover placement='top-start'>
                    <PopoverTrigger>
                    <Button variant='ghost'><Text fontSize={'20px'}>Home</Text></Button>
                    </PopoverTrigger>
                    <PopoverContent  width={"220px"} bg="white" padding={"5px 0px"} >
                        <Button variant='ghost'>Home</Button>
                        <Button variant='ghost'>Calendar</Button>
                        <Button variant='ghost'>Analytics</Button>
                    </PopoverContent>
                </Popover>
                </Box>
            </Flex>
            <Tabs variant='unstyled'>
                <TabList display=''>
                    <Tab _selected={{ color: 'white', bg: 'orange.300' }}>Tab 1</Tab>
                    <Tab _selected={{ color: 'white', bg: 'orange.300' }}>Tab 2</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                    <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                    <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>


<Flex direction={"row"}> 
    {/* <Flex direction={"column"} justifyContent="space-between" width={"50px"} gap="300px" padding="10px 10px 10px 0">
        <Box>
            <Flex gap={"3px"} direction="column">
                <Button  
                colorScheme='orange' 
                variant='ghoust' 
                size='md' 
                width="50px" 
                height={"35px"} 
                borderRadius="0px 5px 5px 0px"
                >
                H
                </Button>
                <hr />
                <Button 
                    colorScheme='orange' 
                    variant='ghost' size='md' 
                    width="50px" 
                    height={"35px"} 
                    borderRadius="0px 5px 5px 0px"> 
                    <CalendarIcon w={3.5} h={3.5} color='gray.500'/>
                </Button>
                <hr />
                <Button 
                    colorScheme='orange' 
                    variant='ghoust' 
                    size='md'
                    width="50px" 
                    height={"35px"} 
                    borderRadius="0px 5px 5px 0px">
                        Q
                </Button>
                <Button 
                    colorScheme='orange' 
                    variant='ghoust' 
                    size='md' 
                    width="50px" 
                    height={"35px"} 
                    borderRadius="0px 5px 5px 0px">
                        U
                </Button>
                <Button 
                    colorScheme='orange' 
                    variant='ghoust' 
                    size='md' 
                    width="50px" 
                    height={"35px"} 
                    borderRadius="0px 5px 5px 0px">
                        A
                </Button>
            </Flex>
        </Box>
        <Box>
            <Button 
                colorScheme='orange' 
                variant='ghost' size='md' 
                width="50px" 
                height={"35px"}
                borderRadius="0px 5px 5px 0px">
            <SettingsIcon w={3.5} h={3.5} color='gray.500'/>
            </Button>
            <Button 
                colorScheme='orange' 
                variant='ghost' 
                size='md' 
                width="50px" 
                height={"35px"} 
                borderRadius="0px 5px 5px 0px">
            <QuestionOutlineIcon w={3.5} h={3.5} color='gray.500'/>
        </Button>
        </Box>
    </Flex>
    <Box></Box> */}
  </Flex>
  </Box>
  
}

export default Homepage