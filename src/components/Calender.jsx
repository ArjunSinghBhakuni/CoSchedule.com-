import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from "../context/GlobalContext";
import {getMonth} from '../utils/utils'
import Month from './Month'
 


const Calender = () => {

  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);


  console.table(getMonth(2))
  return (
    <div> 
      <Month month={currentMonth}/>
 
    </div>
  )
}

export default Calender