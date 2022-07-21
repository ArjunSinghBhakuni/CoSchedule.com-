import * as types from './actiontypes'

const  initialState = {
 
 project:[],
}

export const reducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case types.Get_Array_of_Days:
    return { ...state, ...payload }

    case types.ADD_NEW_PROJECT:
      return {...state,...payload}

  default:
    return state
  }
}
