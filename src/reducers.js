import {combineReducers} from "redux";

// 액션 타입
const ADD_CHAT = "ADD_CHAT"
const CHAT_ON = "CHAT_ON"
const CHAT_OFF = "CHAT_OFF"

const initialState = {
  isChat: true
}

const chat = (state = [] , action) => {
  switch(action.type){
    case ADD_CHAT:
      return [...state, {
        state: action.data,
      }
    ]
    default: 
      return state
  }
}

const chatOnOff = (state = initialState, action) => {
  switch(action.type){
    case CHAT_ON:
      return {
        ...state, 
        isChat: true
      }
    case CHAT_OFF:
      return {
        ...state,
        isChat: false
      }
    default:
      return state
  }
}


const reducers = combineReducers({
  chat,
  chatOnOff
})

//액션 생산자
export const addChat = (data) => {
  return {
    type: ADD_CHAT,
    data
  }
}

export const chatOn = () => {
  return {
    type: CHAT_ON
  }
}

export const chatOff = () => {
  return {
    type: CHAT_OFF
  }
}


export default reducers;
