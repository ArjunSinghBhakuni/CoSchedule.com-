import { Flex,Box,Button,Text,Popover,CircularProgress,PopoverTrigger,PopoverContent,Tabs,Tab,TabList,TabPanels,TabPanel,Grid} from '@chakra-ui/react'
import { BiHomeAlt} from 'react-icons/bi';
import {IoIosShuffle} from 'react-icons/io';
import { AiTwotoneCalendar,AiOutlineSetting} from 'react-icons/ai';
import {HamburgerIcon,CalendarIcon} from '@chakra-ui/icons'
import {SiSimpleanalytics} from 'react-icons/si';
import {BsFillBookmarkStarFill,BsQuestionCircle} from 'react-icons/bs'
import React from 'react'
import './Home.css'

const Homepage = () => {
  return <Box display="block"  overflow="clip">
             <Flex alignItems='center'>
                <Box><Button variant='ghost' size='md' width="50px" ><HamburgerIcon w={6} h={6} color='gray.500'/></Button></Box>
                <Box marginLeft="15px">
                <Popover placement='top-start' >
                    <PopoverTrigger >
                    <Button variant='ghost'><Text fontSize={'20px'}>Home</Text></Button>
                    </PopoverTrigger>
                    <PopoverContent  width={"220px"} bg="white" padding={"5px 0px"} >
                        <Flex direction='column'>
                        <Button variant='ghost' justifyContent={'flex-start'} gap="10px" ><CalendarIcon w={3.5} h={3.5}/>Home</Button>
                        <Button variant='ghost' justifyContent={'flex-start'} gap="10px" ><CalendarIcon w={3.5} h={3.5}/>Calendar</Button>
                        <Button variant='ghost' justifyContent={'flex-start'} gap="10px" ><CalendarIcon w={3.5} h={3.5}/>Analytics</Button>
                        </Flex>
                    </PopoverContent>
                </Popover>
                </Box>
            </Flex>
            <Tabs variant='unstyled' display={'flex'}>
                <TabList justifyContent={'space-between'} >
                    <Box display={'flex'} flexDirection='column' justifyContent={'space-between'} height={'570px'}  >
                    <Flex direction={"column"} gap="15px" marginTop={"20px"}>
                    <Tab _selected={{ color: 'white', bg: 'red.600' }} borderRadius={"0px 5px 5px 0px"} w="50px" h='35px'><BiHomeAlt/></Tab>
                    <Tab _selected={{ color: 'white',  bg: 'red.600' }} borderRadius={"0px 5px 5px 0px"} w="50px" h='35px'><AiTwotoneCalendar/></Tab>
                    <Tab _selected={{ color: 'white',  bg: 'red.600' }} borderRadius={"0px 5px 5px 0px"} w="50px" h='35px'><IoIosShuffle/></Tab>
                    <Tab _selected={{ color: 'white',  bg: 'red.600' }} borderRadius={"0px 5px 5px 0px"} w="50px" h='35px'><SiSimpleanalytics/></Tab>
                    <Tab _selected={{ color: 'white',  bg: 'red.600' }} borderRadius={"0px 5px 5px 0px"} w="50px" h='35px'><BsFillBookmarkStarFill/></Tab>
                    </Flex>
                    <Flex direction={"column"} gap="15px" marginTop={"20px"}>
                    <Tab _selected={{ color: 'white', bg: 'red.600' }} borderRadius={"0px 5px 5px 0px"} w="50px" h='35px'><AiOutlineSetting/></Tab>
                    <Tab _selected={{ color: 'white',  bg: 'red.600' }} borderRadius={"0px 5px 5px 0px"} w="50px" h='35px'><BsQuestionCircle/></Tab>
                    </Flex>
                    </Box>
                </TabList>
                <TabPanels margin={"20px 20px 0 20px"}>
                    <TabPanel h="530px">
                        <Flex direction={'row'} gap='10px'>
                        <Box w="80%" h="530px" overflowY="scroll" padding="15px" >
                            <Box padding={'15px'} marginBottom='30px' borderRadius={'10px'} height='450px' boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'}>
                                <Flex direction={'column'} textAlign='left' gap='8px' >
                                    <Text fontWeight='semibold' fontSize='20px'>🏆Getting Started</Text>
                                    <Text fontFamily='sans-serif' fontSize='15px'>Successful marketers complete these milestones within their first week.</Text>
                                </Flex>
                                <Flex>
                                <Grid  w='85%' height='auto' paddingTop='10px' templateColumns='repeat(2, 1fr)' gap={6}>
                                    <Flex borderRadius='5px' w='100%' padding='10px' h='100px' border='1px solid black' gap='10px'>
                                        <Box><input className='checkbox-round' type='checkbox'/></Box>
                                        <Box textAlign='left'>
                                            <Text fontSize='13px' fontWeight='semibold'>View the Getting Started Guide</Text>
                                            <Text fontSize='12px' fontWeight='medium' color='gray'>Get tips & best practices to organize all of your marketing on your new calendar.</Text>
                                        </Box>
                                    </Flex>
                                    <Flex borderRadius='5px' w='100%' padding='10px' h='100px' border='1px solid black' gap='10px'>
                                        <Box><input className='checkbox-round' type='checkbox'/></Box>
                                        <Box textAlign='left'>
                                            <Text fontSize='13px' fontWeight='semibold'>View the Getting Started Guide</Text>
                                            <Text fontSize='12px' fontWeight='medium' color='gray'>Get tips & best practices to organize all of your marketing on your new calendar.</Text>
                                        </Box>
                                    </Flex>
                                    <Flex borderRadius='5px' w='100%' padding='10px' h='100px' border='1px solid black' gap='10px'>
                                        <Box><input className='checkbox-round' type='checkbox'/></Box>
                                        <Box textAlign='left'>
                                            <Text fontSize='13px' fontWeight='semibold'>View the Getting Started Guide</Text>
                                            <Text fontSize='12px' fontWeight='medium' color='gray'>Get tips & best practices to organize all of your marketing on your new calendar.</Text>
                                        </Box>
                                    </Flex>
                                    <Flex borderRadius='5px' w='100%' padding='10px' h='100px' border='1px solid black' gap='10px'>
                                        <Box><input className='checkbox-round' type='checkbox'/></Box>
                                        <Box textAlign='left'>
                                            <Text fontSize='13px' fontWeight='semibold'>View the Getting Started Guide</Text>
                                            <Text fontSize='12px' fontWeight='medium' color='gray'>Get tips & best practices to organize all of your marketing on your new calendar.</Text>
                                        </Box>
                                    </Flex>
                                    <Flex borderRadius='5px' w='100%' padding='10px' h='100px' border='1px solid black' gap='10px'>
                                        <Box><input className='checkbox-round' type='checkbox'/></Box>
                                        <Box textAlign='left'>
                                            <Text fontSize='13px' fontWeight='semibold'>View the Getting Started Guide</Text>
                                            <Text fontSize='12px' fontWeight='medium' color='gray'>Get tips & best practices to organize all of your marketing on your new calendar.</Text>
                                        </Box>
                                    </Flex>
                                </Grid>
                                <Flex  w='20%' height='300px'  alignItems={'center'} justifyContent='center'>
                                    <CircularProgress value={10} size='120px' thickness='5px' color='green.400' ><Text fontSize={'13px'} color='gray.400'>Setup progress</Text></CircularProgress>
                                </Flex>
                                </Flex>
                            </Box>
                            <Box padding={'15px'} borderRadius={'10px'} height='450px' boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'}></Box>
                        </Box>
                        <Box width='35%' height={'520px'} padding={'15px'} borderRadius={'10px'} boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'}>
                        <Tabs isLazy>
                            <TabList gap='25px' >
                                <Tab _selected={{ color: 'red.600' }} fontWeight='semibold'>Notifications</Tab>
                                <Tab _selected={{ color: 'red.600' }} fontWeight='semibold'>Favorites</Tab>
                                <Tab _selected={{ color: 'red.600' }} fontWeight='semibold'>Recent</Tab>
                            </TabList>
                            <TabPanels>
                                {/* initially mounted */}
                                <TabPanel>
                                <p>one!</p>
                                </TabPanel>
                                {/* initially not mounted */}
                                <TabPanel>
                                <p>two!</p>
                                </TabPanel>
                            </TabPanels>
                            </Tabs>
                        </Box>
                        </Flex>
                    </TabPanel>
                    <TabPanel border={'1px solid red'}>
                    <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
  </Box>
  
}

export default Homepage