import dayjs from "dayjs";

import { createContext, useState } from "react";

export const DayContext = createContext()


export const DayContextProvider = ({children})=>{

 const [daysechdule,setDayschdule] = useState("")
 
 const [newproject,setNewproject] = useState()
 console.log(newproject)
 
 return ( 
  <DayContext.Provider value={{daysechdule,setDayschdule,newproject,setNewproject}}>
   {children}
  </DayContext.Provider>
 )
}