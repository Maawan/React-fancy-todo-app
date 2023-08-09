import {
  REMOVE_TODO,
  ADD_TODO,
  ADD_TODOs_FROM_LOCAL_STORAGE,
  CHECK,
  UNCHECK,
} from "./action.types";
const initialState = [];
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((todo) => action.payload !== todo.id);
    case ADD_TODOs_FROM_LOCAL_STORAGE:
      return action.payload;
    case CHECK:
      let op = -1;
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === action.payload) {
          op = i;
          break;
        }
      }
      state[op].isChecked = true;
      console.log(op + " Index" + state[op].isChecked);

      if(state === undefined || state === null){
        }else{
            localStorage.setItem("maawan" , JSON.stringify(state));
        }


      return state;
    case UNCHECK:
      state[
        state.findIndex((todo) => todo.id === action.payload)
      ].isChecked = false;
      console.log(state);
      if(state === undefined || state === null){
    }else{
        localStorage.setItem("maawan" , JSON.stringify(state));
    }

      return state;
    default:
      return state;
  }
};
