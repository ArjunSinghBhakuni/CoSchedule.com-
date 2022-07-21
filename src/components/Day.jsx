import React, { useContext, useState } from "react";
import {
  Box,
  Grid,
  GridItem,
  Text,
  Flex,
  MenuButton,
  Menu,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { AddIcon } from "@chakra-ui/icons";
import "./day.css";
import CreateButton from "./CreateButton";
import CreateButtonMenuItem from "./CreateButtonMenuItem";
import { DayContext } from "../context/DayContext";
const Day = ({ day, rowIdx }) => {
  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "#e9f0f4"
      : "";
  }
 // console.log(day)
 //console.log(dayjs().format("DD-MMM-YYYY"))

 const {setDayschdule} = useContext(DayContext)
// console.log(daysechdule)

  return (
    <Box
      className="myDIV"
      p="10px"
      border={"1px solid grey"}
      w="167"
      h="200px"
      textAlign="start"
      bgColor={`${getCurrentDayClass()}`}
    >
      {rowIdx === 0 && (
        <Text className="text-sm mt-1">{day.format("dddd").toUpperCase()}</Text>
      )}

      <Flex justifyContent="space-between">
        <Text>{day.format("MMM-DD")}</Text>

        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton isActive={isOpen} onClick={()=>{
                 // console.log(day.format("MMM-DD"))
                 setDayschdule(`${day.format("DD-MMMM-YYYY")}`)
              
                }}>
                {<AddIcon   marginRight={"0.3rem"} className="hide" />}
              </MenuButton>
              <CreateButtonMenuItem   />
            </>
          )}
        </Menu>
        
      </Flex>
    </Box>
  );
};

export default Day;
