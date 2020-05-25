import { SIGNUP_USER, LOGGIN_USER } from "../actionTypes";

const initialState = {
  user: {}
};
export default function(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_USER:
      return { 
        ...state, 
        signUpUser: action.payload 
      };
    case LOGGIN_USER:
      return {
        ...state,
        loginUser: action.payload
      };

    default:
      return state;
  }
}
