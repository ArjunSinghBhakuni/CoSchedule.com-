import React from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import dayjs from "dayjs";
const Day = ({ day, rowIdx }) => {
  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "#e9f0f4"
      : "";
  }

  return (
    <Box
      border={"1px solid grey"}
      w="167"
      h="200px"
      bgColor={`${getCurrentDayClass()}`}
    >
      <header>
        {rowIdx === 0 && (
          <p className="text-sm mt-1">{day.format("dddd").toUpperCase()}</p>
        )}
        <p>{day.format("MM-DD")}</p>
      </header>
    </Box>
  );
};

export default Day;
