import axios from 'axios'
import * as types from './actiontypes'

const getArrayDays = (data)=>(dispatch)=>{

 dispatch({type:types.Get_Array_of_Days,payload:data})

}
export {getArrayDays}


export const addNewProject=(params)=>(dispatch)=>{
//console.log(params)
 axios.post(" http://localhost:8080/projects",params).then((r)=>
 {
  dispatch({type:types.ADD_NEW_PROJECT,payload:r.data})
 })
}
