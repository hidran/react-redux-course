import {
   SET_FILTER
  
   } from './../actions/actiontypes'; 

export default function setFilterReducer(state = 'ALL', action) {
    switch (action.type) {

        case `${SET_FILTER}_FULFILLED`: 
            return action.payload.data.filter
          
        default:
        return state;
    }
}