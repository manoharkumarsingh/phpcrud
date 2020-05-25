import { User } from "../../api/api";
import {
    SIGNUP_USER
} from "../actionTypes";
export const user = (data) => {
    return async (dispatch) => {
        await User.signup(data)
            .then(res => {
                var user = {
                    type: SIGNUP_USER,
                    payload: "Manohar"
                }
                dispatch(user);
            })
            .catch(error => {
                throw (error);
            });
    };
}