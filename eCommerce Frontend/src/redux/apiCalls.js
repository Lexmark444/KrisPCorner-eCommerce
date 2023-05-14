import { loginFailure, loginStart, loginSuccess } from "./userSlice"
import { userRequest } from "../requestMethods"

export const login = async (dispatch, user) => {
    dispatch(loginStart())
    try {
        const res = await userRequest.post("/auth/login", user)
        dispatch(loginSuccess(res.data))
        console.log(res.data)
    } catch (error) {
        dispatch(loginFailure())
    }
}