import { SET_CURRENT_USER } from "../components/API/types"

const initalState = {
    user:{},
    validToken: false
}

const booleanActionPayload = (payload) => {
    if(payload){
        return true
    }else{
        return false
    }
}

export default function(state = initalState, action){
      switch(action.type){
          case SET_CURRENT_USER:
          return{
              ...state,
              validToken: booleanActionPayload(action.payload),
              user: action.payload
          }

          default:
              return state
      }
}