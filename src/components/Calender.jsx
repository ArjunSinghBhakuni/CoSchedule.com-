import React, { useState } from 'react'

import {getMonth} from '../utils/utils'
import Month from './Month'
import "./Months.css"

const Calender = () => {
const [currentMonth,setCurrentMonth] = useState(getMonth())

  console.table(getMonth(2))
  return (
    <div> 
      <Month month={currentMonth}/>
 
    </div>
  )
}

export default Calender