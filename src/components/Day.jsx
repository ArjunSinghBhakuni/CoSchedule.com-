import React from "react";
import { Box, Grid, GridItem, Text ,Flex} from "@chakra-ui/react";
import dayjs from "dayjs";
import { AddIcon } from "@chakra-ui/icons";
import "./day.css"
const Day = ({ day, rowIdx }) => {
  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "#e9f0f4"
      : "";
  }



  return (
    <Box class="myDIV"
    p="10px"
      border={"1px solid grey"}
      w="167"
      h="200px"
      textAlign="start"
      bgColor={`${getCurrentDayClass()}`}
    >
      <Text>
        {rowIdx === 0 && (
          <p className="text-sm mt-1">{day.format("dddd").toUpperCase()}</p>
        )}
      </Text>
      <Flex justifyContent="space-between"  >

        <Text>{day.format("MMM-DD")}</Text>
        <AddIcon class="hide" />
      </Flex> 
        
    </Box>
  );
};

export default Day;
